import React, { useState } from "react";
import Header from "../home/Header/Header";
import Footer from "../footer";
import './forgot.css'

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [open, setOpen] = useState(false);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handelForgot = () => {
    if (email.length === 0) {
      setEmailErr("This field is required.");
      setOpen(true);
    } else if (!validateEmail(email)) {
      setEmailErr("Enter a valid email address.");
      setOpen(true);
    } else {
      setEmailErr("");
      setOpen(false);
    }
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:'55px'
        }}
      >
        <div className="forgot-container">
          <span className="title"> FORGOT YOUR PASSWORD?</span>
          <div className="sub-title">
            Please let us know the email you have used to register or purchase
            at our store.
          </div>
          <div
            className="error-box"
            style={{ display: open ? "block" : "none" }}
          >
            <div style={{ padding: "12px 20px" }}>
              <div style={{ display: "flex", justifyContent: "flex-end",width:'100%' }}>
              <span style={{padding:'15px',width:'95%'}}>{emailErr}</span><span style={{width:'5%',display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => setOpen(false)}>X</span>
              </div>
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontWeight: "bold",
                }}
              >
                <span>{emailErr}</span>
              </div> */}
            </div>
          </div>
          <div style={{width:'100%'}}>
            <span className="input-inner-container">
              <label>Email</label>
              <span style={{ display: "flex", flexDirection: "column" }}>
                <input
                  type="text"
                  placeholder="Email"
                  className={`inpfield ${emailErr.length ? "err" : ""}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small style={{ height: "17px", color: "#eb5757" }}>
                  {emailErr}
                </small>
              </span>
            </span>
          </div>
          <button onClick={handelForgot} className="forgot-btn">CONTINUE</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Forgot;
