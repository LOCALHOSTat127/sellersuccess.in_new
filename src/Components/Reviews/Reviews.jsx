"use client"
import Image from "next/image"
import { useState,useRef } from "react";
import "../../Styles/Small_Modules/module.reviews.scss";
import StarIcon from "../../../public/assets/svg/star.svg";

const REVIEWS = [
    {
        customer_img : 'assets/Images/review_girl.png',
        custmer_name : "Jenny Phillip",
        review : "I am glad to have taken the Payroll & Accounting Service at Sellersuccess.in they provide best and affordable service.",
        stars : 4.5,
    },
    {
        customer_img : 'assets/Images/review_girl.png',
        custmer_name : "Jenny Phillip",
        review : "I am glad to have taken the Payroll & Accounting Service at Sellersuccess.in they provide best and affordable service.",
        stars : 4.5,
    },
    {
        customer_img : 'assets/Images/review_girl.png',
        custmer_name : "Jenny Phillip",
        review : "I am glad to have taken the Payroll & Accounting Service at Sellersuccess.in they provide best and affordable service.",
        stars : 4.5,
    },
    {
        customer_img : 'assets/Images/review_girl.png',
        custmer_name : "Jenny Phillip",
        review : "I am glad to have taken the Payroll & Accounting Service at Sellersuccess.in they provide best and affordable service.",
        stars : 4.5,
    },
    
]
const Reviews = () => {
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
    <section className="reviews">
        <div className="text_area">
            <h6>Listen what our clients have to say.</h6>
            <p>Testimonials don’t lie,This is what our past & current clients said about the services we offer.</p>
        </div>
        <div 
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
        className={`reviews_slider slider ${isDown && 'grabbing'}`}>
            {
                REVIEWS.map((review,index) =>(
                    <div className="review_card">
                        <div className="img_name">
                            <img src={review.customer_img} alt={review.custmer_name}  className="review_image"/>
                            <p className="name">
                                {review.custmer_name}
                            </p>
                        </div>
                        <p className="review_text">
                            {review.review}
                        </p>
                        <div className="meta">
                            <div className="rating">
                               <span>
                               <Image
                                    src={StarIcon}
                                    alt="rating"
                                />
                                 <Image
                                    src={StarIcon}
                                    alt="rating"
                                />
                                 <Image
                                    src={StarIcon}
                                    alt="rating"
                                />
                                 <Image
                                    src={StarIcon}
                                    alt="rating"
                                />
                               </span>
                                <p className="rate_num">
                                    {review.stars}
                                </p>
                            </div>
                            <img src="assets/Images/gmb_verify.png" alt="google my business verified review" className="gmb_icon" />
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Reviews