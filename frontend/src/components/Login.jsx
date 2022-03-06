import React from 'react';
import './Login.css';
import { Input, Button } from 'antd';
import { Link  } from "react-router-dom";

class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }

    login = async () => {
        const {username, password} = this.state;
        const thing = await fetch('http://localhost:8081/login', {
            method: 'POST',
            body: JSON.stringify({username, password})
        })
        console.log('thing :>> ', await thing.json());
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className="Login">
                    <Input className="child" placeholder="Username" name="username" onChange={this.onChange}/>
                    <Input className="child" placeholder="Password" name="password" onChange={this.onChange}/>
                    <Button  className="child" type="primary" onClick={this.login}>Log In</Button>
                    <span className="child">Not registered yet? <Link to="/register">Create an account</Link></span>
            </div>
        )
    }
}

export default Login;