import React from 'react';
import './loginForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '~/redux/modalReducer';

import Button from '../Button';
import LoginForm from './LoginForm';
import Register from './Register';

const FormModal = () => {
    const dispatch = useDispatch();
    const activeRegister = useSelector((store) => store.modalReducer.find((item) => item.name === 'registerForm'));
    const activeLogIn = useSelector((store) => store.modalReducer.find((item) => item.name === 'loginForm'));

    const closeForm = () => {
        dispatch(remove('registerForm'));
        dispatch(remove('loginForm'));
    };

    return (
        <div className={`login_modal ${activeLogIn.value || activeRegister.value ? 'active' : ''}`}>
            <div className="login_modal_content">
                {activeRegister.value ? <Register /> : null}
                {activeLogIn.value ? <LoginForm /> : null}
                <div className="login_modal_content_close">
                    <Button isSquared={true} size="small" onClick={() => closeForm()}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FormModal;
