"use client"
import Image from 'next/image';

import "../../Styles/Pages_Styles/module.contact.scss";

import Icon1 from "../../../public/assets/svg/socialw1.svg";
import Icon2 from "../../../public/assets/svg/socialw2.svg";
import Icon3 from "../../../public/assets/svg/socialw3.svg";




const ContactUs = () => {
  return (
    <section className="page_outer">
        <div className="contact_page">
          <div className="img_bg">
          <div className="content_wrapper">
            <div className="left">
              <h3>
              Let’s connect
              </h3>
              <p>
              We'd love to hear from you! If you have any questions, suggestions, or feedback, please get in touch with us.
              </p>
            </div>
            <div className="social_icons">
              <Image
              className='ico'
              src={Icon1}
              />
              <Image
              src={Icon2}
              />
              <Image
              src={Icon3}
              />
              <Image
            
              />
            </div>
          </div>
          </div>
      </div>
      <div className="contact_outer">
        hi
      </div>
    </section>
  )
}

export default ContactUs