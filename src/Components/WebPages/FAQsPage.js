import React from 'react'
import sbilogo from './Media/sbilogo.png';
import styles from './Styles/faqs.module.css';

import { Link, useNavigate } from 'react-router-dom';

function FAQsPage() {

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
        <div style={mainDiv} >
            <div style={header} ><img src={sbilogo} align="left" alt="Logo" width={"9%"} height={"4%"} /></div>
            <br />
            <div style={navBar} >

                <div className={styles.navbar}>

                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Services
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className={styles.dropdowncontent}>
                            <Link to="/home" >Personal Banking</Link>
                        </div>
                    </div>
                   
                    <Link to="/faqs" >FAQs</Link>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Apply for SBI Account
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div className={styles.dropdowncontent}>
                            <Link to="/createAccount" >Savings Bank Account</Link>
                        </div>
                    </div>
                    <a href="#popup3">Apply Credit/Debit card E-Mandate</a>
                    <a href="#popup3">Apply for Loans</a>

                </div>

            </div>

            <div id="popup3" className={styles.overlay}>
                <div className={styles.popup}>
                    <br /><br /><br />
                    <h2>To apply you have to login first.</h2>
                    <a className={styles.close} href="#">&times;</a>
                    <br />
                    <Link to="/"><button className={styles.loginBTN} >Login</button></Link>
                </div>
            </div>

            <div className={styles.alert}>

                <h5>NEVER respond to any popup,email, SMS or phone call, no matter how appealing or official looking, seeking your personal information such as username, password(s), mobile number, ATM Card details, etc. Such communications are sent or created by fraudsters to trick you into parting with your credentials.</h5>

            </div>
            <div className={styles.mainDiv}>
                <div className={styles.headingLink}>
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className={styles.subDiv}>
                    <details>
                        <summary><b>1. What is OnlineSBI?</b></summary>
                        <ul>
                            <li>OnlineSBI is the Internet banking service provided by State Bank of India, India's largest and premier commercial bank
                            </li>
                        </ul>
                    </details>
                </div>
                <div className={styles.subDiv}>
                    <details>
                        <summary><b>2. What is special about Internet banking?</b></summary>
                        <ul>
                            <li>Internet banking is the most convenient way to bank- anytime, any place, at your convenience. </li>
                        </ul>
                    </details>
                </div>
                <div className={styles.subDiv}>
                    <details>
                        <summary><b>3. I do not have a PC?</b></summary>
                        <ul>
                            <li>You can access OnlineSBI from any computer that has connectivity to the Internet. But make sure your computer is Malware free.</li>
                        </ul>
                    </details>
                </div>
                <div className={styles.subDiv}>
                    <details>
                        <summary><b>4. How do I access OnlineSBI?</b></summary>
                        <ul>
                            <li>You need to have an account at a branch. You also need to register for the Internet banking
                                service with the branch. Branch will provide you a Pre Printed Kit (PPK) containing username
                                and password for first login. If you are not in a position to collect PPK in person, the bank
                                will arrange to send a username through SMS and a mailer containing password to your registered address.</li>
                        </ul>
                    </details>
                </div>
                <div className={styles.subDiv}>
                    <details>
                        <summary><b>5. I do not have an account with SBI? </b></summary>
                        <ul>
                            <li>You are welcome to open it now. It is very easy to open an account with SBI. You can apply online for opening of a savings bank account. A link 'Online SB Account Application' is available on the home page of
                                <a href="http://www.onlinesbi.sbi"> www.onlinesbi.sbi </a>
                                or just walk in to any of our branches nearby. Our staff would be pleased to assist you.</li>
                        </ul>
                    </details>
                </div>
                <div className={styles.subDiv}>
                    <details>
                        <summary><b>6. Why are the user name and password so cryptic? </b></summary>
                        <ul>
                            <li>The user name and password are system generated. OnlineSBI has no control over
                                this process. During your first visit to OnlineSBI, you must mandatorily change your user name and password.</li>
                        </ul>
                    </details>
                </div>
                <div className={styles.subDiv}>
                    <details>
                        <summary><b>7. Can I change the user name and password that were sent to me by courier?</b></summary>
                        <ul>
                            <li>Yes. It is mandatory for you to change the system generated user name and password when you first logon to OnlineSBI. Later at any point of time, you can change your password but not the user name.</li>
                        </ul>
                    </details>
                </div>
            </div>


        </div>
    )
}

export default FAQsPage
