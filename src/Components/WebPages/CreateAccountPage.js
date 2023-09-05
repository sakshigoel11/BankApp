import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sbilogo from './Media/sbilogo.png';
import styles from './Styles/createAccount.module.css';
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

    const [firstName, setFirstName] = useState()

    const [lastName, setLastName] = useState()

    const [email, setEmail] = useState()

    const [phone, setPhone] = useState()

    const [password, setPassword] = useState()

    const [vpassword, setVPassword] = useState()

    const [balance, setBalance] = useState(5000)

    const [posts, setPosts] = useState([])

    const [loading, setLoading] = useState(true)

    const [url, setUrl] = useState()

    const postData = () => {

        axios.post(`http://localhost:8084/addUser`, {
            firstName,
            lastName,
            phone,
            email,
            password,
            balance
        })

    }

    const getData = () => {

        axios.get(`http://localhost:8084/getUserByPhone/${phone}`)


            .then(res => {

                console.log(res.data)
                setPosts(res.data)
                setLoading(false)
            })

    }

    return (
        <div style={mainDiv} >

            {/* SBI logo */}
            <div style={header} >
                <img src={sbilogo} align="left" alt="Logo" width={"9%"} height={"4%"} />
            </div>

            <br />
            
            {/* Navbar */}
            <div style={navBar} >

                <div className={styles.navbar}>

                    <Link to="/home" >Home</Link>
                    <Link to="/howDoI" >How do I</Link>
                    <Link to="/contactUs" >Contact Us</Link>

                </div>

            </div>

            {/* header box */}
            <div className={styles.alert}>

                <h5>NEVER respond to any popup,email, SMS or phone call, no matter how appealing or official looking, seeking your personal information such as username, password(s), mobile number, ATM Card details, etc. Such communications are sent or created by fraudsters to trick you into parting with your credentials.</h5>

            </div>

            {/* MainBox */}
            <div className={styles.divBox}>

                <table align='center'>

                    <tr>

                        <td><label><strong>First Name</strong></label></td>
                        <td><input type="text" name="firstName" placeholder="First Name" onChange={(e) => { setFirstName(e.target.value) }} className={styles.input} /></td>

                    </tr>
                    <tr>

                        <td><label><strong>Last Name</strong></label></td>
                        <td><input type="text" name="lastName" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value) }} className={styles.input} /></td>

                    </tr>
                    <tr>

                        <td><label><strong>Email</strong></label></td>
                        <td><input type="email" name="email" placeholder="email" onChange={(e) => { setEmail(e.target.value) }} className={styles.input} /></td>

                    </tr>
                    <tr>

                        <td><label><strong>Phone</strong></label></td>
                        <td><input type="tel" name="phone" placeholder="Phone"  onChange={(e) => { setPhone(e.target.value) }} className={styles.input}/></td>

                    </tr>
                    <tr>

                        <td><label><strong>Create Password</strong></label></td>
                        <td><input type="password" name="password" placeholder="Create Password" onChange={(e) => { setPassword(e.target.value) }} className={styles.input} /></td>
                        <td className={styles.tdCenter} ><h6>(CARE: Password is case sensitive.)</h6></td>

                    </tr>
                    <tr>

                        <td><label><strong>Verfiy Password</strong></label></td>
                        <td><input type="password" placeholder="Verify Password" onChange={(e) => { setVPassword(e.target.value) }} className={styles.input} /></td>

                    </tr>

                </table>

                <a href={url}><button onClick={() => {

                    if (password == vpassword && firstName != null && lastName != null && email != null && phone != null && password != null && vpassword != null) {
                        postData()
                        setUrl("#popup1")
                    }
                    else if (firstName == null || lastName == null || email == null || phone == null || password == null || vpassword == null) {
                        setUrl("#popup3")
                    }
                    // else if()
                    // {

                    // }
                    //passwords does not match
                    else {

                        setUrl("#popup2")

                    }

                }} className={styles.loginBTN} >Submit</button></a>


            </div>

            <div id="popup1" className={styles.overlay}>
                <div className={styles.popup}>
                    <br /><br /><br />
                    <h2>Online Account Created</h2>
                    <br />

                    <button onClick={getData} className={styles.getAccNoBTN}>Get Account Number</button>

                    {!loading &&
                        <h2>{posts.accountNumber}</h2>
                    }
                    <a className={styles.close} href="#">&times;</a>
                    <br /><br />
                    <Link to="/home" ><button className={styles.loginBTN} >Ok</button></Link>
                </div>
            </div>

            <div id="popup2" className={styles.overlay}>
                <div className={styles.popup}>
                    <br /><br /><br />
                    <h2>Password fields dont match</h2>
                    <br />
                    <a className={styles.close} href="#">&times;</a>
                    <br /><br />
                    <a href='#'><button className={styles.loginBTN} >Ok</button></a>
                </div>
            </div>

            <div id="popup3" className={styles.overlay}>
                <div className={styles.popup}>
                    <br /><br /><br />
                    <h2>All the fields should be filled.</h2>
                    <br />
                    <a className={styles.close} href="#">&times;</a>
                    <br /><br />
                    <a href='#'><button className={styles.loginBTN} >Ok</button></a>
                </div>
            </div>

            <div>
                <ul>
                    <li><h5>Account Number will auto generate once the account request is accepted by the bank or you may visit the nearest bank for any update.</h5></li>
                    <li><h5>Your credentials are highly confidential. Never part with them.SBI will never ask for this information.</h5></li>
                </ul>
            </div>

        </div>
    )
}

export default LoginPage
