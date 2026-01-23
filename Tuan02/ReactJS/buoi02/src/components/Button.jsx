import React from 'react'
import './button.css'

function Button(props) {
    return (
        <button className={props.type} onClick={() => {
            console.log('Button type: '+props.type);
            console.log('Button title: '+props.title);
        }}>
            {props.title || 'Default Button'}
        </button>
    );
}

export default Button