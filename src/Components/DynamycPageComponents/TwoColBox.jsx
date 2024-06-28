import "../../Styles/Small_Modules/modules.tcb.scss";

const TwoColBox = () => {
  return (
    <section className="column_">
       <div className="wapper">
        <div className="left container">
                <p>Advantages : </p>
                <ul>
                    <li>
                        <span>Ease of Formation : </span>
                        Partnership firms are relatively easy and inexpensive to form compared to companies
                    </li>
                    <li>
                        <span>Pooling of Resources : </span>
                        Partners can pool their resources, skills, and expertise, enabling the firm to benefit from their collective efforts.
                    </li>
                    <li>
                        <span>Flexibility : </span>
                        Partnership firms offer flexibility in management and decision-making, as partners have the freedom to run the business according to their agreement.
                    </li>
                    <li>
                        <span>Tax Benefits : </span>
                        Partnership firms are taxed as a separate entity, but the income is taxed at the individual partner’s tax rates, which may be advantageous in certain situations.
                    </li>
                    <li>
                        <span>Complementary Skills : </span>
                        Partners with different skills and expertise can complement each other, leading to better decision-making and problem-solving.
                    </li>   
                </ul>
            </div>
            <div className="right container">
            <p>Disadvantages : </p>
                <ul>
                    <li>
                        <span>Unlimited Liability : </span>
                        Partners have unlimited liability, meaning they are personally liable for the debts and obligations of the firm.
                    </li>
                    <li>
                        <span>Conflict Among Partners : </span>
                        Differences in opinion or conflicts among partners can arise, leading to disagreements and potentially affecting the firm’s operations.
                    </li>
                    <li>
                        <span>Limited Capital : </span>
                        Partnership firms may face limitations in raising capital compared to companies, as partners’ contributions are usually limited.
                    </li>
                    <li>
                        <span>Limited Life : </span>
                        Partnership firms may have a limited life, as they are dissolved upon the death, retirement, or insolvency of a partner unless otherwise specified in the partnership deed.
                    </li>
                    <li>
                        <span>Lack of Public Trust : </span>
                        Partnership firms may lack the public trust and credibility associated with larger corporate entities.
                    </li>
                </ul>
            </div>
       </div>
    </section>
  )
}

export default TwoColBox