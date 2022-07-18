import React from 'react';
import Button from '../Button';
import './alert.scss';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '~/redux/modalReducer';
import alertError from '~/assets/images/alert_error.jpg';

const Alert = () => {
    const dispatch = useDispatch();
    const active = useSelector((store) => store.modalReducer.find((item) => item.name === 'errorName'));

    return (
        <div className={`alert ${active.value ? 'active' : ''}`}>
            <div className="alert_content">
                <img src={alertError} alt="Hình ảnh bị lỗi" />
                <span className="alert_content_notification">
                    Xin lỗi, chức năng này sẽ xây dựng trong thời gian tới
                </span>
                <div className="alert_content_close">
                    <Button isSquared={true} size="small" onClick={() => dispatch(remove('errorName'))}>
                        Đóng
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Alert;
