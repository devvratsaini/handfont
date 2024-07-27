// src/components/TextInput.js
import React from 'react';

const TextInput = ({ value, onChange }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            rows="10"
            cols="50"
            placeholder="Type your text here..."
        />
    );
};

export default TextInput;
