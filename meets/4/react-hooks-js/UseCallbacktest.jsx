import React, {useCallback, useState} from 'react'

const randomColour = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);

const useCallbacktest = () => {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)
    const  setCountAMemoized = useCallback(() => setCountA(countA => (countA + 1)), [])
    const  setCountBMemoized = useCallback(() => setCountB(countB => (countB + 1)), [])


    return <>
        <p>{'SUM IS ' + (countA + countB)}</p>
        <p>Counter A clicked {countA} times</p>
        <ButtonMemoized onClick={setCountAMemoized} text={'Counter A'} />
        <p>Counter B clicked {countB} times</p>
        <ButtonMemoized onClick={useCallback(() => setCountB(countB => (countB + 1)), [])} text={'Counter B'} />
    </>
}

const ButtonMemoized = React.memo(({onClick, text}) => <button onClick={onClick} style={{height: '50px', width: '100px', background: randomColour()}}>{text}</button>)

export default useCallbacktest