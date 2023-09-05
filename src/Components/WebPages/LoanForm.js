import React from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios';
//import styles from './Styles/loanForm.module.css'
import Eligibility from './Eligibility';

function LoanForm() {
  return (
      <div>
        <h2>Eligibility Criteria</h2>
          <p>
          SBI Bank offers Personal Loan to salaried individuals.
           You may quickly check your Personal Loan eligibility criteria if you are an existing SBI Bank customer.
            Personal Loan eligibility for a 
            Pre-approved Personal Loan can be checked through the iMobile Pay app and/or Net Banking platform.
            <br></br>
            <Link to="/Eligibility"><button>Eligibility</button></Link>
          </p>
          {/* <div><img src={Loan} alt="photo" width="15px" height="15px"></img></div>  */}
          <Link to="/loanApply"><button>Apply for loan</button></Link>
          <Link to="/CardsApply"><button>Cards</button></Link>
        
    </div>
  )
}


export default LoanForm






