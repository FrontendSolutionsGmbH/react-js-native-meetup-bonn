const NumberReducer = (state, action) => {
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

export default NumberReducer