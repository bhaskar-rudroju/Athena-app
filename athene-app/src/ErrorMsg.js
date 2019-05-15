import React, { Component } from 'react';

class ErrorMsg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMsgs: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('https://athena-7.herokuapp.com/ancients.json?error=true')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    errorMsgs: json,
                })
            });

        return this.errorMsgs;
    }

    render() {
        var { isLoaded, errorMsgs } = this.state;
        if (!isLoaded) {
            return <div> Loding error data...</div>
        } else {
            return (
                <div className="alert alert-danger" align="center">
                    <strong>   {errorMsgs.error}; </strong>
                </div >

            )
        }
    }
}


export default ErrorMsg;