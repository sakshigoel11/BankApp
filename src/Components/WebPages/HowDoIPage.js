import React from 'react'
import sbilogo from './Media/sbilogo.png';
import styles from './Styles/howDoI.module.css';

import { Link, useNavigate } from 'react-router-dom';

function HowDoIPage() {

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
                    <Link to="/contactUs" >Contact Us</Link>
                </div>
            </div>
            <div className={styles.alert}>

                <h5>NEVER respond to any popup,email, SMS or phone call, no matter how appealing or official looking, seeking your personal information such as username, password(s), mobile number, ATM Card details, etc. Such communications are sent or created by fraudsters to trick you into parting with your credentials.</h5>

            </div>
            <div className={styles.mainDiv}>
                <h2 className={styles.heading}>How Do I videos</h2>
                <div>
                    <div className={styles.subDiv}>
                        <details>
                            <summary><a href="" className={styles.link}>How Do I: Apply for a Public Provident Fuhttps://www.youtube.com/embed/6EDRfJfDbbcnd (PPF) Account through OnlineSBI</a></summary>
                            <center><iframe width="560" height="315" src="https://www.youtube.com/embed/6EDRfJfDbbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </center>
                        </details>
                        <br></br>
                        <details>
                            <summary><a href="https://www.youtube.com/embed/PgrDKhwmXac" className={styles.link}>How to stop payment of cheque through OnlineSBI</a></summary>
                            <center><iframe width="560" height="315" src="https://www.youtube.com/embed/PgrDKhwmXac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </center>
                        </details>
                        <br></br>
                        <details>
                            <summary><a href="https://www.youtube.com/embed/q5u2HfhD2-M" className={styles.link}>How to link PAN with Account</a></summary>
                            <center><iframe width="560" height="315" src="https://www.youtube.com/embed/q5u2HfhD2-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </center>
                        </details>
                        <br></br>
                        <details>
                            <summary><a href="https://www.youtube.com/embed/3oA1qyyjIuU" className={styles.link}>How to view account summary and account statement in OnlineSBI</a></summary>
                            <center><iframe width="560" height="315" src="https://www.youtube.com/embed/3oA1qyyjIuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </center>
                        </details>
                        <br></br>
                        <details>
                            <summary><a href="https://www.youtube.com/embed/VAX3QPUd1XM" className={styles.link}>How to register Online for Internet Banking using ATM card</a></summary>
                            <center><iframe width="560" height="315" src="https://www.youtube.com/embed/VAX3QPUd1XM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </center>
                        </details>
                        <br></br>
                        <details>
                            <summary><a href="https://www.youtube.com/embed/DXze1GJJvZs" className={styles.link}>How to activate or Deactivate SMS alerts through OnlineSBI</a></summary>
                            <center><iframe width="560" height="315" src="https://www.youtube.com/embed/DXze1GJJvZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </center>
                        </details>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HowDoIPage
