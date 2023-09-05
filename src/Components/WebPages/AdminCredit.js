import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Styles/transactionStyle.css'

import sbilogo from './Media/sbilogo.png';
import styles from './Styles/contactUs.module.css';


import { Link, useNavigate } from 'react-router-dom';

function AdminCredit() {
    const [posts, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    const [creditcardId, setCreditcardId] = useState()





    useEffect(() => {

        axios.get(`http://localhost:8084/getApplycredit`)

            .then(res => {
                console.log(res.data)
                setPost(res.data)
                setLoading(false)
            })

            .catch(err => {
                console.log(err)
            })
    }, [])





    const handleApproval = (e) => {

        e.preventDefault();
        let isApprovedNow = 1;

        axios.put(`http://localhost:8084/updateCreditCard/${creditcardId}`,
            {
                isApprovedNow

            })
        
            alert("Approved")
    }

    const handleDeny = (e) => {

        e.preventDefault();
        let isApprovedNow = 2;

        axios.put(`http://localhost:8084/updateCreditCard/${creditcardId}`,
            {
                isApprovedNow

            })

            alert("Denied")
    }

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

                    <Link to="/adminPage" >Back</Link>

                </div>
                <div className={styles.mainBox}>

                    <div>


                        <table id="customers">

                            <tr>
                                <th>CreditCardId</th>

                                <th>fullName</th>
                                <th>salary</th>
                                <th>mobile</th>
                                <th>email</th>
                                <th>address</th>
                                <th>Status</th>
                            </tr>



                            {
                                !loading &&
                                posts.map(post => (



                                    <tr key={post.id}>
                                        <td>{post.id}</td>

                                        <td>{post.fullName}</td>
                                        <td>{post.salary}</td>
                                        <td>{post.mobile}</td>
                                        <td>{post.email}</td>
                                        <td>{post.address}</td>
                                        {post.isApprovedNow == 1 && <td style={{ color: "Green" }}>APPROVED</td>}
                                        {post.isApprovedNow == 2 && <td style={{ color: "Red" }}>DENIED</td>}
                                        {post.isApprovedNow == 0 && <td style={{ color: "Yellow" }}>ON HOLD</td>}

                                    </tr>



                                ))}

                        </table>

                    </div>

                </div>

                <form className={styles.adminFormStyle} >
                    <input type="text" placeholder="Enter Credit Card ID to Approve" value={creditcardId} className={styles.adminInputStyle} onChange={(e) => setCreditcardId(e.target.value)} />
                    <button className={styles.adminBTNStyle} onClick={handleApproval}>Approve</button>
                    <button className={styles.adminBTNStyle} onClick={handleDeny}>Deny</button>

                </form>

                <h5 align="center" >Please Refresh the page to see the updated list.</h5>

            </div>
        </div>


    )
}








export default AdminCredit
