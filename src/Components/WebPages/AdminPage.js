// -------------------------------------ADMIN PAGE-----------------------------------------------------------
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'

import sbilogo from './Media/sbilogo.png';
import styles from './Styles/contactUs.module.css';

function AdminPage() {

  const ButtonStyle = { backgroundColor: "black", width: "100%", height: "100px", color: "white", border: "2px solid white" }

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

        </div>
        <div className={styles.mainBox}>

          <div>
            <h2 style={{ textAlign: "center" }}> ADMIN PORTAL </h2>

            <Link to="/AdminLoan"><button style={ButtonStyle}> Check Loan Request</button></Link>

            <Link to="/AdminCredit"><button style={ButtonStyle}> Check Credit Card Application</button></Link>

            <Link to="/AdminDebit"><button style={ButtonStyle}> Check Debit Card Application</button></Link>

          </div>
        </div>


      </div>
    </div>



  )
}

export default AdminPage
