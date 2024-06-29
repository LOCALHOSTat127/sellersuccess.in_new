"use client"
import { useState } from "react"
import "../../Styles/Small_Modules/module.steps.scss";


const STEPS = [
    {
        head : "Fill Simple Checklist",
        sub : "A compliance manager will get in touch with you to collect your documents along with a simple checklist. You need to fill up that checklist and submit along with your documents for verification. Our team of experts will verify the documents provided by you and take the procedure further. The compliance manager dedicated to you will keep you updated on the progress of Company Registration throughout the process."
    },
    {
        head : "Name Approval",
        sub : "Once your documents along with Checklist are submitted, we shall proceed with the application of your Digital Signature and subsequently the approval of name for your Private Limited Company. You may suggest up to two names of your choice. Names should be unique and suggestive of the Company’s business. We will proceed with application for name for your Private Limited Company in Part A of SPICe Plus form."
    },
    {
        head : "Registration",
        sub : "We will draft the MOA (Memorandum of association) and AOA (Articles of association). We will file the incorporation documents with MCA through in part B of a form called “SPICe Plus (SPICe +)” along with the subscription statement. Usually, MCA approves the forms within 4-5 days once filed and issues Incorporation Certificate with CIN. PAN & TAN are allotted alongside. You may then proceed to open your Company Bank Account."
    }
]
const Steps = () => {
    const handleActive = (e) =>{
        const steps = document.getElementById('steps').children;

        for(let i=0; i < steps.length; i++){
            if(steps[i].classList.contains("active")){
                steps[i].classList.remove("active");
            }
        }
        steps[e.target.id].classList.add("active");

    }

  return (
    <section className="outer_">
        <div className="wrapper">
            <span>
                <h6>Here is, How it works?</h6>
                <p>Get Answers to your most asked question.</p>
            </span>
            <div className="steps" id="steps">
                {
                    STEPS.map((step,index) =>(
                        <div 
                 
                        key={index} 
                        className={`step ${index === 0 ? "active" : "none"}`}>
                            <div 
                              
                                className="upper">
                                <div 
                                id={index}
                                onClick={handleActive}
                                className="overlay"></div>
                                <p>Step {index+1}</p>
                                <p className="step_name">{step.head}</p>
                            </div>
                            <div className="step_desc">
                                {step.sub}
                            </div>  
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Steps