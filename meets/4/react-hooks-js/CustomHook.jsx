() => {
    const [interval, settInterval] = useState(1000)

    const count = useCustomHook(interval)

    return <>
        <p>Interval is: {interval} millisec</p>
        <p>Count returned from custom hook: {count}</p>
        <Button onClick={() => settInterval(interval => interval*10)} text="*10"/>
        <Button onClick={() => settInterval(interval => interval/10)} text=":10"/>
    </>
}