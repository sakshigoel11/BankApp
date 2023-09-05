import React from 'react'
import sbilogo from './Media/sbilogo.png';
import styles from './Styles/contactUs.module.css';

import { Link, useNavigate } from 'react-router-dom';

function ManageCards() {

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

                    <Link to="/home" >Home</Link>
                    <Link to="/howDoI" >How do I</Link>
                    <Link to="/manageCards" >Manage Credit/Debit card E-Mandate</Link>
                    <Link to="/contactUs" >Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default ManageCards
