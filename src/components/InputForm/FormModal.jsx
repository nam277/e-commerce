import React from 'react';
import Button from '../Button';
import './loginForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '~/redux/modalReducer';
import LoginForm from './LoginForm';
import SigInForm from './SigInForm';

const FormModal = () => {
    const dispatch = useDispatch();
    const activeSigIn = useSelector((store) => store.modalReducer.find((item) => item.name === 'sigInForm'));
    const activeLogIn = useSelector((store) => store.modalReducer.find((item) => item.name === 'loginForm'));

    const closeForm = () => {
        dispatch(remove('sigInForm'));
        dispatch(remove('loginForm'));
    };

    return (
        <div className={`login_modal ${activeSigIn.value || activeLogIn.value ? 'active' : ''}`}>
            <div className="login_modal_content">
                {activeSigIn.value ? <SigInForm /> : null}
                {activeLogIn.value ? <LoginForm /> : null}
                <div className="login_modal_content_close">
                    <Button isSquared={true} size="small" onClick={() => closeForm()}>
                        Đóng
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FormModal;
