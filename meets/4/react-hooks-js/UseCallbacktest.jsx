import React, {useCallback, useState} from 'react'

const randomColour = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);

const useCallbacktest = () => {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)
    const  setCountAMemoized = useCallback(() => setCountA(countA => (countA + 1)), [])
    const  setCountBMemoized = useCallback(() => setCountB(countB => (countB + countA)), [countA])


    return <>
        <p>Counter A = {countA}</p>
        <ButtonMemoized onClick={setCountAMemoized} text={'+ 1'} />
        <p>Counter B = {countB}</p>
        <ButtonMemoized onClick={setCountBMemoized} text={'+ Counter A'} />
    </>
}

const ButtonMemoized = React.memo(({onClick, text}) => <button onClick={onClick} style={{height: '50px', width: '100px', background: randomColour()}}>{text}</button>)

export default useCallbacktest