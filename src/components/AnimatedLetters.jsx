const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span className='span_animate'>
            {strArray.map((char, i) => (
                <span
                    key={char + i}
                    className={`${letterClass} _${i + idx}`}
                >
                    {char}
                </span>
            ))}
        </span>
    );
};

export default AnimatedLetters;
