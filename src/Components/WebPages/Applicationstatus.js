import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link, useNavigate } from 'react-router-dom';


import sbilogo from './Media/sbilogo.png';
import styles from './Styles/contactUs.module.css';

function Applicationstatus() {

    const loc = useLocation()
    const accountno = loc.state;

    const [creditRequest, setCreditRequest] = useState([])

    const [loanRequest, setLoanRequest] = useState([])

    const [debitRequest, setDebitRequest] = useState([])


    useEffect(() => {

        axios.get(`http://localhost:8084/getAllCreditRequest/${accountno}`)

            .then(res => {
                console.log(res.data)
                setCreditRequest(res.data)

            })

            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {

        axios.get(`http://localhost:8084/getAllDebitRequest/${accountno}`)

            .then(res => {
                console.log(res.data)
                setDebitRequest(res.data)

            })

            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {

        axios.get(`http://localhost:8084/getAllLoanRequest/${accountno}`)

            .then(res => {
                console.log(res.data)
                setLoanRequest(res.data)

            })

            .catch(err => {
                console.log(err)
            })
    }, [])

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
                        <h2>Credit Card Requests</h2>
                        <br/>
                        <table id="customers">
                            <tr>
                                <th>CreditCardId</th>
                                <th>fullName</th>
                                <th>salary</th>
                                <th>mobile</th>
                                <th>email</th>
                                <th>address</th>
                                <th>ApplicationStatus</th>
                            </tr>

                            {creditRequest.map(post => (



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
                        <br/><br/>
                        <h2>Debit Card Requests</h2>
                        <br/>
                        <table id="customers">

                            <tr>
                                <th>DebitCardId</th>

                                <th>fullName</th>
                                <th>mobile</th>
                                <th>email</th>
                                <th>address</th>
                                <th>ApplicationStatus</th>
                            </tr>



                            {

                                debitRequest.map(post => (



                                    <tr key={post.id}>
                                        <td>{post.id}</td>

                                        <td>{post.fullName}</td>

                                        <td>{post.mobile}</td>

                                        <td>{post.email}</td>

                                        <td>{post.address}</td>

                                        {post.isApprovedNow == 1 && <td style={{ color: "Green" }}>APPROVED</td>}
                                        {post.isApprovedNow == 2 && <td style={{ color: "Red" }}>DENIED</td>}
                                        {post.isApprovedNow == 0 && <td style={{ color: "Yellow" }}>ON HOLD</td>}

                                    </tr>




                                ))}

                        </table>
                        <br/><br/>
                        <h2>Loan Requests</h2>
                        <br/>
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

                                loanRequest.map(post => (



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

            </div>
        </div>


    )
}

export default Applicationstatus
