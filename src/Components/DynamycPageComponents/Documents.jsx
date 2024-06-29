"use client"
import Image from "next/image";
import { useState } from "react"
import "../../Styles/Small_Modules/module.documents.scss";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LinearProgress from '@mui/material/LinearProgress';
import DocIcon from "../../../public/assets/svg/doc_icon.svg";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const DOCUMENTS_LIST = [
    "Photograph of all the Partners",
    "PAN Card of all the Partners",
    "ID Proof of all the Partners (Driving License/Passport/Voter ID)",
    "Electricity Bill or any other utility bill for the address proof of the Registered Office"
]

const DOCUMENTS_TYPES = [
    "Private Limited Company",
    "One Person Company",
    "Public Limited Company",
    "Partnership Firm",
    "Limited Libility Partnership"
]

const Documents = () => {
    const [DocType,SetDocType] = useState('');

    const [isSubmitting,setSubmitting] = useState(false);

    const handleFormSubmit = () =>{
      setSubmitting(true);
      setTimeout(() =>{
        setSubmitting(false);
        SetDocType('');
        document.getElementById("email_id").value = "";
      },5000)
   
    }
  
    const handleChange = (event) => {
        SetDocType(event.target.value);
    };
    
  return (
   <section className="outer_">
    <div className="documents_">
        <div className="text_info">
            <div className="icon">
                <Image
                src={DocIcon}
                alt="Documents Required"
                />
            </div>
            <span>
                <h6>Documents Required</h6>
                <p>Here is the check list of documents required to register a private limited company.</p>
            </span>
            <ul className="documents">
                {
                DOCUMENTS_LIST.map((doc,index) =>(
                    <li key={index}>{doc}</li>
                )) 
                }
            </ul>
        </div>

        <div className="form_input">
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
            <p>Get Documents & Process PDF directly in you Mail Inbox.</p>
            <div className="feilds">

            <FormControl style={{
                width : "100%"
            }} >
            <InputLabel id="select_doc_type">Select Document Type</InputLabel>
            <Select
                disabled={isSubmitting && true}
            style={{
                width : "100%",
                minWidth : "250px"
            }}
            labelId="select_doc_type"
            id="select_documents_type"
            value={DocType}
            onChange={handleChange}
            placeholder="Select"
            label="Select Document Type"
            >
                <MenuItem value="">
                    <em>Select Document Type</em>
                </MenuItem>
                {
                    DOCUMENTS_TYPES.map((doc,index) =>(
                        <MenuItem value={doc} key={index}>{doc}</MenuItem>
                    ))
                }
    
            </Select>
         </FormControl>

            <TextField
            style={{
                width : "100%"
            }} 
                disabled={isSubmitting && true}
                label="Email ID"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <EmailIcon />
                    </InputAdornment>
                ),
                }}
                variant="outlined"
                id='email_id'
                type="email" 
                placeholder="Enter your email address"
            />
            
            <Button
            TouchRippleProps={false}
            disableElevation
            style={{
                width : "100%",
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

export default Documents