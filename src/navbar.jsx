import React from "react";
import{Route,Routes,Link} from 'react-router-dom'
import './navbar.css'
import OpenAccount from "./components/OpenAccount";
import Success from "./redirectmessages/success";
import Faild from "./redirectmessages/faild";
import Withdraw from "./components/Withdraw";
import Deposit from "./components/Deposit";
import TransferForm from "./components/transfer";
import CheckBalance from "./components/CheckBalance";
import ATM from "./components/Atm";
import AtmWithdraw from "./ATMtransactions/ATMwithdraw";
import AtmDeposit from "./ATMtransactions/AtmDeposit";
import AtmMiniStatement from "./ATMtransactions/AtmMiniStatement";
import SetPinATM from "./ATMtransactions/SetPinATM";
import BalanceEnquireATM from "./ATMtransactions/BalanceEnquireATM";
import ATMTransfer from "./ATMtransactions/ATMTransfer";
import Statement from "./components/Statement";
import MiniStatement from "./components/MiniStatement";
import ApplyDebitCard from "./ATMtransactions/ApplyDebitCard";
import CancelDebitCard from "./ATMtransactions/CancelDebitCard";
import Home from "./components/home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import { Dropdown } from 'react-bootstrap'; // Import Bootstrap Dropdown
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <div className="nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/accounts" className="nav-link">
              Accounts
            </Link>
            <Link to="/deposit" className="nav-link">
              Deposit
            </Link>
            <Link to="/withdraw" className="nav-link">
              Withdraw
            </Link>
            <Link to="/transfer" className="nav-link">
              Transfer
            </Link>
            <Link to="/balanceenquiry" className="nav-link">
              Balance Enquiry
            </Link>
            <Link to="/atm" className="nav-link">
              ATM
            </Link>
            
            {/* Dropdown for Statement */}
            <Dropdown className="nav-item dropdown-custom">
              <Dropdown.Toggle variant="success" id="dropdown-statement" className="nav-link dropdown-toggle-custom">
                Statement
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item as={Link} to="/statement" className="dropdown-item-custom">Statement</Dropdown.Item>
                <Dropdown.Item as={Link} to="/ministatement" className="dropdown-item-custom">Mini Statement</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Dropdown for Cards */}
            <Dropdown className="nav-item dropdown-custom">
              <Dropdown.Toggle variant="success" id="dropdown-cards" className="nav-link dropdown-toggle-custom">
                Cards
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item as={Link} to="/applyDebitCard" className="dropdown-item-custom">Apply Debit Card</Dropdown.Item>
                <Dropdown.Item as={Link} to="/CancelDebitCard" className="dropdown-item-custom">Cancle Debit Card</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
      <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="accounts" element={<OpenAccount/>}></Route>
            <Route path="deposit" element={<Deposit/>}></Route>
            <Route path="withdraw" element={<Withdraw/>}></Route>
            <Route path="transfer" element={<TransferForm/>}></Route>
            <Route path="balanceenquiry" element={<CheckBalance/>}></Route>
            <Route path="atm" element={<ATM/>}></Route>
            <Route path="atmWithdraw" element={<AtmWithdraw/>}></Route>
            <Route path="atmDeposit" element={<AtmDeposit/>}></Route>
            <Route path="atmMiniStatement" element={<AtmMiniStatement/>}></Route>
            <Route path="atmBalance" element={<BalanceEnquireATM/>}></Route>
            <Route path="setpin" element={<SetPinATM/>}></Route>
            <Route path="atmtransfer" element={<ATMTransfer/>}></Route>
            <Route path="statement" element={<Statement/>}></Route>
            <Route path="ministatement" element={<MiniStatement/>}></Route>
            <Route path="applyDebitCard" element={<ApplyDebitCard/>}></Route>
            <Route path="CancelDebitCard" element={<CancelDebitCard/>}></Route>
            <Route path="/success" element={<Success />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/success" element={<Success />} />
            <Route path="/faild" element={<Faild />} />
        </Routes>
      </div>
        </>
    );
};

export default Navbar;
