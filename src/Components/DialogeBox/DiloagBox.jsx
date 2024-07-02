"use client"
import {useState}  from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PhoneIcon from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LinearProgress from '@mui/material/LinearProgress';


export default function AlertDialog() {
  const [open, setOpen] = useState(false);
  const [isSubmitting,setSubmitting] = useState(false);

  const handleFormSubmit = () =>{
    setSubmitting(true);
    setTimeout(() =>{
      setSubmitting(false);
    },5000)
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
      sx={{
        zIndex : "50000",
        background : "#050505bd",
      }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
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

        <DialogTitle id="alert-dialog-title">
          {"Let's Get in Touch"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Fill out the informaiton we will respond within 24 hours.
          </DialogContentText>
          <div 
          style={{
            padding : "20px 0px",
            display : "flex",
            flexDirection : "column",
            gap : "24px"
          }}
          className="contact_form">
        <div 
        style={{
            display : "flex",
            flexDirection : "row",
            gap : "12px"
          }}
        className="flex">
        <TextField
          disabled={isSubmitting && true}
        id="outlined-basic" label="First Name" variant="outlined" />
        <TextField 
          disabled={isSubmitting && true}
        id="outlined-basic" label="Last Name" variant="outlined" />
        </div>
       

        <TextField
          disabled={isSubmitting && true}
          placeholder="Mobile Number"
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
      />
          <TextField
          disabled={isSubmitting && true}
        placeholder="Email Address"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        id='email_id'
        type="email" // Ensures numeric keyboard on mobile
      
      />
      <Button
      TouchRippleProps={false}
      disableElevation
      sx={{
        background : `${isSubmitting === true ? '#3f3cf67b' : '#403CF6'  }`,
        padding : "14px"
      }}
      disabled={isSubmitting && true}
      onClick={handleFormSubmit}
      id="submit_cb" variant="contained" endIcon={<SendIcon/> }  >
        {isSubmitting === true ? "Submitting..."  : "Request an Callback"}
      </Button>
      </div>
        </DialogContent>
   
    
      </Dialog>
    </>
  );
}
