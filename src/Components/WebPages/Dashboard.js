import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sbilogo from './Media/sbilogo.png';
import styles from './Styles/dashboard.module.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Dashboard() {
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

    const [posts, setPosts] = useState([])

    //to get the passed state to this page we are using useLocation() method from React-router-dom package
    const locationOBJ = useLocation();

    const accNumber = locationOBJ.state;

    //transaction Password
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const [accNo, setAccNo] = useState("XXXXX")
    const [name, setName] = useState("XXXXX")
    const [phone, setPhone] = useState("XXXXX")
    const [email, setEmail] = useState("XXXXX")

    //eventhandler to show the account details of the user
    const view = () => {

        setAccNo(accNumber)
        setName(posts.firstName + " " + posts.lastName)
        setPhone(posts.phone)
        setEmail(posts.email)

    }
//to handle situation if transaction password is null
    const sendMoneyHandler = (e) => {
        e.preventDefault();

        if (password == "") {

            navigate('/setTransactionPassword', { state: accNumber })

        }

        else {

            navigate('/pay', { state: accNumber })

        }



    }

    const [loan,setLoan]=useState([]);

    const [debit,setDebit]=useState([]);

    const [credit,setCredit]=useState([]);

    const [deniedCredit,setDeniedCredit]=useState([])

    const [deniedDebit,setDeniedDebit]=useState([])

    const [deniedLoan,setDeniedLoan]=useState([])

    const [loading, setLoading] = useState(true)


    useEffect(() => {


        axios.get(`http://localhost:8084/getUserById/${accNumber}`)


            .then(res => {

                console.log(res.data)
                setPosts(res.data)
                setLoading(false)
            })
    }, [])
