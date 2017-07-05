import React, { Component } from 'react';

import TextInput from '../../../common/TextInput';
import './styles.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'dsa',
            password: ''
        };
    }

    _doLogin = (e) => {
        e.preventDefault();
    };

    _usernameInputChange = (text) => {
        this.setState({
            username: text
        })
    }

    render() {
        return (
            <form
                name="login-form"
                className="login-form"
                onSubmit={this._doLogin}>

                <TextInput
                    value={this.state.username}
                    onChangeText={this._usernameInputChange}
                />

                <input type="submit" value="login" />
            </form>
        );
    }
}

export default LoginForm;
