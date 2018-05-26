import React, { Component } from 'react';
import './css/login.css';

import AuthService from './authservice';

class Register extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    componentWillMount() {
        if (this.Auth.loggedIn()) {
            this.props.history.replace('/');
        }
    }

    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>Register</h1>
                    <form>
                        <input
                            className="form-item"
                            placeholder="Enter a username..."
                            name="username"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="Choose your password..."
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="Confirm your password..."
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="Enter your email..."
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-submit"
                            value="SUBMIT"
                            type="submit"
                            onClick={this.handleFormSubmit}
                        />
                    </form>
                </div>
            </div>
        );
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit(e) {
        alert("Thanks to wait for the administrator to be registered.");
        e.preventDefault();
    }
}

export default Register;
