import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);


const RegisterReactBootstrup = () => {

  const [passwordError, setPasswordError] = useState();
  const [success, setSuccess] = useState(false);

    const handleRegister = event =>{
            event.preventDefault();

            setSuccess(false);

            //console.log(event.target.email.value)
          const form = event.target;

            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
            createUserWithEmailAndPassword(auth, email, password)
            .then(result =>{
              const user = result.user;
              console.log(user);
              setSuccess(true);
              form.reset(); 
            })
            .catch(error =>{
              console.error('error', error); 
              setPasswordError(error.message)
            })

            if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
                setPasswordError('Please provide at list two uppercase'); 
                return;
            }
            if(password.length < 6){
                setPasswordError('please should be at list 6 character');
                return;
            }
            if(!/(?=.*[!@#&&*])/.test(password)){
                setPasswordError('Please add at list one special character'); 
                return;
            }
            setPasswordError('');
    }


    return (
        <div className='w-50 mx-auto'>
         <h3 className='text-primary'>Please register!!!</h3>  
<Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      <p className='text-danger'>{passwordError}</p>
      {success && <p>User created successfully</p>}
      <Button variant="primary" type="submit">
        Register
      </Button>
      <p>Have your an account? Please login <Link to = '/login'>Login</Link></p>
    </Form>
        </div>
    );
};

export default RegisterReactBootstrup;