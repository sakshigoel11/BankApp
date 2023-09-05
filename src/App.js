import './App.css';
import LoginPage from './Components/WebPages/LoginPage';
import HomePage from './Components/WebPages/HomePage';
import { BrowserRouter as Router,Routes,Route,Link,BrowserRouter } from 'react-router-dom';
import Dashboard from './Components/WebPages/Dashboard';
import HowDoIPage from './Components/WebPages/HowDoIPage';
import ManageCards from './Components/WebPages/ManageCards';
import ContactUs from './Components/WebPages/ContactUs';
import CreateAccountPage from './Components/WebPages/CreateAccountPage'
import Profile from './Components/WebPages/Profile';
import ChangePassword from './Components/WebPages/ChangePassword';
import FAQsPage from './Components/WebPages/FAQsPage';
import Transactions from './Components/WebPages/Transactions';
import SetTransactionPassword from './Components/WebPages/SetTransactionPassword';
import SendMoney from './Components/WebPages/SendMoney';
import LoanForm from './Components/WebPages/LoanForm';
import Eligibility from './Components/WebPages/Eligibility';
import ApplyNow from './Components/WebPages/ApplyNow';
import CardsApply from './Components/WebPages/CardsApply'
import CreditCard from './Components/WebPages/CreditCard'
import DebitCard from './Components/WebPages/DebitCard'
import AdminCredit from './Components/WebPages/AdminCredit'
import AdminDebit from './Components/WebPages/AdminDebit'
import AdminLoan from './Components/WebPages/AdminLoan'
import AdminPage from './Components/WebPages/AdminPage'
import Applicationstatus from './Components/WebPages/Applicationstatus'
import Func from './Components/WebPages/Func.JS';
import ClassCompo from './Components/WebPages/ClassCompo';
import ChangePass from './Components/WebPages/ChangePass'

function App() {
  return (
    
      <BrowserRouter>

      <Routes>

        <Route exact path="/" element={<HomePage/>}/>
        
        <Route path="/home" element={<HomePage/>}/>
        
        <Route path="/login" element={<LoginPage/>}/>

        <Route path="/dashboard" element={<Dashboard/>}/>

        <Route path="/howDoI" element={<HowDoIPage/>}/>

        <Route path="/manageCards" element={<ManageCards/>}/>

        <Route path="/contactUs" element={<ContactUs/>}/>

        <Route path="/createAccount" element={<CreateAccountPage/>}/>

        <Route path="/profile" element={<Profile/>}/>

        <Route path="/changePassword" element={<ChangePassword/>}/>

        <Route path="/changePass" element={<ChangePass/>}/>

        <Route path="/faqs" element={<FAQsPage/>}/>

        <Route path="/pay" element={<SendMoney/>}/>

        <Route path="/setTransactionPassword" element={<SetTransactionPassword/>}/>

        <Route path="/transactions" element={<Transactions/>}/>

        <Route path="/loanForm" element={<LoanForm/>}/>

        <Route path="/eligibility" element={<Eligibility/>}/>

        <Route path="/loanApply" element={<ApplyNow/>}/>

        <Route path="/cardsApply" element={<CardsApply/>}/>

        <Route path="/loanForm" element={<LoanForm/>}/>

        <Route path="/creditCard" element={<CreditCard/>}/>

        <Route path="/debitCard" element={<DebitCard/>}/>

        <Route path="/adminCredit" element={<AdminCredit/>}/>

        <Route path="/adminDebit" element={<AdminDebit/>}/>

        <Route path="/adminLoan" element={<AdminLoan/>}/>

        <Route path="/adminPage" element={<AdminPage/>}/>

        <Route path="/ApplicationStatus" element={<Applicationstatus/>}/>
        
      </Routes>

    </BrowserRouter>


  );
}

export default App;
