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
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={firstName} />
            </div>
            <div className='label'>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } value={lastname} />
            </div>
            <div className='label'>
                <label>Email: </label> 
                <input type="email" onChange={ (e) => setEmail(e.target.value) } value={email} />
            </div>
            <div className='label'>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } value={password}  />
            </div>
            <div className='label'>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPasswordConfirm(e.target.value) } value={passwordConfirm}  />
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
