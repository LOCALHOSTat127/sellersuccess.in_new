"use client"
import AddIcon from "../../../public/assets/svg/add.svg";
import Image from "next/image";
import "../../Styles/Small_Modules/module.faq.scss";

const FAQS = {
    left : [
        {
            question : "Who should file an ITR?",
            answer : "An individual whose annual income is more than the basic exemption limit of Rs 2.5 lakh should file an ITR. The basic exemption limit for senior citizens (60 years onwards and less than 80 years) is Rs 3 lakh, and for super senior citizens is Rs 5 lakh."
        },
        {
            question : "How can I claim deductions for tax saving?",
            answer : "You should file an income tax return to claim tax deductions for tax savings such as ELSS, PPF, NSC investments and for payments such as housing loan repayments, insurance premium and donations."
        },
        {
            question : "How do I check TDS details from my form 26AS?",
            answer : "You can check your Form 26AS from your e-filing login. ClearTax’s e-filing software auto-populates the TDS details from your Form 26AS in your income tax return."
        },
        {
            question : "How can I claim an income tax refund?",
            answer : "You can claim an income tax refund by e-filing your income tax return. An e-filing enables you to claim credit for excess TDS paid and a tax refund."
        },
        {
            question : "I receive my salary income after deduction of TDS. Am I required to file an income tax return?",
            answer : "You are required to file an income tax return once your annual income exceeds Rs 2.5 lakh. A deduction of TDS does not replace the requirement to file ITR. While e-filing your ITR, you should furnish the details of your annual income, claim deductions and credit for TDS deducted by your employer."
        },
    ],
    right : [
        {
            question : "How to e-verify my ITR?",
            answer : "You can e-verify your ITR within 120 days from the date of filing. You can e-verify using your net banking account or Aadhaar based OTP. A failure to e-verify your ITR can invalidate your ITR filing."
        },
        {
            question : "How to choose a suitable mutual fund for SIP?",
            answer : "You should not select a mutual fund for SIP only by considering the past performance of the fund and fund manager. To choose a suitable mutual fund, you also need to check if the fund’s investment objective is in line with your goals. You can also use our SIP calculator to estimate the return on your mutual fund investments."
        },
        {
            question : "How does sellersuccess help small businesses?",
            answer : "You can create professional invoices and other business documents easily on mobile app or computer with ClearOne invoicing software. SMEs can also send invoices and payment reminders to customers through WhatsApp and Email with a click of a button.."
        },
        {
            question : "How can I claim deductions for tax saving?",
            answer : "You should file an income tax return to claim tax deductions for tax savings such as ELSS, PPF, NSC investments and for payments such as housing loan repayments, insurance premium and donations."
        },
        
    ]
}

const GRID_CONFIG = {
    col : 2,
    gap : 34
}

const Faq = () => {

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
                {FAQS.left.map((faq, index) => (
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
                {FAQS.right.map((faq, index) => (
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
        </section>
    )
}

export default Faq;