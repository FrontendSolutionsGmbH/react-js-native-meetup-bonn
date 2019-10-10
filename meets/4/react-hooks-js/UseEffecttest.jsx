import React, {useEffect, useState} from 'react'

const useEffecttest = () => {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(1)

    useEffect(() => {document.getElementById("bla").innerHTML = 'SUM IS ' + (countA + countB)})

    //useEffect(() => {})
    //useEffect(() => {document.getElementById("userName").value = "Mayank";});

    return  <>
        <p id="bla"></p>
        <p>Counter A clicked {countA} times</p>
        <button onClick={() => setCountA(countA + 1)}>
            Counter A
        </button>
        <p>Counter B clicked {countB} times</p>
        <button onClick={() => setCountB(countB + 1)}>
            Counter B
        </button>
    </>
}

export default useEffecttest