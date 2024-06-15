import "../Styles/Pages_Styles/module.home.scss";
import Header from "@/Components/Header/Header";
import HeroSection from "@/Components/HeroSection/HeroSection";
import AboutPoints from "@/Components/AboutPoints/AboutPoints";
import ServicesGridCards from "@/Components/ServicesGridCards/ServicesGridCards";
import Aboutus from "@/Components/AboutUs/Aboutus";
import Registrations from "@/Components/Registrations/Registrations";
import WebDev from "@/Components/WebDev/WebDev";
import Blogs from "@/Components/Blogs/Blogs";
import Faq from "@/Components/Faq/Faq";
import Reviews from "@/Components/Reviews/Reviews";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <section className="home_page_main">
      <Header/>
      <HeroSection/>
      <AboutPoints/>
      <ServicesGridCards/>
      <Aboutus/>
      <Registrations/>
      <WebDev/>
      <Blogs/>
      <Reviews/>
      <Faq/> 
      <Footer/>
    </section>
  );
}
