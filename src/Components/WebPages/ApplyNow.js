import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import sbilogo from './Media/sbilogo.png';
import styles from './Styles/cardStyle.module.css';

function ApplyNow() {

    const location = useLocation();

    const accountno = location.state;


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
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()
    const [amount, setAmount] = useState()
    const [loanPeriod, setLoanPeriod] = useState()
    const [typeLoan, setTypeLoan] = useState()

    //   const [salary,setSalary]= useState("")
    //   const [limit,setLimit]= useState("")

    const handleSubmit = ((e) => {

        if(firstName == null || lastName == null || mobile == null || email == null || amount == null || loanPeriod == null || typeLoan == null )
        {
            alert("Null Error")
        }
        else
        {

        axios.post('http://localhost:8084/customer', {
            firstName,
            lastName,
            mobile,
            email,
            amount,
            loanPeriod,
            typeLoan,
            accountno
        })
        alert("Registration SucessFull")
        navigate('/dashboard',{state : accountno})

    }

    })

    const handleChange = (e) => {
        setTypeLoan(e.target.value);
    };

    return (

        <div style={mainDiv}>
            <div style={header} ><img src={sbilogo} align="left" alt="Logo" width={"9%"} height={"4%"} /></div>
            <br />
            <div style={navBar} >

                <div className={styles.navbar}>

                    <Link to="/dashboard" state={accountno} >Back</Link>

                </div>
                <div className={styles.alert}>

                    <h5>To read eligibility criteria please <Link to="/eligibility" state={accountno} > click  here </Link></h5>
                </div>
                <div className={styles.mainBox}>

                    <div>
                        <div className={styles.formStyle}>

                            <h2>Account Number : {accountno}</h2>
                            <h2>Loan Apply</h2>
                            <input type="text" placeholder="First Name" className={styles.inputBox} value={firstName} onChange={(e) => setFirstName(e.target.value)} />  <br /><br />
                            <input type="text" placeholder="Last Name" className={styles.inputBox} value={lastName} onChange={(e) => setLastName(e.target.value)} /> <br /><br />
                            <input type="tel" placeholder="Mobile No." className={styles.inputBox} value={mobile} onChange={(e) => setMobile(e.target.value)} /> <br /><br />
                            <input type="email" placeholder="Email Id" className={styles.inputBox} value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
                            <input type="number" placeholder='Amount' className={styles.inputBox} value={amount} onChange={(e) => setAmount(e.target.value)}/> <br/><br/>
                            <input type="number" placeholder="Loan Period" className={styles.inputBox} value={loanPeriod} onChange={(e) => setLoanPeriod(e.target.value)} />  <br /><br />
                            <label>
                                LoanType :
                            </label><br />
                            <select value={typeLoan} onChange={handleChange}>
                                <option value="Personal Loan">Personal Loan</option>
                                <option value="Home Loan">Home Loan</option>
                                <option value="Vehicle Loan">Vehicle Loan</option>
                                <option value="Gold Loan">Gold Loan</option>
                                <option value="Education Loan">Education Loan</option>
                            </select>
                            <br></br>


                            <button className={styles.loginBTN} onClick={

                                () => {

                                    handleSubmit()

                                }

                            }>Apply For Loan</button><br></br>
                            {/* <Link> to="/Registration"<button style={boxStyle}>SignIn</button></Link> */}

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
        </div >


    )
}

export default ApplyNow


