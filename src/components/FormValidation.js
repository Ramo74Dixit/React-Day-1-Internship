import React, { useState } from 'react'

const FormValidation = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    function handleSubmit(e){
        e.preventDefault();
        if(email === ""){
            alert("Email Required")
            return;
        }
        if(password.trim() === ""){
            alert("Password Required")
            return;
        }
    }
  return (
    <div>
        <h1>Form Validation </h1>
        <form>
            <input type='text' placeholder='Enter Your email' value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input type='password' placeholder='Enter Your Password' value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button  onClick={handleSubmit}>Submit</button> 
        </form>
    </div>
  )
}

export default FormValidation