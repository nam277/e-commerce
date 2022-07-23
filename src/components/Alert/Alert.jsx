import React from 'react';
import './alert.scss';

import { useDispatch, useSelector } from 'react-redux';
import { remove } from '~/redux/modalReducer';
import alertError from '~/assets/images/alert_error.jpg';

import Button from '../Button';

const Alert = () => {
    const dispatch = useDispatch();
    const active = useSelector((store) => store.modalReducer.find((item) => item.name === 'errorName'));

    return (
        <div className={`alert ${active.value ? 'active' : ''}`}>
            <div className="alert_content">
                <img src={alertError} alt="Hình ảnh bị lỗi" />
                <span className="alert_content_notification">
                    Sorry, this feature is going to build in the near future
                </span>
                <div className="alert_content_close">
                    <Button isSquared={true} size="small" onClick={() => dispatch(remove('errorName'))}>
                        close
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Alert;
