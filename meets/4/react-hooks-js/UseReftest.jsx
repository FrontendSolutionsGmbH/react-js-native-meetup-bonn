import React, {useRef} from 'react'

const UseReftest = () => {
    const inputRef = useRef(null);
    const onButtonClick = () => {
        inputRef.current.value = '#026816'
        inputRef.current.focus();
    };
    return (
        <>
            <input ref={inputRef} type="color" value="#e66465" />
            <button onClick={onButtonClick}>Focus</button>
        </>
    );
}

export default UseReftest