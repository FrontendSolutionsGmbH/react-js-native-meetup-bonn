() => {
    [state, setState] = useState(false)
    const inputEl1 = useRef(null)
    const inputEl2 = useRef(null)
    const inputEl3 = useRef(null)
    const inputEl4 = useRef(null)
    const inputEl5 = useRef(null)
    const inputEl6 = useRef(null)

    useEffect(() => {
        inputEl1.current.setValue('#026816')
        inputEl2.current.setValue('#026816')
        inputEl3.current.setValue('#026816')
        inputEl4.current.setValue('#026816')
        inputEl5.current.setValue('#026816')
        inputEl6.current.setValue('#026816')
    })

    const onButtonClick = () => {
        setState(state => !state)
    }

    return (
        <>
            <Input ref={inputEl1} type="color" value="#e66465"/>
            <Input ref={inputEl2} type="color" value="#e66465"/>
            <Input ref={inputEl3} type="color" value="#e66465"/>
            <Input ref={inputEl4} type="color" value="#e66465"/>
            <Input ref={inputEl5} type="color" value="#e66465"/>
            <Input ref={inputEl6} type="color" value="#e66465"/>
            <Button onClick={onButtonClick} text="Render"/>
        </>
    )
}