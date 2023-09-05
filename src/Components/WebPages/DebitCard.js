import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import sbilogo from './Media/sbilogo.png';
import styles from './Styles/cardStyle.module.css';

function DebitCard() {

    const location = useLocation();

    const accNumber = location.state;


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




    const navigate = useNavigate();
    const navigateSignIn = () => {
        navigate("/")
    }
    const [fullName, setFullName] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()

    const handleSubmit = ((e) => {

        let accountno=accNumber

        axios.post('http://localhost:8084/SaveDebit', {
            fullName,
            mobile,
            email,
            address,
            accountno
        })
        alert("You request is sent for new Debit Card")

        navigate("/dashboard", { state: accNumber })

    })



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
                            <h2>Apply Debit Card</h2>
                            <input type="text" placeholder="Full Name" className={styles.inputBox} value={fullName} onChange={(e) => setFullName(e.target.value)} />  <br /><br />
                            <input type="number" placeholder="Mobile No." className={styles.inputBox} value={mobile} onChange={(e) => setMobile(e.target.value)} /> <br /><br />
                            <input type="email" placeholder="Email Id" className={styles.inputBox} value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
                            <input type="text" placeholder="Address" className={styles.inputBoxAdd} value={address} onChange={(e) => setAddress(e.target.value)} />  <br /><br />
                            <button className={styles.loginBTN} onClick={

                                () => {

                                    if (fullName != null && email != null && mobile != null && address != null) {
                                        handleSubmit()
                                    }
                                    else {
                                        alert("Null Error")
                                    }


                                }

                            }>ApplyNow</button><br></br>

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

export default DebitCard


