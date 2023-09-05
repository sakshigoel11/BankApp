import React from 'react'
import sbilogo from './Media/sbilogo.png';
import styles from './Styles/contactUs.module.css';

import { Link, useNavigate } from 'react-router-dom';

function ContactUs() {

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

                    <Link to="/home" >Home</Link>
                    <Link to="/howDoI" >How do I</Link>
                    <Link to="/contactUs" >Contact Us</Link>

                </div>
                <div className={styles.mainBox}>

                    <h2 align="left" >Contact Us</h2>
                    <h5 align="left" className={styles.info}>At State Bank of India, we are committed to provide best internet banking services to our customers. Please feel free to share your Internet Banking experience with us over phone. SBI now provides your Account Balance and Transaction details over phone round the clock. Information on deposits & loan schemes and services also available.</h5>
                    <ul>

                        <li><strong>1800 1234 & 1800 2100</strong> (Toll free and accessible from all landlines and mobile phones of India)</li>
                        <br/>
                        <li><strong>0091 80 26599990</strong> (Accessible from all landlines and mobile phones of India and abroad)</li>

                    </ul>
                </div>
                <ul>

                    <li>Ministry of Home Affairs Cyber Crime National Helpline : <strong>1930</strong></li>
                    <br/>
                    <li>National Cyber Crime Reporting Portal : <a href='https://www.cybercrime.gov.in/'>www.cybercrime.gov.in</a></li>

                </ul>

            </div>
    </div>
  )
}

export default ContactUs