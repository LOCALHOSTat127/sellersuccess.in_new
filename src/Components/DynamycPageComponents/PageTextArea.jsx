import Image from "next/image";
import "../../Styles/Small_Modules/module.pagetextarea.scss";
import DateSvg from "../../../public/assets/svg/calender_sm_grey.svg";
import ClockSvg from "../../../public/assets/svg/clock_sm_grey.svg";


const PageTextArea = () => {
  return (
    <section className="page_area">
        <div className="wapper">
            <div className="meta_text">
            <h1 className="page_main_title">
            How to Register a private limited company?
            </h1>
            <div className="info">
                <span>
                    <Image
                    src={DateSvg}
                    alt="Page last updated"
                    />
                    <p>6 minutes reading </p>
                </span>
                <span>
                    <Image
                    src={ClockSvg}
                    alt="Time to read"
                    />
                    <p>5 May 2024</p>
                </span>
            </div>
            </div>
            <p className="page_main_description">
            A partnership firm in India is a type of business structure formed by two or more individuals (partners) who agree to carry on a business together and share the profits and losses according to the terms of the partnership deed. Here’s an overview of partnership firms in India:
            </p>
            <img src="/assets/Images/page_img.png" alt="" srcset="" id="page_image" />

            <section className="dynamic_html_fluyed">
                <div className="list_container">
                    <p>Formation :</p>
                    <ul>
                        <li>Drafting and registering a partnership deed, which outlines the terms and conditions of the partnership.</li>
                        <li>Including details such as the names and addresses of the partners, their contributions, profit-sharing ratios, rights, and duties, etc.</li>
                    </ul>
                </div>
                <div className="list_container">
                    <p>Characteristics : </p>
                    <ul>
                        <li>
                            <span>Minimum Partners :</span>
                            A partnership firm must have a minimum of two partners. There can be a maximum of 100 partners in any kind of business except for banking business, where the maximum number of partners is 10.
                        </li>
                        <li>
                            <span>Agreement :</span>
                            Partnership is based on an agreement between partners known as the partnership deed.
                        </li>
                        <li>
                            <span>Liability :</span>
                            Partners have unlimited liability, meaning their personal assets may be used to settle the firm’s debts.
                        </li>
                        <li>
                            <span>Profit Sharing :</span>
                            Profits and losses are shared among the partners as per the partnership deed.   
                        </li>
                        <li>
                            <span>Management :</span>
                            Partners jointly manage the affairs of the firm, unless specified otherwise in the partnership deed.
                        </li>
                        <li>
                            <span>Duration :</span>
                            A partnership firm can be for a fixed term or at-will (partnership at-will).  
                        </li>
                    </ul>
                </div>
                
            </section>
        </div>
    </section>
  )
}

export default PageTextArea