import React, {useEffect, useImperativeHandle, useLayoutEffect, useRef, forwardRef} from 'react'

const UseImperativeHandletest = () => {
    const componentRef = useRef(null)
    const onButtonClick = () => {
        componentRef.current.value = '#026816'
        componentRef.current.focus()
    }
    return (
        <>
            <WrappedRefComponent ref={componentRef} />
            <button onClick={onButtonClick}>Focus</button>
        </>
    )
}

const RefComponent = (props, ref) => {
    const inputRef = useRef(null)
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        }
    }))
    return (
        <>
            <input ref={inputRef} type="color" value="#e66465" />
        </>
    )
}

const WrappedRefComponent = forwardRef(RefComponent)

export default UseImperativeHandletest