import React, {useEffect, useState} from 'react'

const customHooktest = () => {
    const count = useCustomHook(1000)

    return count
}

const useCustomHook = interval => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setCount(count => count + 1)
        }, interval)
        return () => clearInterval(id);
    }, []);

    return <p>{count}</p>
}

export default customHooktest