import React from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios';

function CardsApply() {

  return (
      <div>
        <h2>Apply For Cards</h2>
        <Link to="/CreditCard"><button>Apply For Credit Card</button></Link>
        <Link to="/DebitCard"><button>Apply For Debit Card</button></Link>
    </div>
  )
}
    

export default CardsApply
