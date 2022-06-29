import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ col, md, sm, gap, children }) => {
    const gapVar = { gap: gap ? `${gap}px` : '0' };

    const colVar = col ? `grid-col-${col}` : '';
    const mdVar = md ? `grid-col-md-${md}` : '';
    const smVar = sm ? `grid-col-sm-${sm}` : '';

    return (
        <div className={`grid ${colVar} ${mdVar} ${smVar}`} style={gapVar}>
            {children}
        </div>
    );
};

Grid.propTypes = {
    col: PropTypes.number.isRequired,
    md: PropTypes.number,
    sm: PropTypes.number,
    gap: PropTypes.number,
    children: PropTypes.node,
};

export default Grid;
