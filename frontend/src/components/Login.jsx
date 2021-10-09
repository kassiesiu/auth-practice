import React from 'react';
import './Login.css';
import { Input, Button } from 'antd';
import { Link  } from "react-router-dom";

class Login extends React.Component {
    async login() {
        const thing = await fetch('http://localhost:8081/healthcheck')
        console.log('thing :>> ', await thing.json());
    }

    render() {
        return (
            <div className="Login">
                    <Input className="child" placeholder="Username"></Input>
                    <Input className="child" placeholder="Password"></Input>
                    <Button  className="child" type="primary" onClick={this.login}>Log In</Button>
                    <span className="child">Not registered yet? <Link to="/register">Create an account</Link></span>
            </div>
        )
    }
}

export default Login;