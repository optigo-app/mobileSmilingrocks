import React, { useEffect, useState } from "react";
import Header from "../home/Header/Header";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {

  let navigate = useNavigate();

  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('+91');
  const[pass,setPass]=useState('');

  const[emailErr,setEmailErr]=useState('');
  const[phoneErr,setPhoneErr]=useState('');
  const[passErr,setPassErr]=useState('');

  const[open,setOpen] = useState(false);

  // const[flag,setFlag]=useState(false)

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handelSignUp = () =>{

    // if(emailErr.length || phoneErr.length || passErr.length)  {
    //   setOpen(true)
    // }

    if(email.length === 0){
      setEmailErr('This field is required.')
      setOpen(true)
    }
    else if(!validateEmail(email)){
      setEmailErr('Enter a valid email address.')
      setOpen(true)
    }
    else{
      setEmailErr('')
      setOpen(false)
    }

    if(( /^\d+$/.test(phone) || phone.length<=3 || phone.length === 0 || phone.length<13 || phone.length>13)){
        setPhoneErr('Enter a valid phone number.')
        setOpen(true)
    }else{
      setPhoneErr('')
      setOpen(false)
    }

    if(pass.length === 0){
      setPassErr('This field is required.')
      setOpen(true)
    }else{
      setPassErr('')
      setOpen(false)
    }
  }

  


  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="main-outer-container">
          <div className="have-an-account">
            <font className="have-an-account-text">
              ALREADY HAVE AN ACCOUNT?
            </font>
            <button className="have-an-account-button" onClick={()=>navigate('/LoginPage')}>LOG IN</button>
          </div>
          <div className="create-an-account-container">
            <div className="caa-inner-container">
              <h3 style={{ margin: 0, padding: 0, color: "#333333" }}>
                CREATE AN ACCOUNT
              </h3>
              <div
                className="error-box"
                style={{ display: open ? "block" : "none" }}
              >
                <div style={{ padding: "12px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "flex-end"  }}>
                    <span onClick={()=>setOpen(false)}>X</span>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',fontWeight:'bold'}}>
                        <span>{emailErr}</span>
                        <span>{phoneErr}</span>
                        <span>{passErr}</span>
                  </div>
                </div>
              </div>
              <div className="input-outer-container">
                <span className="input-inner-container">
                  <label>Email</label>
                  <span style={{display:'flex',flexDirection:'column'}}>
                  <input
                    type="text"
                    placeholder="Email"
                    className={`inpfield ${(emailErr.length ? 'err' :'')}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <small style={{height:'17px',color:'#eb5757'}}>{emailErr}</small>
                  </span>
                </span>
                <span className="input-inner-container">
                  <label>Phone (optional)</label>
                  <span style={{display:'flex',flexDirection:'column'}}>
                  <input
                    type="text"
                    className={`inpfield pho ${phoneErr.length ? 'err' :''}`}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                  <small style={{height:'17px',color:'#eb5757'}}>{phoneErr}</small>
                    </span>
                </span>
                <span className="input-inner-container">
                  <label>Password</label>
                  <span style={{display:'flex',flexDirection:'column'}}>
                  <input
                    placeholder="Password"
                    type="text"
                    className={`inpfield ${passErr.length ? 'err' :''}`}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <small style={{height:'17px',color:'#eb5757'}}>{passErr}</small>
                  </span>
                </span>
              </div>
              <button className="reg-btn" onClick={handelSignUp}>Create an account</button>
              <hr
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                  width: "100%",
                  marginTop: "-15px",
                }}
              />

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "-18px",
                }}
              >
                <button className="googleset-btn">
                  <span style={{ color: "white" }}>G+</span>
                  <span style={{ color: "white" }}>|</span>
                  <span style={{ color: "#333333" }}>GOOGLE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
