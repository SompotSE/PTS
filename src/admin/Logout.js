import React, { Component } from "react";

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
        sessionStorage.removeItem('user');
        window.location = "/";
      }

    render() {
        return (
            <div className="content">
            </div>
        );
    }
}