import React, {useEffect, useState} from 'react'

const customHooktest = () => {
    return <UseCustomHookComponent interval={1000}/>
}

const UseCustomHookComponent = props => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setCount(count => count + 1)
        }, props.interval)
        return () => clearInterval(id);
    }, []);

    return <p>{count}</p>
}

export default customHooktest