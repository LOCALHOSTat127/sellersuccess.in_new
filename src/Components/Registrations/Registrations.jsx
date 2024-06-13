import "../../Styles/Small_Modules/module.registrations.scss";
import Image from "next/image";
import GstIcon from "../../../public/assets/Images/gst_black.png";
import TmIcon from "../../../public/assets/Images/trademark_black.png";
import ExportIcon from "../../../public/assets/Images/export_black.png";
import MsmeIcon from "../../../public/assets/Images/msme_black.png";
import DigitalSigIcon from "../../../public/assets/Images/digital_signature_black.png";
import PanIcon from "../../../public/assets/Images/pancard_black.png";

const cards = [
    {
        card_image : GstIcon,
        card_title : "GST Registration and modification",
        card_description : "Every Business is required to get their GST Registration within 30 days of Business Incorporation in India. GST Registration is needed when the turnover is more than INR 40 lakhs or INR 20 lakhs in Special category states or If the business supplies goods intra-state or Provides goods and services online.",
        card_link : "/"
    },
    {
        card_image : TmIcon,
        card_title : "Trademark/wordmrak Registration",
        card_description : "A Trademark registration protects your brand and provides you with the tools to prevent someone using similar signs and riding on the back of your business. Trademark (symbolizing a mark in trade) means a mark capable of being represented graphically and which is capable of distinguishing..",
        card_link : "/"
    },
    {
        card_image : ExportIcon,
        card_title : "Import Export License Registration",
        card_description : "If a Private Limited Company wishes to engage in import or export activities, it is mandatory to obtain an IEC code. The code serves as a mandatory requirement for customs clearance for goods entering or leaving the country.",
        card_link : "/"
    },
    {
        card_image : MsmeIcon,
        card_title : "MSME/Udyog aadhar registration",
        card_description : "MSME registration beneficial for business at it provides a range of benefits such as eligibility for capital investment subsidies, lower rates of interest,  tax subsidies, power tariff subsidies, and other support. You may also avail our e-Xpress...",
        card_link : "/"
    },
    {
        card_image : DigitalSigIcon,
        card_title : "Digital Signature",
        card_description : "A Digital Signature certificate (DSC) is the equivalent of a physical signature in an electronic format, as it establishes the identity of the sender of an electronic document on the Internet. It comes in the form of a USB E-Token, wherein the Digital Signature Certificate is stored and can be...",
        card_link : "/"
    },
    {
        card_image : PanIcon,
        card_title : "Business PAN Card",
        card_description : "All you need to know Permanent Account Number (PAN) is a ten-digit alphanumeric number, for eg. AAAAA0000A, issued in the form of a laminated card, by the Indian Income Tax Department, to any “person” who applies for it or to whom the department allows the number without an application.",
        card_link : "/"
    },
    {
        card_image : GstIcon,
        card_title : "GST Registration and modification",
        card_description : "Every Business is required to get their GST Registration within 30 days of Business Incorporation in India. GST Registration is needed when the turnover is more than INR 40 lakhs or INR 20 lakhs in Special category states or If the business supplies goods intra-state or Provides goods and services online.",
        card_link : "/"
    },
    {
        card_image : TmIcon,
        card_title : "Trademark/wordmrak Registration",
        card_description : "A Trademark registration protects your brand and provides you with the tools to prevent someone using similar signs and riding on the back of your business. Trademark (symbolizing a mark in trade) means a mark capable of being represented graphically and which is capable of distinguishing..",
        card_link : "/"
    },
    {
        card_image : ExportIcon,
        card_title : "Import Export License Registration",
        card_description : "If a Private Limited Company wishes to engage in import or export activities, it is mandatory to obtain an IEC code. The code serves as a mandatory requirement for customs clearance for goods entering or leaving the country.",
        card_link : "/"
    }
]

const GRID_CONFIG = {
    cols : 3,
    gap : 60
}


const Registrations = () => {
    
   
  return (
    <section className="section_outer">
        <div className="text_section">
            <h4>Business Registrations of all types.</h4>
            <p>From essential registrations like GST, income tax, MSME, EIC, ESIC to acquiring specific tax numbers, we simplify the process for you.</p>
        </div>
        <div 
        style={{
            display : 'grid',
            gridTemplateColumns : `${`repeat(${GRID_CONFIG.cols},1fr)`}`,
            gridTemplateRows : `${`repeat(${cards.length / GRID_CONFIG.cols},1fr)`}`,
            gap : `${GRID_CONFIG.gap}px`,
        }}
        className="grid">
            {
                cards.map((card,index) => (
                  <div className="card">
                    <div className="image_outer">
                        <Image
                        className="card_img"
                        src={card.card_image}
                        alt={card.alt || "image"}
                        />
                    </div>
                    <span>
                    <h3 className="card_title">
                            {card.card_title}
                        </h3>
                        <p className="card_desc">
                            {card.card_description}
                        </p>
                    </span>
                        <p className="cta_link">
                            Learn More
                        </p>
                  </div>
                ))
            }
        </div>
    </section>
  )
}

export default Registrations