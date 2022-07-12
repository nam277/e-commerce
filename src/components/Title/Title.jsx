import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, children }) => {
    document.title = 'Yolo - ' + title;
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return <div>{children}</div>;
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;
