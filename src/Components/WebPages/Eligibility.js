import React from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate, useLocation } from 'react-router-dom'
import axios from 'axios';
import styles from './Styles/contactUs.module.css'
import sbilogo from './Media/sbilogo.png';

function Eligibility() {

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

  return (

    <div style={mainDiv}>
      <div style={header} ><img src={sbilogo} align="left" alt="Logo" width={"9%"} height={"4%"} /></div>
      <br />
      <div style={navBar} >

        <div className={styles.navbar}>

          <Link to="/dashboard" state={accNumber} >Back</Link>

        </div>
        <div className={styles.mainBox}>

          <div>
            <h2>Eligibility criteria</h2>
            <br />
            <div className={styles.div1}>
              <h3>For Loan:</h3>
              <p>You may be eligible for loan if you meet the following eligibility conditions:<br></br>
                1. Age: Minimum 21 years and maximum 65 years.<br/>
                2. Loan Amount: Minimum 1 Lakh and maximum up to 50 Lakhs.<br/>
                3. Net Monthly Income: A regular salary and flow of income is a must to get a Loan easily. you need at least 25,000 net monthly income of borrowers.<br/>
                4. Work Experience: We usually prefer a work experience with the current employer to be at least 1-3 years.<br/>
                5. Credit score - 700 & above</p>
            </div>
            <div className={styles.div2}>
              <h3>For Credit Card:</h3>
              <p>1. Age: Although, a few banks have a base necessity of 21 years. The Majority of the banks have an age limit of 18 or above for applying for a credit card. The upper limit may vary and usually is 60 years for most of the banks.
                <br />
                2. Salary per Annum: Your yearly pay decides whether you’re qualified for a specific card. The least salary needed to apply for a credit card in India is around Rs.3 lakh p.a.even though it’s ideal to check this basis with your bank as this necessity varies relying upon the card guarantor you pick.
                <br />
                3. Ethnicity or private status: Citizens, occupants, and non-inhabitants can apply. Notwithstanding, there are a couple of cards that are just accessible to Indian residents.

              </p>
            </div>
            <div className={styles.div3}>
              <h3>For Debit Card:</h3>
              <p>1. You must have an account with a bank. It can be a savings account or a current account
                <br />
                2. You must be 18 years or above
                <br />
                3. You must have submitted all the necessary documentation required for KYC. As per the guidelines of RBI, KYC is a must for account opening. If you have incomplete documentation, you may not be able to open an account or have a debit card issued to your name.

                4. You must maintain the minimum balance requirement of the bank for a savings account.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Eligibility