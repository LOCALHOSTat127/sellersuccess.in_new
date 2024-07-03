"use client"
import "../../Styles/Small_Modules/module.footer.scss";
import Image from "next/image";

import Logo from "../../../public/assets/svg/logo.svg";
import SubmitArrow from "../../../public/assets/svg/arrow_curved_right_white.svg";
import MailBlue from "../../../public/assets/svg/blue_mail.svg";
import FbIcon from "../../../public/assets/svg/fb_svg.svg";
import MailIcon from "../../../public/assets/svg/grey_mail.svg";
import IgIcon from "../../../public/assets/svg/instagram_svg.svg";
import LiIcon from "../../../public/assets/svg/linkedin_svg.svg";
import WbIcon from "../../../public/assets/svg/wb_blue.svg";
import YtIcon from "../../../public/assets/svg/yt_svg.svg";



// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// // Fix for default marker icon issue
// import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';


// // const coords = [51.505, -0.09];
// // // Merge leaflet options to fix marker icon issue
// // if (typeof window !== "undefined") {
// //     L.Icon.Default.mergeOptions({
// //       iconRetinaUrl: markerIcon2x,
// //       iconUrl: markerIcon,
// //       shadowUrl: markerShadow,
// //     });
// //   }




const Footer = () => {
  return (
    <footer className="footer">
        <div className="wrapper">
            <div className="first_floor">
                <div className="left">
                    <Image
                    src={Logo}
                    alt="SellerSuccess.in"
                    id="logo"
                    />
                    <p className="website_description">
                    Elevate your financial journey with Seller Success: Your Marketplace for Seamless Accounting Solutions!” Services Offered: Bookkeeping GST Services GST Registration Private Limited company incorporation Payroll Management.
                    </p>
                </div>
                <div className="news_letter">
                    <span>
                    <h6>Subscribe to our Weakly Newsletter!</h6>
                    <p>Get latest update in the world on GST & Income TAX!.</p>
                    </span>
                    <div className="form_box">
                        <div>
                        <Image
                        src={MailIcon}
                        />
                        <input type="text" placeholder="youremail@gmail.com"/>
                        </div>
                        <button id="submit">
                            Submit
                            <Image
                            className="icon"
                            src={SubmitArrow}
                            />
                            </button>
                    </div>
                </div>
            </div>
            <div className="second_floor">
                <div className="links">
                    <p>Be AN ENTREPRENEUR</p>
                    <ul>
                        <li>Private Company Registration</li>
                        <li>Public Company Registration</li>
                        <li>Partnership Firm Registration</li>
                        <li>Limited Liabilities Partnership</li>
                        <li>One Person Company Registration</li>
                    </ul>
                </div>
                <div className="links">
                    <p>Be AN ENTREPRENEUR</p>
                    <ul>
                        <li>Private Company Registration</li>
                        <li>Public Company Registration</li>
                        <li>Partnership Firm Registration</li>
                        <li>Limited Liabilities Partnership</li>
                        <li>One Person Company Registration</li>
                    </ul>
                </div>
                <div className="links">
                    <p>Be AN ENTREPRENEUR</p>
                    <ul>
                        <li>Private Company Registration</li>
                        <li>Public Company Registration</li>
                        <li>Partnership Firm Registration</li>
                        <li>Limited Liabilities Partnership</li>
                        <li>One Person Company Registration</li>
                    </ul>
                </div>
                <div className="links">
                    <p>Be AN ENTREPRENEUR</p>
                    <ul>
                        <li>Private Company Registration</li>
                        <li>Public Company Registration</li>
                        <li>Partnership Firm Registration</li>
                        <li>Limited Liabilities Partnership</li>
                        <li>One Person Company Registration</li>
                    </ul>
                </div>
            </div>
            <div className="third_floor">
                    {/* <MapContainer center={coords} zoom={33} style={{ height: "100%", width: "100%",maxWidth : "600px",borderRadius : "16px", border : "none",outline : "none" }}>
                        <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={coords}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                </MapContainer> */}
                    <div className="links_third_floor">
                    <div className="social_links links">
                        <p>LET’S CONNECT ONLINE</p>
                        <ul>
                            <li>
                                <Image
                                src={FbIcon}
                                />
                                @sellersuccess.fb</li>
                            <li>
                            <Image
                                src={YtIcon}
                                />
                                @sellersuccess.yt</li>
                            <li>
                            <Image
                                src={IgIcon}
                                />
                                @sellersuccess.ig</li>
                            <li>
                            <Image
                                src={LiIcon}
                                />
                                @sellersuccess.ind</li>
                        </ul>
                    </div>
                    <div className="contact_links links">
                        <p>contact US</p>
                        <ul>
                            <li>
                            <Image
                                src={WbIcon}
                                />
                                +91 7852099185</li>
                            <li>
                            <Image
                                src={WbIcon}
                                />
                                +91 9685635263</li>
                            <li>
                            <Image
                                src={MailBlue}
                                />
                                sellersuccess.business@gmail.com</li>
                        </ul>
                    </div>
                    </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer