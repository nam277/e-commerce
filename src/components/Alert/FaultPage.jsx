import React from 'react';
import { Link } from 'react-router-dom';
import returnHome from '~/assets/images/return-home.png';
import alertError from '~/assets/images/alert_error.jpg';
import './alert.scss';

const FaultPage = ({ image = alertError }) => {
    return (
        <div className="faultPage">
            <Link to="/" className="faultPage_back">
                <img src={returnHome} alt="return home page" />
            </Link>
            <div className="faultPage_error">
                <span>Sorry, this page is going to build in the near future</span>
                <img src={image} alt="Hình ảnh bị lỗi" />
            </div>
        </div>
    );
};

export default FaultPage;
