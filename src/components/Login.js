import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super(props);
        //let loggedIn = false;
        const token = localStorage.getItem('token');

        let loggedIn = true;
        if(token == null){
            loggedIn = false;
        }
        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const { username, password } = this.state;

        if(username === 'A' && password === 'B'){
            localStorage.setItem("token","dsafasf23432657fasdfge234234rmntkre");
            this.setState({
                loggedIn: true
            });
        }
    }
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/admin" />
        }
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.onChange} />
                    <br />
                    <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                    <br />
                    <input type="submit" />
                    <br />
                </form>
            </div>
        )
    }
}
