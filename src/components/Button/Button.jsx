import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ bgColor, icon, animation = true, size, children }) => {
    const btnColor = bgColor ? `bg-color-${bgColor}` : 'main-color';

    const animated = animation ? `btn_animation` : '';

    const sizeBtn = size ? `btn_${size}` : '';

    return (
        <button className={`btn ${btnColor} ${animated} ${sizeBtn}`}>
            {icon ? (
                <div className="btn_icon">
                    <i className={`${icon} bx-tada`} />
                </div>
            ) : null}
            <span className="btn_text">{children}</span>
        </button>
    );
};

Button.propTypes = {
    bgColor: PropTypes.string,
    icon: PropTypes.string,
    animation: PropTypes.bool,
    size: PropTypes.string,
};

export default Button;
