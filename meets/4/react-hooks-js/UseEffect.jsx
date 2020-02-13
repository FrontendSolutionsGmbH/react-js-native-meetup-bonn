() => {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(1)

    useEffect(() => {document.getElementById("bla").innerHTML =
        'SUM IS ' + (countA + countB)})

    return  <>
        <p id="bla"></p>
        <p>Counter A clicked {countA} times</p>
        <Button onClick={() => setCountA(countA + 1)}
                text="Counter A"/>
        <p>Counter B clicked {countB} times</p>
        <Button onClick={() => setCountB(countB + 1)}
                text="Counter B"/>
    </>
}