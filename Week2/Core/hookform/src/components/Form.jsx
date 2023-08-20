import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");  
    const [passwordConfirm, setPasswordConfirm] = useState("");  

    return(
        <div>
          <form >
            <div className='label'>
                <label htmlFor = "firstName">First Name: </label> 
                <input type="text" name="firstName" onChange={ (e) => setFirstName(e.target.value) }  />
            </div>
            <div className='label'>
                <label htmlFor = "lastname">Last Name: </label> 
                <input type="text" name="lastname" onChange={ (e) => setLastname(e.target.value) }  />
            </div>
            <div className='label'>
                <label htmlFor = "email">Email: </label> 
                <input type="email" name="email" onChange={ (e) => setEmail(e.target.value) }  />
            </div>
            <div className='label'>
                <label htmlFor = "password">Password: </label>
                <input type="password" name="password"  onChange={ (e) => setPassword(e.target.value) }   />
            </div>
            <div className='label'>
                <label htmlFor = "passwordConfirm">Password: </label>
                <input type="password" name="passwordConfirm" onChange={ (e) => setPasswordConfirm(e.target.value) }  />
            </div>
            
        </form> 

        <h2> Your Form Data</h2> 

    <p>First name: {firstName} </p>
    <p>First name: {lastname} </p>
    <p>First name: {email} </p>
    <p>First name: {password} </p>
    <p>First name: {passwordConfirm} </p>
   
        </div>
        
    );
};
    
export default Form;
