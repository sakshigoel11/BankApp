import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sbilogo from './Media/sbilogo.png';
import styles from './Styles/LoginPage.module.css';
import { Link, useNavigate } from 'react-router-dom';


function LoginPage() {

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

    const [accNumber, inputAccountNumber] = useState()

    const [password, inputPassword] = useState()

    const [url, setUrl] = useState()

    const navigate = useNavigate();

    const navigateToDashboard = () => {

        navigate('/Dashboard', { state: accNumber });
    };

    const navigateToAdminPage = () => {

        navigate('/adminPage');
    };

    const loginHandler = () => {

        axios.get(`http://localhost:8084/getUser/${accNumber}`)

            .then(e => {
                console.log(e.data)
                validate(e.data);
            });

    }

    const validate = (posts) => {
        console.log(posts)
        console.log(accNumber)
        console.log(password)

        if (accNumber == 0 && password == "admin") {
            navigateToAdminPage()
        }
        else if(posts.accountNumber == null)
        {
            alert("Account Not Found !")
        }
        else if(accNumber == null || password == null)
        {
            alert("All fields are required")
        }
        else {
            if (posts.password == password) {
                navigateToDashboard()
            }
            else{
                alert("Invalid Password")
            }
        }

    }

    return (

        <div style={mainDiv} >

            {/* SBI Logo */}
            <div style={header} >
                <img src={sbilogo} align="left" alt="Logo" width={"9%"} height={"4%"} />
            </div>

            <br />
            
            {/* Nav Bar */}
            <div style={navBar} >

                <div className={styles.navbar}>

                    <Link to="/home" >Home</Link>
                    <Link to="/howDoI" >How do I</Link>
                    <Link to="/contactUs" >Contact Us</Link>

                </div>

            </div>

            {/* Heading Box */}
            <div className={styles.alert}>

                <h5>NEVER respond to any popup,email, SMS or phone call, no matter how appealing or official looking, seeking your personal information such as username, password(s), mobile number, ATM Card details, etc. Such communications are sent or created by fraudsters to trick you into parting with your credentials.</h5>

            </div>

            {/* Main Login Box */}
            <div className={styles.login} >

                <h5>(CARE: Password is case sensitive.)</h5>
                <h3>Account Number*</h3>
                <input type="number" placeholder="Account Number" onChange={(e) => { inputAccountNumber(e.target.value) }} className={styles.input} />
                <br />
                <h3>Password*</h3>
                <input type="password" placeholder="Password" onChange={(e) => { inputPassword(e.target.value) }} className={styles.input} />
                <br />
                <a href={url}><button onClick={loginHandler} className={styles.loginBTN}>Log In</button></a>
                <br /><br />
                <Link to="/createAccount" >New User ? Register here</Link>
                <br /><br />
                <Link to="/changePass" >Forgot Login Password</Link>
                <br /><br />

            </div>

            {/* Footer */}
            <div>
                <ul>
                    <li><h5>Mandatory fields are marked with an asterisk (*)</h5></li>
                    <li><h5>Do not provide your account number and password anywhere other than in this page</h5></li>
                    <li><h5>Your credentials are highly confidential. Never part with them.SBI will never ask for this information.</h5></li>
                </ul>
            </div>


        </div>
    )
}

export default LoginPage
