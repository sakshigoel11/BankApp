import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import sbilogo from './Media/sbilogo.png';
import styles from './Styles/cardStyle.module.css';



function CreditCard() {

    const location = useLocation();

    const accNumber = location.state;

    const navigate = useNavigate();
    const navigateSignIn = () => {
        navigate("/")
    }
    const [fullName, setFullName] = useState()
    const [salary, setSalary] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()

    const handleSubmit = ((e) => {

        let accountno=accNumber;

        axios.post('http://localhost:8084/SaveCredit', {
            fullName,
            salary,
            mobile,
            email,
            address,
            accountno
        })

        alert("You request is sent for new Credit Card")

        navigate("/dashboard",{state:accNumber})


    })

    const mainDiv = {

        width: "80%",
        marginLeft: "10%",
        marginRight: "10%"

    }

    const header = {

        padding: "1.5%"

    }

    const navBar = {
        marginTop: "1.5%"
    }

    return (

        <div style={mainDiv}>
            <div style={header} ><img src={sbilogo} align="left" alt="Logo" width={"9%"} height={"4%"} /></div>
            <br />
            <div style={navBar} >

                <div className={styles.navbar}>

                    <Link to="/dashboard" state={accNumber} >Back</Link>

                </div>
                <div className={styles.alert}>

                    <h5>To read eligibility criteria please <Link to="/eligibility" state={accNumber} > click  here </Link></h5>
                </div>
                <div className={styles.mainBox}>

                    <div>
                        <div className={styles.formStyle}>
                            
                                <h2>Account Number : {accNumber}</h2>
                                <h2>Apply Credit Card </h2>
                                <br />
                                <input type="text" placeholder="Full Name" value={fullName} className={styles.inputBox} onChange={(e) => setFullName(e.target.value)} />  <br /><br />
                                <input type="text" placeholder="Yearly Package" value={salary} className={styles.inputBox} onChange={(e) => setSalary(e.target.value)} />  <br /><br />
                                <input type="number" placeholder="Mobile No." value={mobile} className={styles.inputBox} onChange={(e) => setMobile(e.target.value)} /> <br /><br />
                                <input type="email" placeholder="Email Id" value={email} className={styles.inputBox} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
                                <input type="text" placeholder="Address" value={address} className={styles.inputBoxAdd} onChange={(e) => setAddress(e.target.value)} />  <br /><br />
                                <button onClick={ () => {

                                    if(fullName != null && salary != null && mobile != null && address != null)
                                    {
                                        handleSubmit()
                                    }
                                    else
                                    {
                                        alert("Null Error")
                                    }

                                } } className={styles.loginBTN} >ApplyNow</button><br></br>
                            
                        </div>
                    </div>
                </div>
                <ul>

                    <li>Your request will be forwarded to the bank for the verification and approval.</li>
                    <br />
                    <li>For any update please visit our contact us page or nearest bank branch.</li>

                </ul>

            </div>
            <div id="popup1" className={styles.overlay}>
                <div className={styles.popup}>
                    <br /><br /><br />
                    <p>Eligibility Criteria</p>
                    <a className={styles.close} href="#">&times;</a>
                    <br />
                </div>
            </div>
        </div>




    )
}

export default CreditCard


