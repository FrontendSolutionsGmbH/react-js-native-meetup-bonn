() => {
    const [number, dispatch] = useReducer(NumberReducer, [0])

    const add = number => {
        dispatch({type: 'add', number})
    }
    const circumference = () => {
        dispatch({type: 'circumference'})
    }
    const area = () => {
        dispatch({type: 'area'})
    }
    const undo = () => {
        dispatch({type: 'undo'})
    }

    return <>
        <p>Number: {number[number.length-1]}</p>
        <Button onClick={() => add(1)} text="+1"/>
        <Button onClick={() => circumference()} text="CIRC"/>
        <Button onClick={() => area()} text="AREA"/>
        <Button onClick={() => undo()} text="UNDO"/>
    </>
}