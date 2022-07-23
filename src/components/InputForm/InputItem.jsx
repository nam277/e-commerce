import React, { useState } from 'react';
import './loginForm.scss';

const LoginItem = ({ label, errormessage, id, ...inputProps }) => {
    const [focused, setFocused] = useState(true);
    return (
        <div className="inputItem">
            <label>{label}</label>
            <input
                {...inputProps}
                onBlur={() => setFocused(false)}
                onFocus={() => inputProps.name === 'confirmPassword' && setFocused(false)}
                focused={focused.toString()}
            />
            <span>{errormessage}</span>
        </div>
    );
};

export default LoginItem;
