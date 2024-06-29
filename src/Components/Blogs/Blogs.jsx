"use client"
import { useState,useRef } from "react";
import "../../Styles/Small_Modules/module.blogs.scss";
import Image from "next/image";
import ClockIcon from "../../../public/assets/svg/calender_sm_grey.svg";
import  DateIcon from "../../../public/assets/svg/clock_sm_grey.svg";




const blogs = [
    {
        blog_title : "How to cancel gst registration?",
        blog_img : "assets/Images/blog_image.png",
        blog_description : "closing down you business. you should also get your gst registration cancelled.",
        blog_link : "/",
        read_time : "6 minutes reading",
        date_published : "5 May 2024"
    },
    {
        blog_title : "How to cancel gst registration?",
        blog_img : "assets/Images/blog_image.png",
        blog_description : "closing down you business. you should also get your gst registration cancelled.",
        blog_link : "/",
        read_time : "6 minutes reading",
        date_published : "5 May 2024"
    },
    {
        blog_title : "How to cancel gst registration?",
        blog_img : "assets/Images/blog_image.png",
        blog_description : "closing down you business. you should also get your gst registration cancelled.",
        blog_link : "/",
        read_time : "6 minutes reading",
        date_published : "5 May 2024"
    },
    {
        blog_title : "How to cancel gst registration?",
        blog_img : "assets/Images/blog_image.png",
        blog_description : "closing down you business. you should also get your gst registration cancelled.",
        blog_link : "/",
        read_time : "6 minutes reading",
        date_published : "5 May 2024"
    },
    {
        blog_title : "How to cancel gst registration?",
        blog_img : "assets/Images/blog_image.png",
        blog_description : "closing down you business. you should also get your gst registration cancelled.",
        blog_link : "/",
        read_time : "6 minutes reading",
        date_published : "5 May 2024"
    }
]


const Blogs = () => {
    const sliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const handleMouseDown = (e) => {
      setIsDown(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    };
  
    const handleMouseLeaveOrUp = (e) => {
        setIsDown(false);
    };
  
    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX)*1.5; // Adjust scroll speed for smooth natural scroll
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };
  
  
  return (
    <section className="blogs_section">
        <div className="text_n_filter">
           <div>
           <h6>blogs</h6>
           <p>Explore our concise yet insightful articles covering taxation, accounting, and business compliance. Stay informed, optimize your tax strategy, and ensure compliance with ease.</p>
           </div>

           <button id="filterBlogs">Featured Blogs </button>
        </div>
        <div 
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeaveOrUp}
              onMouseUp={handleMouseLeaveOrUp}
              onMouseMove={handleMouseMove}
        className={`blogs_slider slider ${isDown && 'grabbing'}`}>
            {
                blogs.map((blog,index) => (
                    <div className="blog_card" key={index}>
                <img src="assets/Images/blog_image.png" alt=""   className="blog_img" srcset="" />
                <div className="meta_info">
                    <span className="reading">
                        <Image
                            alt="reading time"
                            src={ClockIcon}
                        />
                        <p>{blog.read_time}</p>
                    </span>
                    <span className="date">
                    <Image
                            alt="Publish date"
                            src={DateIcon}
                        />
                        <p>{blog.date_published}</p>
                    </span>
                </div>
                <div className="blog_meta">
                <h3 className="blog_title">
               {blog.blog_title}
                </h3>
                <p className="blog_description">
                    {blog.blog_description}
                </p>
                </div>
                <p  className="read_more link">
                    Read More
                </p>
            </div>
                ))
            }
        </div>
    </section>
  )
}

export default Blogs