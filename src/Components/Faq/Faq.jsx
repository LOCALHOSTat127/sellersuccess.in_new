"use client"
import AddIcon from "../../../public/assets/svg/add.svg";
import Image from "next/image";
import "../../Styles/Small_Modules/module.faq.scss";


const GRID_CONFIG = {
    col : 2,
    gap : 34
}

const Faq = ({CONFIG}) => {

    const handleOpenClose = (e) => {
        const left = document.getElementById("left_faqs").children;
        const right = document.getElementById("right_faqs").children;
        
        const targetBox = e.currentTarget;

        if (targetBox.classList.contains("active")) {
            targetBox.classList.remove("active");
            return;
        }

        for (let i = 0; i < left.length; i++) {
            left[i].classList.remove('active');
        }
        for (let i = 0; i < right.length; i++) {
            right[i].classList.remove('active');
        }
        
        targetBox.classList.add("active");
    }

    return (
        <section className="faqs_section">
           <div className="wrapper">
           <div className="text_area">
                <h6>FAQs</h6>
                <p>Get Answers to your most asked question.</p>
            </div>
            <div 
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${GRID_CONFIG.col}, 1fr)`,
                    gap: `${GRID_CONFIG.gap}px`
                }}
                className="faqs"
            >
                <div className="left faqs_list_outer"
                id="left_faqs"
                >
                {CONFIG.faqs.left.map((faq, index) => (
                    <div  
                        onClick={handleOpenClose}
                        key={index} className="faq"
                    >
                        <div className="faq_q">
                            <h2>{faq.question}</h2>
                            <Image className="openFaq" src={AddIcon} alt="Expand" />
                        </div>
                        <p className="answer">{faq.answer}</p>
                        <div className="overlay"></div>
                    </div>
                ))}
                </div>
                <div className="right faqs_list_outer"
                 id="right_faqs"
                >
                {CONFIG.faqs.right.map((faq, index) => (
                    <div  
                        onClick={handleOpenClose}
                        key={index} className="faq"
                    >
                        <div className="faq_q">
                            <h2>{faq.question}</h2>
                            <Image className="openFaq" src={AddIcon} alt="Expand" />
                        </div>
                        <p className="answer">{faq.answer}</p>
                        <div className="overlay"></div>
                    </div>
                ))}
                </div>
            </div>
           </div>
        </section>
    )
}

export default Faq;