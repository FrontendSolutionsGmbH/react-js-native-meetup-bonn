import React from 'react'

const randomColour = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);

const ButtonMemoized = React.memo(({onClick, text}) => <button onClick={onClick} style={{height: '50px', width: '100px', background: randomColour()}}>{text}</button>)

export default ButtonMemoized