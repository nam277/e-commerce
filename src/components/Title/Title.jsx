import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, children }) => {
    document.title = 'Yolo - ' + title;
    return <div>{children}</div>;
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;
