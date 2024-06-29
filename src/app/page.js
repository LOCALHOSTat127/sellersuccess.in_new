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


const TEXT_CONFIG = {
  isBG : true,
  head : "Why choose sellersuccess over anybody?",
  subhead : "Expertise, personalized service, comprehensive solutions, and exceptional support. Trust us for peace of mind and value for money.",
  points : [
      {
          index : 1,
          head : "Industry Expertise",
          subhead : "Our team comprises seasoned professionals with years of experience in tax law, accounting principles, and financial management, ensuring accurate and reliable services."
      },
      {
          index : 2,
          head : "Comprehensive Services",
          subhead : "From tax preparation and filing to bookkeeping, payroll management, and financial planning, we offer a full suite of services to cover all aspects of your financial needs."
      },
      {
          index : 3,
          head : "Transparencye",
          subhead : "We believe in transparent communication and pricing, providing clear explanations of our services and fees so that clients can make informed decisions about their finances."
      },
      {
          index : 4,
          head : "Proven Track Record",
          subhead : "Apply for PAN and TAN for the partnership firm from the Income Tax Department. PAN is required for opening a bank account and for various tax-related purposes, while TAN is necessary for deducting and remitting taxes."
      },
      {
          index : 5,
          head : "Continued Educatione",
          subhead : "We stay abreast of the latest developments in tax laws, regulations, and accounting practices, ensuring that our clients benefit from the most up-to-date expertise and insights."
      },
      {
          index :6,
          head : "Value for Money",
          subhead : "We offer exceptional value for money, delivering high-quality services at competitive rates. With our expertise and personalized approach, you can trust that every dollar spent with us will be an investment in your financial success."
      }
  ]
}


const FAQS = {
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

export default function Home() {
  return (
    <section className="home_page_main">
      <HeroSection/>
      <AboutPoints/>
      <ServicesGridCards/>
      <GridPoints TEXT_CONFIG={TEXT_CONFIG}/>
      <Registrations/>
      <WebDev/>
      <Registrations/>
      <Blogs/>
      <Reviews/>
      <Faq faqs={FAQS}/>
    </section>
  );
}
