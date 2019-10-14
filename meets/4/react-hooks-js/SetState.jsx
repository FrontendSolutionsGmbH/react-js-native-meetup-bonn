class SetState extends Component {
    constructor(props) {
        super(props)
        this.state = {countA: 0, countB: 1}
    }

    render() {
        return  <>
            <p>Counter A clicked {this.state.countA} times</p>
            <button onClick={() => this.setState(
                {  countA: this.state.countA + 1 }
                )}>
                Counter A
            </button>
            <p>Counter B clicked {this.state.countB} times</p>
            <button onClick={() => this.setState(
                {  countB: this.state.countB + 1 }
                )}>
                Counter B
            </button>
        </>
    }
}