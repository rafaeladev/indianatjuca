import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Chevron from '/leftArrow.png';
import { FaAngleLeft } from 'react-icons/fa';

const Collapse = (props) => {
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, []);

    const toggleState = () => {
        setToggle(!toggle);
    };

    const collapseElements = props.content.map((element, index) => {
        return (
            <li
                key={index}
                aria-hidden={toggle ? 'true' : 'false'}
            >
                <Link
                    key={index}
                    to={`${props.link}/${element}`}
                    onClick={toggleState}
                >
                    {element}
                </Link>
            </li>
        );
    });

    return (
        <div
            className='collapse'
            onMouseEnter={toggleState}
            // onMouseLeave={toggleState}
        >
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'active collapse__visible' : 'collapse__visible'
                }
                // onMouseLeave={toggleState}
                to={`/natal`}
            >
                <span>{props.title}</span>
                <FaAngleLeft className={toggle && 'active'} />
            </NavLink>

            <ul
                className={toggle ? 'collapse__toggle animated' : 'collapse__toggle'}
                // style={{ height: toggle ? `${heightEl}` : '0px' }}
                ref={refHeight}
                // onMouseLeave={toggleState}
            >
                {collapseElements}
            </ul>
        </div>
    );
};

export default Collapse;
