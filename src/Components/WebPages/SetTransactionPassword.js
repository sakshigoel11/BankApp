import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router';
import './Styles/transactionPasswd.css'

function SetTransactionPassword() {
    const [transactionPassword,setPasswd]=useState("");
    const [confirmPasswd,setConfirmPasswd]=useState("");
    const [user,setUser]=useState();
    const location=useLocation();
    const id=location.state;
    const navigate=useNavigate();

   


    const handlePassword=(e)=>
    {
        e.preventDefault();
        let isValid = true
        
       //If bth password are entered by user and they doeesnt match
        if (transactionPassword !== null && confirmPasswd !== null){
          if (transactionPassword !== confirmPasswd) {
            isValid = false
            alert('Passwords does not match')
          }
        }
        if (transactionPassword == '' && confirmPasswd == ''){
            alert("Null Error")
            isValid = false
        }
      

        if(isValid)
        {
            axios.put(`http://localhost:8084/updateUser/${id}`,
            {
                transactionPassword
            })

            navigate('/pay' ,{state:id})
        }
    }

    return (
        <div id="PasswdDiv">
            <p style={{color:"red"}}>*Please set your transaction password first to proceed with Send Money*</p>
            <form onSubmit={handlePassword}>
        
            <input type="password" id="passwd" name="passwd" placeholder="Enter Transaction Password"
                    value={transactionPassword} onChange={(e)=>setPasswd(e.target.value)}/>   
                <input type="password" id="confirmPasswd" name="confirmPasswd" placeholder="Confirm Transaction Password"
                value={confirmPasswd} onChange={(e)=>setConfirmPasswd(e.target.value)}/>
                <input type="submit" value="Submit" id="SubmitButton"/>
            </form>
        </div>
    )
}

export default SetTransactionPassword
