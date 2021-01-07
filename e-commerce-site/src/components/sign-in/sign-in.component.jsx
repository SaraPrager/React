import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState( { [name]: value } );
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState( { email: '', password: '' } );
    };

    render() {
       return (
           <div className='sign-in'>
               <h2>I already have an account</h2>
               <span>Sign in with your email and password</span>
               <form onSubmit={this.handleSubmit}>
                   <FormInput name='email' type='email' value={this.state.email} required
                   handleChange={this.handleChange} label='Email'/>
                   <FormInput name='password' type='password'  value={this.state.password} required
                   handleChange={this.handleChange} label='Password'/>
                   <CustomButton type='submit'>SIGN IN</CustomButton>
               </form>
           </div>
       );
    }
};

export default SignIn;