//For getting user transaction password
    useEffect(() => {

        axios.get

            (`http://localhost:8084/getUserPassword/${accNumber}`)

            .then(res => {

                console.log(res.data)

                setPassword(res.data);

            })

            .catch(err => {

                console.log(err)

            })

    }, [])

    
    useEffect(() => {



        axios.get(`http://localhost:8084/getUndeniedLoanRequest/${accNumber}`)



            .then(res => {

                console.log(res.data)

                setLoan(res.data)

            })



            .catch(err => {

                console.log(err)

            })

    }, [])



    useEffect(() => {



        axios.get(`http://localhost:8084/getUndeniedCreditRequest/${accNumber}`)



            .then(res => {

                console.log(res.data)

                setCredit(res.data)

            })



            .catch(err => {

                console.log(err)

            })

    }, [])



    useEffect(() => {



        axios.get(`http://localhost:8084/getUndeniedDebitRequest/${accNumber}`)



            .then(res => {

                console.log(res.data)

                setDebit(res.data)

            })



            .catch(err => {

                console.log(err)

            })

    }, [])



    useEffect(() => {



        axios.get(`http://localhost:8084/getDeniedCreditRequest/${accNumber}`)



            .then(res => {

                console.log(res.data)

                setDeniedCredit(res.data)

            })



            .catch(err => {

                console.log(err)

            })

    }, [])



    useEffect(() => {



        axios.get(`http://localhost:8084/getDeniedDebitRequest/${accNumber}`)



            .then(res => {

                console.log(res.data)

                setDeniedDebit(res.data)

            })



            .catch(err => {

                console.log(err)

            })

    }, [])



    useEffect(() => {



        axios.get(`http://localhost:8084/getDeniedLoanRequest/${accNumber}`)



            .then(res => {

                console.log(res.data)

                setDeniedLoan(res.data)

            })



            .catch(err => {

                console.log(err)

            })

    }, [])

    const credithandler=(e)=>

    {

        e.preventDefault();
        if(credit.id==null)

        {

            if(deniedCredit.id==null)

            navigate("/CreditCard",{state:accNumber})

            else

            {

                alert("Your previous Credit Card Request was rejected. Please Apply again")

                navigate("/CreditCard",{state:accNumber})

            }



        }

        else

        {

            navigate("/ApplicationStatus",{state:accNumber})



        }

    }



    const debithandler=(e)=>

    {

        e.preventDefault();

        if(debit.id==null)

        {

            if(deniedDebit.id==null)

            navigate("/DebitCard", {state:accNumber})

            else

            {

                alert("Your previous Debit Card Application Was Rejected. Please apply again")

                navigate("/DebitCard",{state:accNumber})

            }



        }

        else

        {

            navigate("/ApplicationStatus",{state:accNumber})



        }

    }

    const loanhandler=(e)=>

    {

        e.preventDefault();

        if(loan.id==null)

        {

            if(deniedLoan.id==null)

            navigate("/loanApply",{state:accNumber})

            else

            {

                alert("Your previous request for loan is rejected. Please apply again")

                navigate("/loanApply",{state:accNumber})

            }



        }

        else

        {

            navigate("/ApplicationStatus",{state:accNumber})



        }

    }

    return (
        <div style={mainDiv}>

            <div style={header} >
                <img src={sbilogo} align="left" alt="Logo" width={"9%"} height={"4%"} />
            </div>

            <br />
            
            <div style={navBar} >

                <div className={styles.navbar}>

                    <Link to="/home" >Home</Link>

                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>
                            <i>Apply Credit/Debit card E-Mandate</i>
                        </button>
                        <div className={styles.dropdowncontent}>
                            <button onClick={credithandler} className={styles.headerDBTN} >Apply Credit Card</button>
                            <br/>
                            <button onClick={debithandler} className={styles.headerDBTN} >Apply Debit Card</button>
                        </div>
                    </div>

                    <button onClick={loanhandler} className={styles.headerBTN} ><i>Apply for Loan</i></button>


                </div>

                <div className={styles.alert}>


                    <h5>NEVER respond to any popup,email, SMS or phone call, no matter how appealing or official looking, seeking your personal information such as username, password(s), mobile number, ATM Card details, etc. Such communications are sent or created by fraudsters to trick you into parting with your credentials.</h5>

                </div>

                <div className={styles.mainBox}>

                    <table align='center'>

                        <tr>

                            <td className={styles.divBoxBalance} >

                                <table align='center'>

                                    <tr>

                                        <td><h3>Account Balance</h3></td>
                                        <td> ₹ {posts.balance}</td>

                                    </tr>

                                </table>



                            </td>
                            <td rowSpan="2" className={styles.divBoxAccountDetails} >

                                <h2>Account Details</h2>
                                {!loading &&
                                    <table align='center' className={styles.accntInfo}>

                                        <tr>

                                            <td><h4>Account Number</h4></td>
                                            <td>{accNo}</td>

                                        </tr>

                                        <tr>

                                            <td><h4>Account Holder Name</h4></td>

                                            <td>{name}</td>


                                        </tr>

                                        <tr>

                                            <td><h4>Registered Phone</h4></td>
                                            <td>{phone}</td>

                                        </tr>

                                        <tr>

                                            <td><h4>Registered Mail</h4></td>
                                            <td>{email}</td>

                                        </tr>

                                    </table>
                                }

                                <button className={styles.loginBTN} onClick={view} >View Details</button>


                            </td>

                        </tr>
                        <tr>

                            <td className={styles.servicesBox} >

                                <button onClick={sendMoneyHandler} className={styles.bottomBTN} >Pay</button>
                                <Link to="/transactions" state={accNumber}><button className={styles.bottomBTN} >Transactions</button></Link>
                                <Link to="/profile" state={accNumber} ><button className={styles.bottomBTN} >View Profile</button></Link>

                            </td>

                        </tr>

                    </table>

                </div>
                <div>

                    <a href='#logoutpopup'><button className={styles.logout}>Logout</button></a>

                </div>

            </div>

            <div id="logoutpopup" className={styles.overlay}>
                <div className={styles.popup}>
                    <br /><br /><br />
                    <p>Your Session has been logout.</p>
                    <br/>
                    <p>Please come back soon !</p>
                    <a className={styles.close} href="#">&times;</a>
                    <br/>
                    <Link to="/" ><button className={styles.loginBTN} >OK</button></Link>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
