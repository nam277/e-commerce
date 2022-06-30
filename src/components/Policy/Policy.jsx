import React from 'react';
import PropTypes from 'prop-types';

import './policy.scss';

const Policy = ({ name, desc, icon }) => {
    return (
        <div className="policy">
            <div className="policy_icon">
                <i className={icon} />
            </div>
            <div className="policy_info">
                <h3 className="policy_info_name">{name}</h3>
                <span className="policy_info_desc">{desc}</span>
            </div>
        </div>
    );
};

Policy.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Policy;
