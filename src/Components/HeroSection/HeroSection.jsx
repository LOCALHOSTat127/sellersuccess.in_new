import '../../Styles/Small_Modules/module.herosection.scss';
import Image from 'next/image';
import CallIcon from "../../../public/assets/svg/phone_white.svg";
import arrowDown from "../../../public/assets/svg/arrow_down_blue.svg";
import AlertDialog from "../DialogeBox/DiloagBox";
const AboutPoints = () => {
  return (
    <div className="hero_section_outer">
        <div className="wapper">

        <div className="hero_text">
        <span className="heading">
            <h1>
            <span>Simplify your</span><br/> Taxation & <br/>Compliance.</h1>
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
            <div className="hero_img">

                    <img src="/assets/Images/n1.jpg"  alt='success image' />
            </div>
          
        </div>
      
    
    </div>
  )
}

export default AboutPoints