import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ bgColor, icon, animation = false, size, auto = false, children, onClick, isSquared = false }) => {
    const btnColor = bgColor ? `bg-color-${bgColor}` : 'bg-color-main';

    const animated = animation ? `btn_animation` : '';

    const sizeBtn = size ? `btn_${size}` : '';

    const autoBtn = auto ? `btn_auto_` : '';

    const square = isSquared ? `btn_square` : '';

    return (
        <button className={`btn ${btnColor} ${animated} ${sizeBtn} ${square}`} onClick={onClick}>
            {icon ? (
                <div className={`btn_icon ${autoBtn}icon`}>
                    <i className={`${icon} bx-tada`} />
                </div>
            ) : null}
            <span className={`btn_text ${autoBtn}text`}>{children}</span>
        </button>
    );
};

Button.propTypes = {
    bgColor: PropTypes.string,
    icon: PropTypes.string,
    animation: PropTypes.bool,
    size: PropTypes.string,
    auto: PropTypes.bool,
};

export default Button;
