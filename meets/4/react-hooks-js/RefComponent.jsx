import React, {forwardRef, useImperativeHandle, useRef} from 'react'

const RefComponent = (props, ref) => {
    const inputRef = useRef(null)
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        },
        setValue: (value) => {
            inputRef.current.value = value
        }
    }))
    return (
        <>
            <input ref={inputRef} type="color" value="#e66465" style={{height: '50px', width: '100px'}}/>
        </>
    )
}

export default forwardRef(RefComponent)