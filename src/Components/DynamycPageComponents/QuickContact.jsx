"use client"
import Image from 'next/image';
import {useState} from 'react'
import "../../Styles/Small_Modules/quickContact.scss";
import SmTick from "../../../public/assets/svg/sm_tick.svg";

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
const QuickContact = ({isShort}) => {
  const [isSubmitting,setSubmitting] = useState(false);

  const handleFormSubmit = () =>{
    setSubmitting(true);
    setTimeout(() =>{
      setSubmitting(false);
    },5000)
  }


  return (
   <section className="quick__contact">
    <div className="wrapper">
      <div
      style={{
        display : `${isShort === true ? 'none' : null}`
      }}
      className="right">
      <h1 className="page_title">
      Service that exceeds expectations.
      </h1>
      <p className="page_description">
      A Private Limited Company offers limited liability and legal protection to its shareholders. A Private Limited Company in India lies somewhere between a partnership firm and a widely owned public company. It can be registered with a minimum of two people. A person can be both a director and shareholder in a Private Limited Company.
      </p>
      <div className="fancy_steps">
        <div className="step">
         <span>
         <div className="round">
              <Image
              src={SmTick}
              alt='step'
              />
          </div>
          <p>Provide Information</p>
         </span>
          <div className="dash_line"></div>
        </div>
        <div className="step">
         <span>
         <div className="round">
              <Image
              src={SmTick}
              alt='step'
              />
          </div>
          <p>Documentation & Paperwork</p>
         </span>
          <div className="dash_line"></div>
        </div>
        <div className="step">
         <span>
         <div className="round">
              <Image
              src={SmTick}
              alt='step'
              />
          </div>
          <p>Registration Completed</p>
         </span>
        </div>
        
      </div>
      
      </div>
      <div 
      style={{
        maxWidth :  `${isShort === true ? '400px' : null}`
      }}
      className="left">
      {  isSubmitting 
      &&
      <LinearProgress 
      
      style={{
        position : "absolute",
        left : "0",
        top : "0",
        width : "100%",
        borderRadius: "16px",
      }} />
      }
      


      <span>
        <p className='t'>FIll up your information</p>
        <p>we will respond within 24 hours</p>
      </span>
      <div className="contact_form">
        <div className="flex">
        <TextField
          disabled={isSubmitting && true}
        id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField 
          disabled={isSubmitting && true}
        id="outlined-basic" label="Last Name" variant="outlined" />
        </div>
       

        <TextField
          disabled={isSubmitting && true}
        label="Mobile Number"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        id='phone_number'
        type="tel" // Ensures numeric keyboard on mobile
        placeholder="Enter your mobile number"
      />
      <Button
      TouchRippleProps={false}
      disableElevation
      style={{
        background : `${isSubmitting === true ? '#3f3cf67b' : '#403CF6'  }`
      }}
      disabled={isSubmitting && true}
      onClick={handleFormSubmit}
      id="submit_cb" variant="contained" endIcon={<SendIcon/> }  >
        {isSubmitting === true ? "Submitting..."  : "Request an Callback"}
      </Button>
      </div>
      
      </div>
    </div>
   </section>
  )
}

export default QuickContact