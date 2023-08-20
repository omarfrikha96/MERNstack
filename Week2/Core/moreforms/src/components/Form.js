import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");  
    const [passwordConfirm, setPasswordConfirm] = useState("");  

    return(
         <form >
            <div className='label'>
                <label htmlFor = "firstName">First Name: </label> 
                <input type="text" name="firstName" onChange={ (e) => setFirstName(e.target.value) }  />
               
            </div>
            {
                    firstName.length < 2  && firstName.length > 0 ?
                    <p>First Name must be at least 2 characters </p> :
                    ""
                }
            <div className='label'>
                <label htmlFor = "lastName">Last Name: </label> 
                <input type="text" name="lastName" onChange={ (e) => setLastname(e.target.value) }  />
               
            </div>
            {
                    lastName.length < 2  && lastName.length > 0 ?
                    <p>Last Name must be at least 2 characters </p> :
                    ""
                }
            <div className='label'>
                <label htmlFor = "email">Email: </label> 
                <input type="email" name="email" onChange={ (e) => setEmail(e.target.value) }  />
               
            </div>
            {
                    email.length < 5  && email.length > 0 ?
                    <p>email must be at least 5 characters </p> :
                    ""
                }
            <div className='label'>
                <label htmlFor = "password">Password: </label>
                <input type="password" name="password"  onChange={ (e) => setPassword(e.target.value) }   />
              
            </div>
            {
                    password.length < 8  && password.length > 0 ?
                    <p>Password must be at least 8 characters </p> :
                    ""
                }
            <div className='label'>
                <label htmlFor = "passwordConfirm">Password: </label>
                <input type="password" name="passwordConfirm" onChange={ (e) => setPasswordConfirm(e.target.value) }  />
               
            </div>
            {
                   passwordConfirm  !== password  && passwordConfirm.length > 0 ?
                    <p>password dosen't match </p> :
                    ""
                }
            
        </form>

          
        
    );
};
    
export default Form;
