() => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const id = setInterval(() => {
            setCount(count + 1)
        }, 1000)
        return () => clearInterval(id)
    }, [])
    return <h1>{count}</h1>
}