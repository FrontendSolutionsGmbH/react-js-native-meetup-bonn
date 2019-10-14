() => {
    [state, setState] = useState(false)
    const inputEl1 = useRef(null)
    const inputEl2 = useRef(null)
    const inputEl3 = useRef(null)
    const inputEl4 = useRef(null)
    const inputEl5 = useRef(null)
    const inputEl6 = useRef(null)

    useEffect(() => {
        inputEl1.current.value = '#026816'
        inputEl2.current.value = '#026816'
        inputEl3.current.value = '#026816'
        inputEl4.current.value = '#026816'
        inputEl5.current.value = '#026816'
        inputEl6.current.value = '#026816'
    })

    const onButtonClick = () => {
        setState(state => !state)
    }

    return (
        <>
            <input ref={inputEl1} type="color" value="#e66465" style={{height: '50px', width: '100px'}}/>
            <input ref={inputEl2} type="color" value="#e66465" style={{height: '50px', width: '100px'}}/>
            <input ref={inputEl3} type="color" value="#e66465" style={{height: '50px', width: '100px'}}/>
            <input ref={inputEl4} type="color" value="#e66465" style={{height: '50px', width: '100px'}}/>
            <input ref={inputEl5} type="color" value="#e66465" style={{height: '50px', width: '100px'}}/>
            <input ref={inputEl6} type="color" value="#e66465" style={{height: '50px', width: '100px'}}/>
            <button onClick={onButtonClick} style={{height: '50px', width: '100px'}}>Render</button>
        </>
    )
}