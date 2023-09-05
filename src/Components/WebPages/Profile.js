import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sbilogo from './Media/sbilogo.png';
import styles from './Styles/profile.module.css';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import profilePic from './Media/contactlogo.png';

function Profile() {

    const [posts, setPosts] = useState([])

    const location = useLocation();

    const accNumber = location.state;

    useEffect(() => {


        axios.get(`http://localhost:8084/getUserById/${accNumber}`)


            .then(res => {

                console.log(res.data)
                setPosts(res.data)
                setLoading(false)
            })
    }, [])

    const [loading, setLoading] = useState(true)

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

                    <Link to="/dashboard" state={accNumber} >Dashboard</Link>

                </div>
                <div className={styles.mainBox}>

                    <h2 align="center" >Profile</h2>

                    <table align='center'>

                        <tr>

                            <td><h2>Account Number</h2></td>
                            <td>{accNumber}</td>

                        </tr>

                        <tr>

                            <td><h2>Name</h2></td>
                            <td>{posts.firstName} {posts.lastName}</td>

                        </tr>

                        <tr>

                            <td><h2>Email</h2></td>
                            <td>{posts.email}</td>

                        </tr>

                        <tr>

                            <td><h2>Phone</h2></td>
                            <td>{posts.phone}</td>

                        </tr>

                    </table>

                    <br/><br/>

                    <Link to="/changePassword" state={accNumber}  ><button className={styles.changeBTN} >Change Password</button></Link>

                    <br/><br/>

                </div>
            </div>
        </div>
    )
}

export default Profile