import "../../Styles/Small_Modules/service_card_grid.scss";
import Image from "next/image";
import ThinkingGirl from "../../../public/assets/svg/thinking_girl_with_bulb.svg";
import GstIcon from "../../../public/assets/Images/gst_sm.png";
import  AccountsIcon from "../../../public/assets/Images/accounting_sm.png";
import ComplianceIcon from "../../../public/assets/Images/compliances_sm.png";
import IncomeTaxIcon from "../../../public/assets/Images/incometax_sm.png";
import PayrollIcon from "../../../public/assets/Images/payroll_sm.png";
import ArrowGold from "../../../public/assets/svg/arrow_right_gold.svg";
import ArrowBlue from "../../../public/assets/svg/arrow_right_blue_sm.svg";

const ServicesGridCards = () => {
  return (
    <section className="services_grid">
        <div className="wrapper">
        <div className="text_section">
            <h4>
            Services Tailored to Your Needs.
            </h4>
            <p>
            Explore our expert services: ITR filing, GST registration, bookkeeping, payroll, and financial planning. Simplify your finances with us.
            </p>
        </div>

        <div className="services">
            <div className="q_card">
             <div>
             <h2 className="question">How do i file my Income tax return? get answers to all your questions.</h2>
             <p className="link">
                    Learn more
                    <Image
                    className="sm_arrow"
                    src={ArrowGold}
                    alt="learn more"
                /> 
                    </p>
          
             </div>
                <Image
                className="card_img"
                src={ThinkingGirl}
                loading="lazy"
                alt="How do i file my Income Tax Return?"
                />
            </div>

            <div className="card ser_1">
                <Image
                className="service_img"
                src={GstIcon}
                alt="Goods & Service Tax"
                /> 
                <h3 className="card_title">GST Return</h3>
                <p className="card_desc">
                All-in-one cloud-based GST toolkit simplifies your GST return filing experience
                </p>
               
                    <p className="link">
                    Learn more
                    <Image
                    className="sm_arrow"
                    src={ArrowBlue}
                    alt="learn more"
                /> 
                    </p>
          
            </div>
            <div className="card ser_2">
                <Image
                className="service_img"
                src={AccountsIcon}
                alt="Goods & Service Tax"
                /> 
                <h3 className="card_title">Virtual CFO</h3>
                <p className="card_desc">
               
                Expert financial oversight, strategic planning, budgeting, forecasting, and reporting.


                </p>
          
                    <p className="link">
                    Learn more
                    <Image
                    className="sm_arrow"
                    src={ArrowBlue}
                    alt="learn more"
                /> 
                    </p>
             
            </div>
            <div className="card ser_3">
                <Image
                className="service_img"
                src={ComplianceIcon}
                alt="Goods & Service Tax"
                /> 
            
               <h3 className="card_title">Compliance</h3>
                <p className="card_desc">
                Ensure adherence to laws, minimize risk, avoid penalties comprehensive compliance management.
                </p>
          
            
                    <p className="link">
                    Learn more
                    <Image
                    className="sm_arrow"
                    src={ArrowBlue}
                    alt="learn more"
                /> 
                    </p>
             
            </div>
            <div className="card ser_4">
                <Image
                className="service_img"
                src={IncomeTaxIcon}
                alt="Goods & Service Tax"
                /> 
                <h3 className="card_title">ITR Filling</h3>
                <p className="card_desc">
                Simplify income tax return, accurate filing, maximize deductions, minimize liabilities.
                </p>
             
                    <p className="link">
                    Learn more
                    <Image
                    className="sm_arrow"
                    src={ArrowBlue}
                    alt="learn more"
                /> 
                    </p>
              
            </div>
            <div className="card ser_5">
                <Image
                className="service_img"
                src={PayrollIcon}
                alt="Goods & Service Tax"
                /> 
                <h3 className="card_title">Payroll service</h3>
                <p className="card_desc">
                Manage salaries, taxes, ensure accurate payments and adherence for seamless payroll management.
                </p>
            
                    <p className="link">
                    Learn more
                    <Image
                    className="sm_arrow"
                    src={ArrowBlue}
                    alt="learn more"
                /> 
                    </p>
                
            </div>
            <div className="card ser_6">
                <Image
                className="service_img"
                src={GstIcon}
                alt="Goods & Service Tax"
                /> 
                <h3 className="card_title">GST Return</h3>
                <p className="card_desc">
                All-in-one cloud-based GST toolkit simplifies your GST return filing experience
                </p>
           
                    <p className="link">
                    Learn more
                    <Image
                    className="sm_arrow"
                    src={ArrowBlue}
                    alt="learn more"
                /> 
                    </p>
               
            </div>
        </div>

        </div>
      
    </section>
  )
}

export default ServicesGridCards