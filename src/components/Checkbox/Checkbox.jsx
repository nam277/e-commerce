import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

const Checkbox = ({ label }) => {
    return (
        <form className="checkbox">
            <input type="checkbox" className="checkbox_input" />
            <span className="checkbox_check">
                <i className="bx bx-check"></i>
            </span>
            <span className="checkbox_label">{label}</span>
        </form>
    );
};

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Checkbox;
