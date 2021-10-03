import './App.css';
import { Input, Button } from 'antd';

function App() {
  return (
    <div className="App">
      <Input className="child" placeholder="Username"></Input>
      <Input className="child" placeholder="Password"></Input>
      <Button  className="child" type="primary">Log In</Button>
      <span className="child" >Not registered yet? <a href="google.com">Create an account</a></span>

    </div>
  );
}

export default App;
