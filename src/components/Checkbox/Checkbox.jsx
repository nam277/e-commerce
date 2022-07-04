import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

const Checkbox = ({ label, onChange, checked }) => {
    const inputRef = useRef();

    const handleChangeInput = () => {
        onChange(inputRef.current.checked);
    };
    return (
        <form className="checkbox">
            <input
                type="checkbox"
                className="checkbox_input"
                ref={inputRef}
                onChange={handleChangeInput}
                checked={checked}
            />
            <span className="checkbox_check">
                <i className="bx bx-check"></i>
            </span>
            <span className="checkbox_label">{label}</span>
        </form>
    );
};

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
};

export default Checkbox;
