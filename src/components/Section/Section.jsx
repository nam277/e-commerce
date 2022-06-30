import React from 'react';

import './Section.scss';

export const Section = ({ children }) => {
    return <div className="section">{children}</div>;
};

export const SectionTitle = ({ children }) => {
    return <div className="section_title">{children}</div>;
};

export const SectionContent = ({ children }) => {
    return <div className="section_content">{children}</div>;
};
