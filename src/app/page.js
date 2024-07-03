import "../Styles/Pages_Styles/module.home.scss";
import HeroSection from "@/Components/HeroSection/HeroSection";
import AboutPoints from "@/Components/AboutPoints/AboutPoints";
import ServicesGridCards from "@/Components/ServicesGridCards/ServicesGridCards";
import GridPoints from "@/Components/GridPoints/GridPoints";
import Registrations from "@/Components/Registrations/Registrations";
import WebDev from "@/Components/WebDev/WebDev";
import Blogs from "@/Components/Blogs/Blogs";
import Faq from "@/Components/Faq/Faq";
import Reviews from "@/Components/Reviews/Reviews";
export const metadata = {
  title: 'HOME PAGE',
  description: 'This is my home page',
}


const TEXT_CONFIG = {
    state : true,
    isBG: true,
    head: "Why choose sellersuccess over anybody?",
    sub_head: "Expertise, personalized service, comprehensive solutions, and exceptional support. Trust us for peace of mind and value for money.",
    list: [
      {
        index: 1,
        head: "Industry Expertise",
        subhead: "Our team comprises seasoned professionals with years of experience in tax law, accounting principles, and financial management, ensuring accurate and reliable services."
      },
      {
        index: 2,
        head: "Comprehensive Services",
        subhead: "From tax preparation and filing to bookkeeping, payroll management, and financial planning, we offer a full suite of services to cover all aspects of your financial needs."
      },
      {
        index: 3,
        head: "Transparency",
        subhead: "We believe in transparent communication and pricing, providing clear explanations of our services and fees so that clients can make informed decisions about their finances."
      },
      {
        index: 4,
        head: "Proven Track Record",
        subhead: "Apply for PAN and TAN for the partnership firm from the Income Tax Department. PAN is required for opening a bank account and for various tax-related purposes, while TAN is necessary for deducting and remitting taxes."
      },
      {
        index: 5,
        head: "Continued Education",
        subhead: "We stay abreast of the latest developments in tax laws, regulations, and accounting practices, ensuring that our clients benefit from the most up-to-date expertise and insights."
      },
      {
        index: 6,
        head: "Value for Money",
        subhead: "We offer exceptional value for money, delivering high-quality services at competitive rates. With our expertise and personalized approach, you can trust that every dollar spent with us will be an investment in your financial success."
      }
    ]
  };


const FAQS = {
    state : true,
    faqs : {
        left : [
            {
                question : "Who should file an ITR?",
                answer : "An individual whose annual income is more than the basic exemption limit of Rs 2.5 lakh should file an ITR. The basic exemption limit for senior citizens (60 years onwards and less than 80 years) is Rs 3 lakh, and for super senior citizens is Rs 5 lakh."
            },
            {
                question : "How can I claim deductions for tax saving?",
                answer : "You should file an income tax return to claim tax deductions for tax savings such as ELSS, PPF, NSC investments and for payments such as housing loan repayments, insurance premium and donations."
            },
            {
                question : "How do I check TDS details from my form 26AS?",
                answer : "You can check your Form 26AS from your e-filing login. ClearTax’s e-filing software auto-populates the TDS details from your Form 26AS in your income tax return."
            },
            {
                question : "How can I claim an income tax refund?",
                answer : "You can claim an income tax refund by e-filing your income tax return. An e-filing enables you to claim credit for excess TDS paid and a tax refund."
            },
            {
                question : "I receive my salary income after deduction of TDS. Am I required to file an income tax return?",
                answer : "You are required to file an income tax return once your annual income exceeds Rs 2.5 lakh. A deduction of TDS does not replace the requirement to file ITR. While e-filing your ITR, you should furnish the details of your annual income, claim deductions and credit for TDS deducted by your employer."
            },
        ],
        right : [
            {
                question : "How to e-verify my ITR?",
                answer : "You can e-verify your ITR within 120 days from the date of filing. You can e-verify using your net banking account or Aadhaar based OTP. A failure to e-verify your ITR can invalidate your ITR filing."
            },
            {
                question : "How to choose a suitable mutual fund for SIP?",
                answer : "You should not select a mutual fund for SIP only by considering the past performance of the fund and fund manager. To choose a suitable mutual fund, you also need to check if the fund’s investment objective is in line with your goals. You can also use our SIP calculator to estimate the return on your mutual fund investments."
            },
            {
                question : "How does sellersuccess help small businesses?",
                answer : "You can create professional invoices and other business documents easily on mobile app or computer with ClearOne invoicing software. SMEs can also send invoices and payment reminders to customers through WhatsApp and Email with a click of a button.."
            },
            {
                question : "How can I claim deductions for tax saving?",
                answer : "You should file an income tax return to claim tax deductions for tax savings such as ELSS, PPF, NSC investments and for payments such as housing loan repayments, insurance premium and donations."
            },
            
        ]
    }
}



