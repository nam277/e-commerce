import React from 'react';
import './alert.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { remove } from '~/redux/modalReducer';
import { useState } from 'react';

const AlertSuccess = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState('');
    const active = useSelector((store) => store.modalReducer.find((item) => item.name === 'successfullyRegister'));

    useEffect(() => {
        if (active.value) {
            setShow('show');
        }
    }, [active.value]);

    const handleShowHide = () => {
        dispatch(remove('successfullyRegister'));
        setShow('remove');
    };

    return (
        <div
            className={`alert-success ${show === 'show' ? 'active' : show === 'remove' ? 'remove' : ''}`}
            onClick={handleShowHide}
        >
            <div className="alert-success_content">
                <span className="alert-success_content_notification">You have successfully registered.</span>
                <i className="bx bx-check-circle alert-success_content_icon" />
            </div>
        </div>
    );
};

export default AlertSuccess;
