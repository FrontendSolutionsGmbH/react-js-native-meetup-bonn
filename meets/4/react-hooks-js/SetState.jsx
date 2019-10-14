class SetState extends Component {
    constructor(props) {
        super(props)
        this.state = {countA: 0, countB: 1}
    }

    render() {
        return  <>
            <p>Counter A clicked {this.state.countA} times</p>
            <Button onClick={() => this.setState(
                {  countA: this.state.countA + 1 }
                )} text="Counter A"/>
            <p>Counter B clicked {this.state.countB} times</p>
            <Button onClick={() => this.setState(
                {  countB: this.state.countB + 1 }
                )} text="Counter A"/>
        </>
    }
}