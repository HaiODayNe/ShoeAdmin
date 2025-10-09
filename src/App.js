import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Chat from "./Components/Chat";
import Calendar from "./Components/Calendar";
import Email from "./Components/Email";
import Invoice from "./Components/Invoice";
import ViewInvoice from "./Components/ViewInvoice";
import CreateInvoice from "./Components/CreateInvoice";
import PageFAQ from "./Components/PageFAQ";
import PagePricing from "./Components/PagePricing";
import PageTimeline from "./Components/PageTimeline";
import AuthConfirmMail from "./Components/AuthConfirmMail";
import AuthCreatePW from "./Components/AuthCreatePW";
import AuthLockScreen from "./Components/AuthLockScreen";
import AuthLogin from "./Components/AuthLogin";
import AuthLoginPin from "./Components/AuthLoginPin";
import AuthLogout from "./Components/AuthLogout";
import AuthRecoveryPW from "./Components/AuthRecoveryPW";
import AuthRegister from "./Components/AuthRegister";
import SubmitForm from "./Components/SubmitForm";
import ListProducts from "./Components/ListProduct";
class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/email" element={<Email />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/viewinvoice" element={<ViewInvoice />} />
          <Route path="/createinvoice" element={<CreateInvoice />} />
          <Route path="/pagepricing" element={<PagePricing />} />
          <Route path="/pageFAQ" element={<PageFAQ />} />
          <Route path="/pagetimeline" element={<PageTimeline />} />
          <Route path="/authconfirmmail" element={<AuthConfirmMail />} />
          <Route path="/authcreatepw" element={<AuthCreatePW />} />
          <Route path="/authlockscreen" element={<AuthLockScreen />} />
          <Route path="/authlogin" element={<AuthLogin />} />
          <Route path="/authloginpin" element={<AuthLoginPin />} />
          <Route path="/authlogout" element={<AuthLogout />} />
          <Route path="/authrecoverpw" element={<AuthRecoveryPW />} />
          <Route path="/authregister" element={<AuthRegister />} />
           <Route path="/submitform" element={<SubmitForm />} />
           <Route path="/submitform/:id" element={<SubmitForm />} />
           <Route path="/listproducts" element={<ListProducts />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
