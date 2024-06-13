import "../Styles/Pages_Styles/module.home.scss";
import Header from "@/Components/Header/Header";
import HeroSection from "@/Components/HeroSection/HeroSection";
import AboutPoints from "@/Components/AboutPoints/AboutPoints";
import ServicesGridCards from "@/Components/ServicesGridCards/ServicesGridCards";
import Aboutus from "@/Components/AboutUs/Aboutus";
export default function Home() {
  return (
    <section className="home_page_main">
      <Header/>
      <HeroSection/>
      <AboutPoints/>
      <ServicesGridCards/>
      <Aboutus/>
    </section>
  );
}
