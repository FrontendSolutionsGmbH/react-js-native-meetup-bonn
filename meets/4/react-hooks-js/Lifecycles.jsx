class Bla extends Component {
    constructor(props) {
        super(props)
        this.state = {count: 0, name: 'shit', bla: ''}
    }

    componentDidMount()
    {

    }

    componentDidUpdate()
    {
    }

    componentWillUnmount()
    {
    }

    render() {
        let {name} = this.state;
        return  <div>
            <form>
                <input type="text" value={name} onChange={(e) => {this.setState({name: e.target.value})}} />
                <input type="button" value="Submit" onClick={(event) => {
                    event.preventDefault()
                    this.setState({ bla: this.state.name })
                }} />
            </form>
            <p>You clicked {this.state.count} times</p>
            <button onClick={() => this.setState(function (state) { return {  count: state.count + 1 }})}>
                Click me
            </button>
            <p>{this.state.name}</p>
            <p>{this.state.bla}</p>
        </div>
    }
}