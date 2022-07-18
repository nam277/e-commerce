import React from 'react';
import Button from '../Button';
import './loginForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '~/redux/modalReducer';

const LoginFormModal = () => {
    const dispatch = useDispatch();
    const active = useSelector((store) => store.modalReducer.find((item) => item.name === 'loginForm'));

    return (
        <div className={`login_modal ${active.value ? 'active' : ''}`}>
            <div className="login_modal_content">
                <div className="login_modal_content_close">
                    <Button isSquared={true} size="small" onClick={() => dispatch(remove('loginForm'))}>
                        Đóng
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LoginFormModal;
