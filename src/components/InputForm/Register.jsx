import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '~/redux/modalReducer';
import { addUser } from '~/redux/usersReducer';
import Button from '../Button';
import InputItem from './InputItem';
import './loginForm.scss';

const LoginForm = () => {
    const users = useSelector((store) => store.users);

    const [values, setValues] = useState({
        username: '',
        email: '',
        birthday: '',
        password: '',
        confirmPassword: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Enter your username',
            label: 'Username',
            errormessage:
                "Username should be 5-20 characters, include at least 1 uppercase, 1 number and shouldn't include any special character!",
            pattern: '^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{5,20}$',
            required: true,
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Enter your email address',
            label: 'Email',
            errormessage: 'It should be a valid email address!',
            required: true,
        },
        {
            id: 3,
            name: 'birthday',
            type: 'date',
            placeholder: 'Enter your birthday',
            label: 'Birthday',
            errormessage: 'Enter your birthday to get a discount',
            required: true,
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'Enter your password',
            label: 'Password',
            errormessage:
                'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
            pattern: `^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            label: 'Confirm Password',
            errormessage: "Password don't match!",
            pattern: values.password,
            required: true,
        },
    ];

    const [existedMessage, setExistedMessage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const existedUser = users.find(
            (user) => user.username === values.username && user.password === values.password,
        );
        if (!existedUser) {
            dispatch(addUser(values));
            dispatch(remove('sigInForm'));
        } else {
            setExistedMessage(true);
        }
    };

    const handleOnChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const dispatch = useDispatch();
    return (
        <div className="login_modal_content_form">
            <h1 className="login_modal_content_form_title">Create Account</h1>
            <form onSubmit={handleSubmit}>
                {existedMessage ? <span className="form_inValid_notification">Username already exists</span> : null}
                {inputs.map((input) => (
                    <InputItem key={input.id} {...input} onChange={handleOnChange} value={values[inputs.name]} />
                ))}
                <div className="form_button">
                    <Button type="submit" isSquared={true}>
                        register
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
