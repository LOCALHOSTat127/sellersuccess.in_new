import Image from "next/image";
import "../../Styles/Small_Modules/module.herosection.scss";
import CallIcon from "../../../public/assets/svg/phone_white.svg";
import arrowDown from "../../../public/assets/svg/arrow_down_blue.svg";
import HeroImage from "../../../public/assets/svg/hero_image.svg";

const HeroSection = () => {
  return (
   <section className="herosection">
        <div className="left">
            <span className="heading">
            <h1>
            <span>Simplify your</span><br/> Taxation & <br/>Compliance.</h1>
            {/* <h2 className="subheading">One-Stop Solutions for  Income Tax Returns,<br/>GST, and TDS Compliance.</h2> */}
            </span>
            <h3  className="pera">Our services include Goods and Service Tax returns and registration, income tax returns and compliance, and company and LLP registration. Trust our professional team to deliver efficient results with a personal touch.
            </h3>
            <div className="call_to_actions">
                <button className="cta filled  cta_btn">
                    Talk to an Expert
                    <Image
                    className="sm_icon"
                    alt="Talk To an expert" 
                    src={CallIcon}
                    />
                    </button>
                <button className="cta nonfill cta_btn">
                    Learn More
                    <Image
                    className="sm_icon"
                    alt="Learn more" 
                    src={arrowDown}
                    />
                </button>
            </div>

          
        </div>
        <div className="right">
            <Image
            id="heroImage"
            alt="G"
            src={HeroImage}
            />
        </div>
   </section>
  )
}

export default HeroSection