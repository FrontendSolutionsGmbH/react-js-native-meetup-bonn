class Lifecycles extends Component {
    constructor(props) {
        super(props)
        this.state = {countA: 0, countB: 1}
    }

    componentDidMount() {
        document.getElementById("bla").innerHTML =
            'SUM IS ' + (this.state.countA + this.state.countB)
    }

    componentDidUpdate() {
        document.getElementById("bla").innerHTML =
            'SUM IS ' + (this.state.countA + this.state.countB)
    }

    render() {
        return  <>
            <p id="bla"></p>
            <p>Counter A clicked {this.state.countA} times</p>
        <Button onClick={() => this.setState(
            {countA: this.state.countA + 1}
            )} text="Counter A"/>
        <p>Counter B clicked {this.state.countB} times</p>
        <Button onClick={() => this.setState(
            {countB: this.state.countB + 1}
            )} text="Counter B"/>
        </>
    }
}