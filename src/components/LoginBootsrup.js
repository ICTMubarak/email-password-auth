import React from 'react';
import { Link } from 'react-router-dom';

const LoginBootsrup = () => {

    const handleSubmit = event =>{
        event.prevenDefault();
        const form =event.target;
        const email = form.email;
        const password = form.password;

    }

    return (
       
            <div className='w-50 mx-auto'>
                <h3>Please Login</h3>
                
  <form onSubmit={handleSubmit}>

  <div class="col">
    <input type="email" name='email' class="form-control" placeholder="Please your email" aria-label="First name" />
  </div>
  <div class="col">
    <input type="password" email='passwords' class="form-control" placeholder="Enter your password" aria-label="Last name" />
  </div>
  <button type="button" class="btn btn-primary">Login</button>

  </form>
  <p>New to this website Please <Link to ='/register'>Register</Link></p>

            </div>
      
    );
};

export default LoginBootsrup;