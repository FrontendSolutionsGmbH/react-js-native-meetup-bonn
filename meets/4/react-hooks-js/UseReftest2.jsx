import React, {useEffect, useLayoutEffect, useRef} from 'react'

const UseReftest = () => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const inputRef5 = useRef(null);
    const inputRef6 = useRef(null);

    useEffect(() => {
        inputRef1.current.value = '#026816'
        inputRef2.current.value = '#026816'
        inputRef3.current.value = '#026816'
        inputRef4.current.value = '#026816'
        inputRef5.current.value = '#026816'
        inputRef6.current.value = '#026816'
    })

    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputRef.current.focus();
    };
    return (
        <>
            <input ref={inputRef1} type="color" value="#e66465"/>
            <input ref={inputRef2} type="color" value="#e66465"/>
            <input ref={inputRef3} type="color" value="#e66465"/>
            <input ref={inputRef4} type="color" value="#e66465"/>
            <input ref={inputRef5} type="color" value="#e66465"/>
            <input ref={inputRef6} type="color" value="#e66465"/>
        </>
    );
}

export default UseReftest