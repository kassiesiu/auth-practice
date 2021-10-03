import './Login.css';
import { Input, Button } from 'antd';
import { Link  } from "react-router-dom";

function Login() {
    return (
        <div className="Login">
                <Input className="child" placeholder="Username"></Input>
                <Input className="child" placeholder="Password"></Input>
                <Button  className="child" type="primary">Log In</Button>
                <span className="child">Not registered yet? <Link to="/register">Create an account</Link></span>
        </div>
    )
}

export default Login;