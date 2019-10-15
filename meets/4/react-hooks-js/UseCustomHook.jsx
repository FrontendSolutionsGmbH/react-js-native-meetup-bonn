import {useEffect, useState} from 'react'

const useCustomHook = interval => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setCount(count => count + 1)
        }, interval)
        return () => clearInterval(id)
    }, [interval])

    return count
}

export default useCustomHook