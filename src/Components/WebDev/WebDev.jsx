import Image from "next/image"
import "../../Styles/Small_Modules/module.webdev.scss";
import ThinkingGirl from "../../../public/assets/svg/website_dev_section_img.svg";
import Tick from "../../../public/assets/svg/small_tick.svg";
import PhoneIcon from "../../../public/assets/svg/phone_black.svg";

import CloudLogo from "../../../public/assets/Images/cloudflare_logo.png";
import MongoLogo from "../../../public/assets/Images/mongo_db_logo.png";
import NodeLogo from "../../../public/assets/Images/node_js_logo.png";
import PythonLogo from "../../../public/assets/Images/python_logo.png";
import ReactLogo from "../../../public/assets/Images/react_logo.png";

const BulletPoints = ["E-commerce website","GYM Website","Custom business website","Static Website","Personal portfolio"]
const Logos = [CloudLogo,MongoLogo,NodeLogo,CloudLogo,MongoLogo];
const WebDev = () => {  
  return (
    <section className="website_dev_service">
        <div className="wrapper">
        <h4 className="main_text">
        Get a profession website design.
        </h4>
        <div className="card_content">
            <div className="left">
                <ul className="tick_points">
                    {BulletPoints.map((point,index) =>(
                           <li key={index} className="point">
                           <Image
                           alt="Tick Icon"
                           src={Tick}
                           />
                           <p>
                           {point}
                           </p>
                       </li>
                    ))}
                </ul>

                <h5 className="descr">
                Enhance your online presence with a custom, visually appealing, and user-friendly website. Our expert designers create responsive sites that boost your brand's credibility and attract more customers.
                </h5>
                <button className="cta">
                    <span>
                    Talk to an expert
                    <p className="contact_num">
                    +91 7852099185
                    </p>
                    </span>
                    <Image
                    alt="phone"
                    src={PhoneIcon}
                    />
                </button>
            </div>
            <div className="right">
                <Image
                    src={ThinkingGirl}
                    alt="Website Development Sevice"
                />
            </div>
        </div>
        <div className="bottom">
            <p>
            Letest cutting-edge <br/> tech used.
            </p>
            <div className="logos">
                {
                    Logos.map((logo,index) =>(
                        <Image
                        key={index}
                        src={logo}
                        alt="logo"
                        />
                    ))
                }
            </div>
        </div>
        </div>
    </section>
  )
}

export default WebDev