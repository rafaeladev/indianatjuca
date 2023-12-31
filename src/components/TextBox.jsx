import React from 'react';

const TextBox = (props) => {
    const styleText = {
        color:
            props.color === 'grayBack' ? '#13323e' : props.color === 'whiteBack' ? '#ba3d47' : '',
    };
    return (
        <div className={`textBox textBox--${props.color} textBox--block`}>
            <h2
                style={styleText}
                className={'js-splitText js-text-effect'}
            >
                {props.title}
            </h2>
            {props.subtitle && <h3>{props.subtitle}</h3>}
            {props.paragraph && <p style={styleText}>{props.paragraph}</p>}
            {props.imgUrl && (
                <img
                    src={props.imgUrl}
                    alt={props.title}
                />
            )}
            {props.list === true ? <ul>{props.listItems}</ul> : null}
            <h3>{props.text && props.text}</h3>
            <h2>{props.title2 && props.title2}</h2>
        </div>
    );
};

export default TextBox;
