import React, { useState } from 'react';

const Display = ({ task, onDelete }) => {
    const [isDone, setCompleted] = useState(false);

    const handleCheckbox = () => {
        setCompleted(!isDone);
    };

    return (
        <li style={{ textAlign: 'center', marginBottom: '8px',color:'white' }}>
            <input
                type="checkbox"
                checked={isDone}
                onChange={handleCheckbox}
                className="checkbox"
            />
            <span style={{
                textDecoration: isDone ? 'line-through' : 'none',
                margin: '0px 10px'
            }}>
                {task}
            </span>
            <button onClick={onDelete}>Delete</button>
        </li>
    );
};

export default Display;
