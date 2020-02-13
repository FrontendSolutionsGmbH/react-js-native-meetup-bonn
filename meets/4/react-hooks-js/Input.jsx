import {forwardRef, useImperativeHandle, useRef} from 'react'

const Input = (props, ref) => {
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
        <input ref={inputRef} {...props} style={{height: '50px', width: '100px'}}/>
    )
}

export default forwardRef(Input)