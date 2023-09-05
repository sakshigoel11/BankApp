
import sbilogo from './Media/sbilogo.png';
import styles from './Styles/changePassword.module.css';


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

function ChangePass() {

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

    const location = useLocation();

    const accNumber = location.state;

    const [accountNumber, setAccountNumber] = useState()
    const [mobile, setMobile] = useState()

    // const postData = () =>{
    //     axios.post(`http://localhost:8084/customer`,{
    //         mobile
    //     })
    //     alert("Sent")
    // }

    const [post, setPost] = useState()

    useEffect(() => {

        axios.get
            (`http://localhost:8084/getUserById/${accountNumber}`)

            .then(res => {
                setPost(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const [url, setUrl] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setConfirm] = useState()

    const change = () => {
        console.log(password)
        if (password == confirmpassword && password != null ) {
            axios.put(`http://localhost:8084/updateCustomer/${accountNumber}`, {
                password
            })
            navigateToHome()
        }
        else if(password == null || confirmpassword == null)
        {
            alert("Null Error")
        }
        else {
            alert("Password Verification Failed")
        }
    }

    const navigate = useNavigate();

    const navigateToHome = () => {

        navigate('/home');
    };

    return (
        <div style={mainDiv} >
            <div style={header} ><img src={sbilogo} align="left" alt="Logo" width={"9%"} height={"4%"} /></div>
            <br />
            <div style={navBar} >

                <div className={styles.navbar}>

                    <Link to="/" >Back</Link>
                </div>
            </div>

            <div>
                <div className={styles.mainBox} >
                    <h2>Trouble Logging In - Forgot Login Password?</h2>
                    <br/><br/>
                    <h2>Account Number</h2>
                    <input type="number" name="accountNumber" placeholder="Enter Account Number" className={styles.buttonStyle} onChange={(e) => setAccountNumber(e.target.value)} />
                    <br/><br/>
                    {/* <h2>Phone Number</h2>
                    <input type="tel" name="mobile" placeholder="Enter Registered Phone Number" className={styles.buttonStyle} onChange={(e) => setMobile(e.target.value)} />
                    <br /><br /> */}
                    <br/>
                    <Link to="/ChangePassword" state={accountNumber} ><button className={styles.buttonStyle} >Next</button></Link>
                    <br/><br/>
                </div>



                <div id="popup1" className={styles.overlay}>

                    <div className={styles.popup}>

                        <br /><br /><br />

                        <center><h2>Change Password</h2></center>
                        <h3>Create New Password</h3>
                        <input type="password" placeholder="Enter New Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.buttonStyle} />
                        <br />
                        <h3>Verify Password</h3>
                        <input type="password" placeholder="Verify Password" value={confirmpassword} onChange={(e) => setConfirm(e.target.value)} className={styles.buttonStyle} />
                        <br /><br />

                        {/* <a className={styles.close} href="#">&times;</a> */}

                        <br />

                        <button className={styles.buttonStyle} onClick={change}>Change Password</button>

                    </div>

                </div>

                <div id="popup2" className={styles.overlay}>

                    <div className={styles.popup}>

                        <br /><br /><br />

                        <h2>Invalid Credentials</h2>

                        <a className={styles.close} href="#">&times;</a>


                    </div>

                </div>

                <div id="popup3" className={styles.overlay}>

                    <div className={styles.popup}>

                        <br /><br /><br />

                        <h2>Pleas do not leave field blank.</h2>

                        <a className={styles.close} href="#">&times;</a>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default ChangePass
