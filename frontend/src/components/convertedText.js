// src/components/ConvertedText.js
import React from 'react';
import './ConvertedText.css';

const ConvertedText = ({ text }) => {
    return (
        <div className="converted-text">
            {text}
        </div>
    );
};

export default ConvertedText;
