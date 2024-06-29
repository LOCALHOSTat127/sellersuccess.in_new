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
      Let's connect.
      </h1>
      <p className="page_description">
      Our services are designed to provide comprehensive solutions tailored to meet the unique needs of your business. Whether you're looking to start a new venture, streamline your operations, or expand your reach, our expert team is here to support you every step of the way. We are committed to delivering excellence and helping you achieve your business goals efficiently and effectively.
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
        id="outlined-basic" label="First Name" variant="outlined" />
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