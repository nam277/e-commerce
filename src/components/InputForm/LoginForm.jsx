import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from '~/redux/currentUserReducer';
import { remove } from '~/redux/modalReducer';
import Button from '../Button';
import InputItem from './InputItem';
import './loginForm.scss';

const SigInForm = () => {
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
            placeholder: 'Nhập tên của bạn',
            label: 'Tên đăng nhập',
        },
        {
            id: 2,
            name: 'password',
            type: 'text',
            placeholder: 'Nhập mật khẩu',
            label: 'Mật khẩu',
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

    return (
        <div className="login_modal_content_form">
            <h1 className="login_modal_content_form_title">Đăng nhập</h1>
            <form onSubmit={HandleSubmit}>
                {inputs.map((input) => (
                    <InputItem key={input.id} {...input} onChange={handleOnChange} value={values[inputs.name]} />
                ))}
                {inValid === true ? (
                    <span className="form_inValid_notification">Tên đăng nhập hoặc mật khẩu không hợp lệ</span>
                ) : null}
                <div className="form_button_sigIn">
                    <Button type="submit" isSquared={true}>
                        Đăng nhập
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SigInForm;
