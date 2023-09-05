import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import "./Styles/transactionStyle.css"

import sbilogo from './Media/sbilogo.png';
import styles from './Styles/contactUs.module.css';

import { Link} from 'react-router-dom';

function Transactions() {

    const location = useLocation();
    const [posts, setPosts] = useState([]);
    const id = location.state;

    //login user->transactions 
    useEffect(() => {
        axios.get
            (`http://localhost:8084/getTransactions/${id}`)
            .then(res => {
                setPosts(res.data);
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



    return (

        <div style={mainDiv}>
            <div style={header} ><img src={sbilogo} align="left" alt="Logo" width={"9%"} height={"4%"} /></div>
            <br />
            <div style={navBar} >

                <div className={styles.navbar}>

                    <Link to="/dashboard" state={id} >Dashboard</Link>

                </div>
                <div className={styles.mainBox}>

                    <div>

                        <table id='customers'>
                            <tr>
                                <th>DATE AND TIME</th>
                                <th>DESCRIPTION</th>
                                <th>DEBIT</th>
                                <th>CREDIT</th>
                                <th>BALANCE</th>
                            </tr>
                            {posts.map(post => (

                                <tr key={post.transaction_id} >
                                    <td>{post.transactionDate}</td>
                                    <td>{post.description}</td>
                                    <td>{post.debit}</td>
                                    <td>{post.credit}</td>
                                    <td>{post.balance}</td>

                                </tr>


                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>

            )
}

            export default Transactions
