import React, { useState } from 'react';
import './loginForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from '~/redux/currentUserReducer';
import { mount, remove } from '~/redux/modalReducer';

import Button from '../Button';
import InputItem from './InputItem';

const LoginForm = () => {
    const users = useSelector((store) => store.users);

    const dispatch = useDispatch();

    const [inValid, setInValid] = useState(null);

    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Enter username*',
            label: 'Username',
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Enter password*',
            label: 'Password',
        },
    ];

    const HandleSubmit = (e) => {
        e.preventDefault();
        const currentUser = users.find(
            (user) => user.username === values.username && user.password === values.password,
        );
        if (!currentUser) {
            setInValid(true);
        }
        if (currentUser) {
            setInValid(false);
            dispatch(remove('loginForm'));
            dispatch(logInUser(values));
        }
    };

    const handleOnChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleToggleForm = () => {
        dispatch(remove('loginForm'));
        dispatch(mount('registerForm'));
    };

    return (
        <div className="login_modal_content_form">
            <h1 className="login_modal_content_form_title">Log in</h1>
            <form onSubmit={HandleSubmit}>
                {inputs.map((input) => (
                    <InputItem key={input.id} {...input} onChange={handleOnChange} value={values[inputs.name]} />
                ))}
                {inValid === true ? (
                    <span className="form_inValid_notification">Invalid username or password </span>
                ) : null}
                <div className="form_button">
                    <span>
                        You haven't had an account yet.<p onClick={handleToggleForm}>Register here</p>
                    </span>
                    <Button type="submit" isSquared={true}>
                        log in
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
