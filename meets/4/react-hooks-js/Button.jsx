const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick} style={{height: '50px', width: '100px'}}>{text}</button>
    )
}

export default Button