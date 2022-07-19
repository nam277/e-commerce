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
            placeholder: 'Nhập tên của bạn',
            label: 'Tên đăng nhập',
            errormessage: 'Tên đăng nhập dài 5 - 20 ký tự, ít nhất 1 số, 1 chữ in hoa, không dược dùng ký tự đặc biệt',
            pattern: '^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{5,20}$',
            required: true,
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Nhập địa chỉ email của bạn',
            label: 'Địa chỉ email',
            errormessage: 'Địa chỉ email chưa chính xác',
            required: true,
        },
        {
            id: 3,
            name: 'birthday',
            type: 'date',
            placeholder: 'Ngày, tháng, năm sinh của bạn',
            label: 'Ngày sinh nhật',
            errormessage: 'Bạn cần nhập ngày sinh nhật để được ưu đãi',
            required: true,
        },
        {
            id: 4,
            name: 'password',
            type: 'text',
            placeholder: 'Nhập mật khẩu',
            label: 'Mật khẩu',
            errormessage: 'Mật khẩu dài từ 8 - 20 ký tự, ít nhất 1 chữ in hoa, 1 số, 1 ký tự đặc biệt',
            pattern: `^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Nhập lại mật khẩu',
            label: 'Nhập lại mật khẩu',
            errormessage: 'Mật khẩu không trùng khớp',
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
            <h1 className="login_modal_content_form_title">Đăng ký</h1>
            <form onSubmit={handleSubmit}>
                {existedMessage ? (
                    <span className="form_inValid_notification">Tên đăng nhập đã có người dùng</span>
                ) : null}
                {inputs.map((input) => (
                    <InputItem key={input.id} {...input} onChange={handleOnChange} value={values[inputs.name]} />
                ))}
                <div className="form_button">
                    <Button type="submit" isSquared={true}>
                        Đăng ký
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
