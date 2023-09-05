import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Styles/transactionStyle.css'

import sbilogo from './Media/sbilogo.png';
import styles from './Styles/contactUs.module.css';


import { Link, useNavigate } from 'react-router-dom';

function AdminLoan() {



    const [posts, setPost] = useState([])

    const [loading, setLoading] = useState(true)
    const [loanId, setloanId] = useState()

    useEffect(() => {

        axios.get(`http://localhost:8084/getCustomersAll`)

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

        axios.put(`http://localhost:8084/updateCustomerLoan/${loanId}`,
            {
                isApprovedNow

            })
            alert("Approved")
    }

    const handleDeny = (e) => {

        e.preventDefault();
        let isApprovedNow = 2;

        axios.put(`http://localhost:8084/updateCustomerLoan/${loanId}`,
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
                                <th>Loan ID</th>

                                <th>firstName</th>
                                <th>lastName</th>
                                <th>mobile</th>
                                <th>email</th>
                                <th>amount</th>
                                <th>loanPeriod</th>
                                <th>typeLoan</th>
                                <th>ApplicationStatus</th>

                            </tr>



                            {
                                !loading &&
                                posts.map(post => (



                                    <tr key={post.id} >

                                        <td>{post.id}</td>
                                        <td>{post.firstName}</td>
                                        <td>{post.lastName}</td>

                                        <td>{post.mobile}</td>

                                        <td>{post.email}</td>

                                        <td>{post.amount}</td>
                                        <td>{post.loanPeriod}</td>
                                        <td>{post.typeLoan}</td>

                                        {post.isApprovedNow == 1 && <td style={{ color: "Green" }}>APPROVED</td>}
                                        {post.isApprovedNow == 2 && <td style={{ color: "Red" }}>DENIED</td>}
                                        {post.isApprovedNow == 0 && <td style={{ color: "Yellow" }}>ON HOLD</td>}

                                    </tr>



                                ))}

                        </table>
                    </div>
                </div>

                <form className={styles.adminFormStyle} >
                    <input type="text" placeholder="Enter Loan ID to Approve"  className={styles.adminInputStyle}  value={loanId} onChange={(e) => setloanId(e.target.value)} />
                    <button  className={styles.adminBTNStyle}  onClick={handleApproval}>Approve</button>
                    <button className={styles.adminBTNStyle} onClick={handleDeny}>Deny</button>

                </form>

                <h5 align="center" >Please Refresh the page to see the updated list.</h5>

            </div>
        </div>


    )
}


export default AdminLoan
