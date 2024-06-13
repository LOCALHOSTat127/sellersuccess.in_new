import Image from "next/image"

import OneSvg from "../../../public/assets/svg/1.svg";
import TwoSvg from "../../../public/assets/svg/2.svg";
import ThreeSvg from "../../../public/assets/svg/3.svg";
import  FourSvg from "../../../public/assets/svg/4.svg";
import FiveSvg from "../../../public/assets/svg/5.svg";
import SixSvg from "../../../public/assets/svg/6.svg";

import "../../Styles/Small_Modules/module.about.scss";

const Aboutus = () => {
  return (
    <section className="about_us">
        <div className="text_area">
            <h5>Why choose sellersuccess over anybody?</h5>
            <p>
            Expertise, personalized service, comprehensive solutions, and exceptional support. Trust us for peace of mind and value for money.
            </p>
        </div>
        <div className="points">
            <div className="point">
                <p className="desc">
                Our team comprises seasoned professionals with years of experience in tax law, accounting principles, and financial management, ensuring accurate and reliable services.
                </p>
                <span>
                    <Image
                        src={OneSvg}
                        alt="one"
                    />
                    <p>Industry Expertise</p>
                </span>
            </div>
            <div className="point ">
                <p className="desc">
                From tax preparation and filing to bookkeeping, payroll management, and financial planning, we offer a full suite of services to cover all aspects of your financial needs.
                </p>
                <span>
                    <Image
                        src={TwoSvg}
                        alt="one"
                    />
                    <p>Comprehensive Services</p>
                </span>
            </div>
            <div className="point nlv">
                <p className="desc">
                We believe in transparent communication and pricing, providing clear explanations of our services and fees so that clients can make informed decisions about their finances.
                </p>
                <span>
                    <Image
                        src={ThreeSvg}
                        alt="one"
                    />
                    <p>Transparencye</p>
                </span>
            </div>
            <div className="point nlh">
                <p className="desc">
                Apply for PAN and TAN for the partnership firm from the Income Tax Department. PAN is required for opening a bank account and for various tax-related purposes, while TAN is necessary for deducting and remitting taxes.
                </p>
                <span>
                    <Image
                        src={FourSvg}
                        alt="one"
                    />
                    <p>Proven Track Record</p>
                </span>
            </div>
            <div className="point nlh ">
                <p className="desc">
                We stay abreast of the latest developments in tax laws, regulations, and accounting practices, ensuring that our clients benefit from the most up-to-date expertise and insights.
                </p>
                <span>
                    <Image
                        src={FiveSvg}
                        alt="one"
                    />
                    <p>Continued Educatione</p>
                </span>
            </div>
            <div className="point nlh nlv">
                <p className="desc">
                We offer exceptional value for money, delivering high-quality services at competitive rates. With our expertise and personalized approach, you can trust that every dollar spent with us will be an investment in your financial success.
                </p>
                <span>
                    <Image
                        src={SixSvg}
                        alt="one"
                    />
                    <p>Value for Money</p>
                </span>
            </div>  
        </div>
    </section>
  )
}

export default Aboutus