() => {
    const componentRef = useRef(null)
    const onButtonClick = () => {
        componentRef.current.setValue('#026816')
        componentRef.current.focus()
    }
    return (
        <>
            <WrappedRefComponent ref={componentRef} />
            <button onClick={onButtonClick} style={{height: '50px', width: '100px'}}>Focus</button>
        </>
    )
}