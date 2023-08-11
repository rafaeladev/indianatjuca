import React from 'react';

const TextBox = (props) => {
    const styleText = {
        color:
            props.color === 'grayBack' ? '#13323e' : props.color === 'whiteBack' ? '#ba3d47' : '',
    };
    return (
        <div className={`textBox textBox--${props.color}`}>
            <h2 style={styleText}>{props.title}</h2>
            <p style={styleText}>{props.paragraph}</p>
            {props.imgUrl && (
                <img
                    src={props.imgUrl}
                    alt={props.title}
                />
            )}
        </div>
    );
};

export default TextBox;
