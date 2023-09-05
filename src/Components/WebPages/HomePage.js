import React from 'react';
import sbilogo from './Media/sbilogo.png';
import styles from './Styles/homepage.module.css';
import cntLogo from './Media/contactlogo.png';
import { Link } from 'react-router-dom';

function HomePage() {

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

    const infoScroll = {

        backgroundColor: "black",
        color: "white",
        height: "13px",
        paddingTop: "5px",
        paddingBottom: "10px",
        fontSize: "14px"
    }

    const a = {
        textDecoration: "none",
        color: "black",
        margin: "5%"
    }

    const a1 = {
        textDecoration: "none",
        color: "black",
        margin: "2%"
    }

    return (

        <div style={mainDiv} >

            {/* SBI LOGO ON THE TOP */}
            <div style={header} >
                <img src={sbilogo} align="left" alt="Logo" width={"9%"} height={"4%"} />
            </div>

            <br />

            {/* Navbar */}
            <div style={navBar} >

                <div className={styles.navbar}>

                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Services</button>
                        <div className={styles.dropdowncontent}>
                            <Link to="/home" >Personal Banking</Link>
                        </div>
                    </div>

                    <Link to="/faqs" >FAQs</Link>

                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Apply for SBI Account</button>
                        <div className={styles.dropdowncontent}>
                            <Link to="/createAccount" >Savings Bank Account</Link>
                        </div>
                    </div>

                    <a href="#popup3">Apply Credit/Debit card E-Mandate</a>

                    <a href="#popup3">Apply for Loans</a>

                </div>

            </div>

            {/* Heading Info Div */}
            <div className={styles.alertBox}>

                <h5 className={styles.headAlert} > If slowness is observed during Login Page loading, please refresh the page for better experience.</h5>
                <h5 className={styles.headAlert}> SBI never asks for confidential information such as PIN and OTP from the customers. Any such call can be made only by a fraudster. Please do not share personal info. </h5>

            </div>

            {/* Main Login Box */}
            <div className={styles.login}>
                
                <img src={cntLogo} alt="Logo" width={"5%"} height={"3%"} />
                
                <br />
                
                <h3 className={styles.bankName} >Personal Banking</h3>

                <div className={styles.box}>
                    <a href="#popup1"><button className={styles.loginBTN1} >Login</button></a>
                </div>

                <br /><br />

                <div className={styles.inlineLink} ><a href='#popup2' style={a1} >New User Registration</a> / <Link to="/howDoI" style={a1} >How do I ?</Link> / <Link to="/contactUs" style={a1} >Contact Us</Link> </div>
                
                <br />

                <p>SBI's internet banking portal provides personal banking services that gives you complete control over all your banking demands online.</p>

            </div>

            {/* Scrolling Info Marquee Tag*/}
            <div style={infoScroll}>

                <marquee width="auto" direction="left" height="50px">
                    Mandatory Profile password change after 365 days introduced for added security.   |   SBI never asks for your Card/PIN/OTP/CVV details on phone, message or email. Please do not click on links received on your email or mobile asking your Bank/Card details. |  Customers who have installed “SBI Secure OTP App” on their mobile and completed registration process will now receive Login OTP for OnlineSBI.com on the app instead of SMS OTP   |   Call us toll free on 1800 1234 and 1800 2100 and get a wide range of services through SBI Contact Centre
                </marquee>

            </div>

            {/* Footer Links */}
            <div >

                <br />
                <a style={a} href="https://rbiretaildirect.org.in" target="_blank" rel="noopener noreferrer">&diams; RBI Retail Direct portal</a>
                <a style={a} href="https://retail.onlinesbi.sbi/retail/blockatmcardintermediate.htm?bankCode=0" target="_blank" rel="noopener noreferrer">&diams; Block ATM Card</a>
                <a style={a} href="https://crcf.sbi.co.in" target="_blank" rel="noopener noreferrer">&diams; Customer Request and Complaint</a>
                <a style={a} href="https://retail.onlinesbi.sbi/personal/reg_forms.html" target="_blank" rel="noopener noreferrer">&diams; Banking Forms</a>
                <br /><br />
                <a style={a} href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar" target="_blank" rel="noopener noreferrer">&diams; Linking of PAN with Aadhaar</a>
                <a style={a} href="https://www.sbilife.co.in" target="_blank" rel="noopener noreferrer">&diams; SBI Life Insurance</a>
                <a style={a} href="https://fastag.onlinesbi.com" target="_blank" rel="noopener noreferrer">&diams; SBI FasTag</a>
                <a style={a} href="https://bank.sbi/web/salary-account" target="_blank" rel="noopener noreferrer">&diams; SBI Salary Account</a>
                <br /><br />
                <a style={a} href="https://bank.sbi/web/nri/home" target="_blank" rel="noopener noreferrer">&diams; NRI Services</a>
                <a style={a} href="https://www.onlinesbi.sbi/documents/Yono_Business_Fair_Practice_Lending_Code.pdf" target="_blank" rel="noopener noreferrer">&diams; Fair Lending Practice Code</a>
                <a style={a} href="https://www.sbisecurities.in/" target="_blank" rel="noopener noreferrer">&diams; SBICAP Securities</a>
                <a style={a} href="http://www.sbicaptrustee.com" target="_blank" rel="noopener noreferrer">&diams; SBICAP Trustee Company Ltd</a>
                <br /><br />
                <a style={a} href="https://remit.onlinesbi.com/" target="_blank" rel="noopener noreferrer">&diams; SBI Express Remit</a>
                <a style={a} href="https://www.sbimf.com/en-us/quick-invest?arn_code=ARN12195" target="_blank" rel="noopener noreferrer">&diams; SBI Mutual Fund</a>
                <a style={a} href="https://www.sbigeneral.in/portal/downloads" target="_blank" rel="noopener noreferrer">&diams; SBI General Insurance Document Download</a>
                <a style={a} href="http://www.sbicard.com/" target="_blank" rel="noopener noreferrer">&diams; SBI Card</a>

            </div>

            <div id="popup1" className={styles.overlay}>
                <div className={styles.popup}>
                    <br /><br /><br />
                    <p>By clicking on <strong> "Continue to Login" </strong> button, you agree to the Terms of Service (Terms & Conditions) of usage of Internet Banking of SBI.</p>
                    <a className={styles.close} href="#">&times;</a>
                    <br />
                    <Link to="/login" ><button className={styles.loginBTN} >Continue to Login</button></Link>
                </div>
            </div>

            <div id="popup2" className={styles.overlay}>
                <div className={styles.popup}>
                    <br /><br /><br />
                    <p><strong>New User Registration</strong><br /><br />If you have already obtained Pre-Printed Kit from the branch for activating INB facility, please don't proceed with this link. You can input userid and password given in PPK on normal login screen.

                        <br /><br />    Note: This link is applicable for Retail customers only.</p>
                    <a className={styles.close} href="#">&times;</a>
                    <br />
                    <Link to="/createAccount" ><button className={styles.loginBTN} >Ok</button></Link>
                </div>
            </div>

            <div id="popup3" className={styles.overlay}>
                <div className={styles.popup}>
                    <br /><br /><br />
                    <h2>To apply you have to login first.</h2>
                    <a className={styles.close} href="/home">&times;</a>
                    <br />
                    <a href='#popup1'><button className={styles.loginBTN} >Login</button></a>
                </div>
            </div>

        </div>
    )
}

export default HomePage
