import React, { useEffect, useState, useRef } from 'react';
import Chevron from '/leftArrow.png';

const Collapse = () => {
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, []);

    const toggleState = () => {
        setToggle(!toggle);
    };
    return (
        <div className='collapse'>
            <button
                className='collapse__visible'
                onClick={toggleState}
            >
                <span>Lorem ipsum dolor sit.</span>
                <img
                    className={toggle && 'active'}
                    src={Chevron}
                />
            </button>

            <div
                className={toggle ? 'collapse__toggle animated' : 'collapse__toggle'}
                style={{ height: toggle ? `${heightEl}` : '0px' }}
                ref={refHeight}
            >
                <p aria-hidden={toggle ? 'true' : 'false'}>Natal 2022</p>
                <p aria-hidden={toggle ? 'true' : 'false'}>Natal 2020</p>
                <p aria-hidden={toggle ? 'true' : 'false'}>Natal 2019</p>
            </div>
        </div>
    );
};

export default Collapse;
