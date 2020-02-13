() => {
    const inputRef = useRef(null)
    const onButtonClick = () => {
        inputRef.current.value = '#026816'
        inputRef.current.focus()
    }
    return (
        <>
            <input ref={inputRef} type="color" value="#e66465"
                   style={{height: '50px', width: '100px'}}/>
            <Button onClick={onButtonClick}
                    text="Focus"/>
        </>
    )
}