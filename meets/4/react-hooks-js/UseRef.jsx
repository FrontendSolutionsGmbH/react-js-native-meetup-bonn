() => {
    const inputRef = useRef(null)
    const onButtonClick = () => {
        inputRef.current.value = '#026816'
        inputRef.current.focus()
    }
    return (
        <>
            <input ref={inputRef} type="color" value="#e66465" style={{height: '50px', width: '100px'}}/>
            <button onClick={onButtonClick} style={{height: '50px', width: '100px'}}>Focus</button>
        </>
    )
}