const CONFIG = {
  head : "Discover Our Popular Services",
  subhead : "Check out our most popular services. We offer quality and expertise to meet your needs and exceed your expectations.",
  cards : [
    {
      card_image : "assets/Images/gst_black.png",
      card_title : "Private Limited Company Registration",
      card_description : "A Private Limited Company offers limited liability and legal protection to its shareholders. A Private Limited Company in India lies somewhere between a partnership firm and a widely owned public company. It can be registered with a minimum of two people. A person can be both a director and shareholder in a Private Limited Company.",
      card_link : "/"
  },
  {
      card_image : "assets/Images/trademark_black.png",
      card_title : "Limited Liability Partnership",
      card_description : "LLP stands for Limited Liability partnership. LLP is a mix of a traditional partnership, and a company as some of its features are similar to a traditional partnership and some matches with a company.",
      card_link : "/"
  },
  {
      card_image : "assets/Images/export_black.png",
      card_title : "Designated Partner under LLP",
      card_description : "Every LLP must have at least two Designated Partners who are natural persons and at least one of them shall be resident in India. The LLP deed specifies who are to be Designated Partners and the responsibility of doing all acts, things and matters as are required under the LLP Act vests with the Designated Partners and they are concerned with the overall administration of LLP. A Designated Partner can be removed in LLP or added in LLP by passing a resolution and filing relevant forms with the Registrar of Companies.",
      card_link : "/"
  },
  {
      card_image : "assets/Images/msme_black.png",
      card_title : "Surrender Director Identification Number",
      card_description : "Surrender of Director’s Identification Number becomes very important by those DIN holders who are neither Director in any Company nor Designated Partner in any LLP and also not intending to do so in near future. For surrendering DIN an application shall be made in Form DIR-5 by the DIN holder along with declaration that he has never been appointed as director in any company and the said DIN has never been used for filing of any document with any authority. ",
      card_link : "/"
  },
  {
      card_image : "assets/Images/digital_signature_black.png",
      card_title : "LLP Name Change",
      card_description : "During the course of business, LLP may required to change name to depict the new activities adopted by LLP or to reflect the new brand developed in the market. In both the cases, LLP can change name subject to provision of LLP regulations and LLP Agreement.",
      card_link : "/"
  },
 
  ]
}

const CONFIG_2 = {
  head : "Business Registrations of all types.",
  subhead : "From essential registrations like GST, income tax, MSME, EIC, ESIC to acquiring specific tax numbers, we simplify the process for you.",
  cards : [
    {
      card_image : "assets/Images/gst_black.png",
      card_title : "GST Registration and modification",
      card_description : "Every Business is required to get their GST Registration within 30 days of Business Incorporation in India. GST Registration is needed when the turnover is more than INR 40 lakhs or INR 20 lakhs in Special category states or If the business supplies goods intra-state or Provides goods and services online.",
      card_link : "/"
  },
  {
      card_image : "assets/Images/trademark_black.png",
      card_title : "Trademark/wordmrak Registration",
      card_description : "A Trademark registration protects your brand and provides you with the tools to prevent someone using similar signs and riding on the back of your business. Trademark (symbolizing a mark in trade) means a mark capable of being represented graphically and which is capable of distinguishing..",
      card_link : "/"
  },
  {
      card_image : "assets/Images/export_black.png",
      card_title : "Import Export License Registration",
      card_description : "If a Private Limited Company wishes to engage in import or export activities, it is mandatory to obtain an IEC code. The code serves as a mandatory requirement for customs clearance for goods entering or leaving the country.",
      card_link : "/"
  },
  {
      card_image : "assets/Images/msme_black.png",
      card_title : "MSME/Udyog aadhar registration",
      card_description : "MSME registration beneficial for business at it provides a range of benefits such as eligibility for capital investment subsidies, lower rates of interest,  tax subsidies, power tariff subsidies, and other support. You may also avail our e-Xpress...",
      card_link : "/"
  },
  {
      card_image : "assets/Images/digital_signature_black.png",
      card_title : "Digital Signature",
      card_description : "A Digital Signature certificate (DSC) is the equivalent of a physical signature in an electronic format, as it establishes the identity of the sender of an electronic document on the Internet. It comes in the form of a USB E-Token, wherein the Digital Signature Certificate is stored and can be...",
      card_link : "/"
  },
  {
      card_image : "assets/Images/pancard_black.png",
      card_title : "Business PAN Card",
      card_description : "All you need to know Permanent Account Number (PAN) is a ten-digit alphanumeric number, for eg. AAAAA0000A, issued in the form of a laminated card, by the Indian Income Tax Department, to any “person” who applies for it or to whom the department allows the number without an application.",
      card_link : "/"
  },  {
      card_image : "assets/Images/msme_black.png",
      card_title : "MSME/Udyog aadhar registration",
      card_description : "MSME registration beneficial for business at it provides a range of benefits such as eligibility for capital investment subsidies, lower rates of interest,  tax subsidies, power tariff subsidies, and other support. You may also avail our e-Xpress...",
      card_link : "/"
  },
  {
      card_image : "assets/Images/digital_signature_black.png",
      card_title : "Digital Signature",
      card_description : "A Digital Signature certificate (DSC) is the equivalent of a physical signature in an electronic format, as it establishes the identity of the sender of an electronic document on the Internet. It comes in the form of a USB E-Token, wherein the Digital Signature Certificate is stored and can be...",
      card_link : "/"
  },
  {
      card_image : "assets/Images/pancard_black.png",
      card_title : "Business PAN Card",
      card_description : "All you need to know Permanent Account Number (PAN) is a ten-digit alphanumeric number, for eg. AAAAA0000A, issued in the form of a laminated card, by the Indian Income Tax Department, to any “person” who applies for it or to whom the department allows the number without an application.",
      card_link : "/"
  }
  ]
}


export default function Home() {
  return (
    <>
      
      <section className="home_page_main">
      <HeroSection/>
      <AboutPoints/>
      <ServicesGridCards/>
      <GridPoints CONFIG={TEXT_CONFIG} />
      <Registrations GC={{cols:3}} CONFIG={CONFIG_2}/>
      <WebDev/>
      <Registrations GC={{cols:2}} CONFIG={CONFIG} />
      <Reviews/>
      <Blogs/>
      <Faq CONFIG={FAQS}/>
      </section>
    </>
  );
}
