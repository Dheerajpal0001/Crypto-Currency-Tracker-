import React, { useState } from 'react';

const RadioButtonGroup = () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <h3>Select an Option</h3>
            <div>
                <input
                    type="radio"
                    id="option1"
                    name="options"
                    value="option1"
                    checked={selectedValue === 'option1'}
                    onChange={handleRadioChange}
                />
                <label htmlFor="option1">Option 1</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="option2"
                    name="options"
                    value="option2"
                    checked={selectedValue === 'option2'}
                    onChange={handleRadioChange}
                />
                <label htmlFor="option2">Option 2</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="option3"
                    name="options"
                    value="option3"
                    checked={selectedValue === 'option3'}
                    onChange={handleRadioChange}
                />
                <label htmlFor="option3">Option 3</label>
            </div>
            <p>Selected Value: {selectedValue}</p>
        </div>
    );
};

export default RadioButtonGroup;
