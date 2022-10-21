import './App.css';
import {getAuth} from 'firebase/auth';
//import app from './firebase/firebase.init';
import app from './firebase/firebase.init'
import RegisterReactBootstrup from './components/RegisterReactBootstrup';
import Register from './components/Register';



const auth = getAuth(app);

const handlerRegister = (event) =>{
  event.preventDefault();
  console.log(event.target.email.value);
  console.log(event.target.password.value);
}

const handleEmailBlur = event =>{
  console.log(event.target.value);
}

const handlePasswordBlur = event =>{
  console.log(event.target.value);
}

function App() {
  return (
    <div className="">
      {/* <form onSubmit={handlerRegister}>
        Email:<input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='your email' /><br/>
        Password: <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='your password'/><br/>
        <button type='submit'>Register</button>
      </form> */}


     <RegisterReactBootstrup></RegisterReactBootstrup>
       {/* <Register></Register> */}
    </div>
  );
}

export default App;
