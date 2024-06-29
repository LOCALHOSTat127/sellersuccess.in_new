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
      <Faq/> 
    </section>
  );
}
