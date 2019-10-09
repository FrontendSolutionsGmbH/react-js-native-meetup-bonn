import {Component} from 'react'

class Bla extends Component {
    constructor(props) {
        super(props)
        this.state = {count: 0, bla: 'shit'}
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
        return  <div>
            <p>You clicked {this.state.count} times</p>
            <button onClick={() => this.setState(function (state) { return {  count: state.count + 1 }})}>
                Click me
            </button>
            <p>{this.state.bla}</p>
        </div>
    }
}

export default Bla