import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ col, md, sm, colGap, rowGap, children }) => {
    const gapVar = {
        gap:
            colGap & rowGap
                ? `${rowGap}px ${colGap}px`
                : `${rowGap}px` || `${colGap}px`,
    };

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
    colGap: PropTypes.number,
    rowGap: PropTypes.number,
    children: PropTypes.node,
};

export default Grid;
