import React, { Component } from "react";

class ErrorBoundry extends Component {

    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops. That is not good</h1>
        }
        return this.props.children
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

}

export default ErrorBoundry;
