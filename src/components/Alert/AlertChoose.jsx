import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mount, remove } from '~/redux/modalReducer';
import Button from '../Button';

import alertLogin from '~/assets/images/login_icon.jpg';

const AlertChoose = ({ type }) => {
    const dispatch = useDispatch();

    const active = useSelector((store) => store.modalReducer.find((item) => item.value && item.name === type));

    const handleLogin = () => {
        dispatch(remove(type));
        dispatch(mount('loginForm'));
    };

    return (
        <div className={`alert-choose ${active ? 'active' : ''}`}>
            <div className="alert-choose_content">
                {type === 'loginFirst' ? (
                    <>
                        <span className="alert-choose_content_notification">Please login first to continue.</span>
                        <img
                            className="alert-choose_content_image"
                            src={alertLogin}
                            alt="Login here"
                            onClick={handleLogin}
                        />
                    </>
                ) : type === 'chooseColor' ? (
                    <span className="alert-choose_content_notification">Choose a color for this product, please.</span>
                ) : type === 'chooseSize' ? (
                    <span className="alert-choose_content_notification">Choose a size for this product, please.</span>
                ) : (
                    ''
                )}
                <div className="alert-choose_content_close">
                    <Button isSquared={true} size="small" onClick={() => dispatch(remove(type))}>
                        close
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AlertChoose;
