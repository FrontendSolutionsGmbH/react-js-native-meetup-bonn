import React, {useReducer} from 'react'

const UseReducertest = () => {
    const [number, dispatch] = useReducer(numberReducer, [0]);

    const add = number => {
        dispatch({ type: 'add', number })
    }

    const circumference = () => {
        dispatch({ type: 'circumference' })
    }

    const area = () => {
        dispatch({ type: 'area' })
    }

    const undo = () => {
        dispatch({ type: 'undo' })
    }

    return <>
        <p>Number: {number[number.length-1]}</p>
        <button onClick={() => add(1)} style={{height: '50px', width: '100px'}}>
            +1
        </button>
        <button onClick={() => circumference()} style={{height: '50px', width: '100px'}}>
            CIRC
        </button>
        <button onClick={() => area()} style={{height: '50px', width: '100px'}}>
            AREA
        </button>
        <button onClick={() => undo()} style={{height: '50px', width: '100px'}}>
            UNDO
        </button>
    </>
}

const numberReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [... state, state[state.length-1] + action.number]
        case 'circumference':
            return [... state, 2 * state[state.length-1] * Math.PI]
        case 'area':
            return [... state, Math.pow(state[state.length-1],2) * Math.PI]
        case 'undo':
            return [...state.slice(0,state.length-1)]
        default:
            return state
    }
}

export default UseReducertest