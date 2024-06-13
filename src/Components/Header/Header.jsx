"use client"
import Image from 'next/image';
import { useState,useEffect } from 'react';
import '../../Styles/Small_Modules/module.header.scss';

import  fbLogo from  "../../../public/assets/svg/fb_svg.svg";
import  instagramLogo from  "../../../public/assets/svg/instagram_svg.svg";
import  youtubeLogo from  "../../../public/assets/svg/yt_svg.svg";
import  linkedinLogo from  "../../../public/assets/svg/linkedin_svg.svg";
import  Logo from  "../../../public/assets/svg/logo.svg";
import  SearchIcon from  "../../../public/assets/svg/search.svg";

// Social_meadi_icons_array
const socialMediaIcons = [
  {
    icon: fbLogo,
    alt_tag: 'Follow us on Facebook',
    className: 'facebook icon_sm'
  },
  {
    icon: instagramLogo,
    alt_tag: 'Follow us on Instagram',
    className: 'twitter icon_sm'
  },
  {
    icon: youtubeLogo,
    alt_tag: 'Follow us on YouTube',
    className: 'youtube icon_sm'
  },
  {
    icon: linkedinLogo,
    alt_tag: 'Follow us on LinkedIn',
    className: 'linkedin icon_sm'
  }
];



const Header = () => {
      const [show, setShow] = useState(false)
      const controlNavbar = () => {
          if (window.scrollY >= 250 ) {
              setShow(true)
          }else{
            setShow(false)
          }
      }

      useEffect(() => {
          window.addEventListener('scroll', controlNavbar)
          return () => {
              window.removeEventListener('scroll', controlNavbar)
          }
      }, [])


  return (
    <header className={`Navbar_main ${show && 'hide'}`}>
        <div  className="upper_navbar">
          <ul>
            {
              socialMediaIcons.map((icon,index) => (
                <li >
                <Image
                  priority
                  key={index}
                  src={icon.icon}
                  alt={icon.alt_tag}
                  className={`social__icon ${icon.className}`}
                />
              </li>
              ))
            }
          </ul>
          <p className="contact_item email">
            sellersuccess.business@gmail.com
          </p>
        </div>
        <div className="lower_navbar">
                <Image
                  priority
                  src={Logo}
                  id='header_logo'
                  alt="sellersuccess.in logo where success begins"
                />

                <nav className="nav_list">
                  <ul>
                    <li className="nav_link">Be an Entrepreneur</li>
                    <li className="nav_link">Accounting & Payroll</li>
                    <li className="nav_link">Registration & Compliances </li>
                    <li className="nav_link">More</li>
                  </ul>
                  <button id="blogs">
                    Blogs
                    <Image
                  priority
                  src={SearchIcon}
                  className='icon'
                  alt="search blogs"
                />
                  </button>
                </nav>
        </div>
    </header>
  )
}

export default Header