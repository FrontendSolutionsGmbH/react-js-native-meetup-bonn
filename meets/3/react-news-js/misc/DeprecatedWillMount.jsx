import React from 'react';
import ReactDOM from 'react-dom';

class DeprecatedWillMount extends React.Component {
    state = {
        willMountCalled: false
    };

    componentWillMount() {
        this.setState({willMountCalled: true})
    }

    render() {
        const {willMountCalled} = this.state;
        const {title} = this.props

        return (
            <>
                <h1>
                    {title}
                </h1>
                <h2>
                    {willMountCalled ? 'willMountCalled' : ''}
                </h2>
            </>
        );
    }
}


export default DeprecatedWillMount;
