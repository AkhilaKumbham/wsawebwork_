import React, { useState } from 'react';
const AddInput = ({ onAdd }) => {
    const [inputVal, setinputVal] = useState('');

    const handleClick = () => {
        if (inputVal.trim()) {
            onAdd(inputVal); 
            setinputVal(''); 
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add a new task"
                value={inputVal}
                onChange={(e) => setinputVal(e.target.value)}
                className='textbox'
            />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddInput;
