import './Login.css';
import { Input, Button } from 'antd';

function Register() {
    return (
        <div className="Register">
                <Input className="child" placeholder="Username"></Input>
                <Input className="child" placeholder="Password"></Input>
                <Button  className="child" type="primary">Register</Button>
        </div>
    )
}

export default Register;