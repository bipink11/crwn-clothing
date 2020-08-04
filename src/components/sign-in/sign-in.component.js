import React from 'react';
import FromInput from '../form-input/form-input.component';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log("event = ",event)
        this.setState({email:'',password:''})
        console.log("call handleSubmit");
    }

    handleChange = event =>{
        const {value,name} = event.target;
        this.setState({ [name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
               <h2>I already have an account</h2> 
               <span>Sign in with your email and password </span>      

                <form onSubmit={this.handleSubmit}>
                    <FromInput 
                    name="email" 
                    type="email" 
                    value= {this.state.email}
                    handleChange={this.handleChange}
                    label='email'
                    required
                    />
                  
                    <FromInput 
                    name="password" 
                    type="password" 
                    value= {this.state.password}
                    handleChange={this.handleChange}
                    label='password'
                    required
                    />
                                     
                    <CustomButton type="submit">Sign In</CustomButton>
              
                </form>
                
                 </div>
        )
    }
}





























export default SignIn;

