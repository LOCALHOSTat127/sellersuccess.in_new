
import "../../Styles/Small_Modules/modules_gridbox.scss";


const cards = [
    {
        index : 1,
        head : "GST Registration",
        desc : "Every Private Limited Company is required to get their GST Registration within 30 days of Business Incorporation in India. GST Registration is needed when the turnover is more than INR 40 lakhs or INR 20 lakhs in Special category states or If the business supplies goods intra-state or Provides goods and services online."
    },
    {
        index : 2,
        head : "Book Keeping",
        desc : "Every Pvt Ltd Co. shall maintain proper books of accounts which shall represent an accurate and fair view of the state of affairs of the company. Accounting is necessary for the statutory audit, Annual filing and IT return filing which is mandatory. These books of accounts shall be audited by the auditor appointed by the company."
    },
    {
        index : 3,
        head : "GST  returns",
        desc : "Once a Private Limited Company gets registered under GST, it becomes necessary to file GST returns for Private Limited Company. As filing of GST returns is mandatory for all the registered Taxpayers including companies. GST returns can be filed monthly, quarterly or yearly depending upon the types of GST returns form you are filing."
    },
    , 
    {
        index :4,
        head : "Statutory Audit",
        desc : "Every Private Limited Company registered under the Companies Act irrespective of its sales turnover or nature of business or capital must have its book of accounts audited each financial year. Thus, the Board of Directors of a Private Limited Company are required by law to appoint an Auditor within 30 days of incorporation and thereafter conduct an audit of its financial statements each financial year."
    },
   
    {
        index : 5,
        head : "ROC Annual Filing ",
        desc : "Every Private Limited Company registered under the Companies Act irrespective of its sales turnover or nature of business or capital must have its book of accounts audited each financial year. Thus, the Board of Directors of a Private Limited Company are required by law to appoint an Auditor within 30 days of incorporation and thereafter conduct an audit of its financial statements each financial year."
    },
    {
        index : 6,
        head : "Income Tax Audit",
        desc : "The requirement for an income tax audit of a Private Limited Company typically arises when the company’s annual turnover or profits exceed certain thresholds specified by tax authorities.Turnover Threshold: If the company’s total turnover from business exceeds INR 1 crore (for financial year 2021-22, subject to change as per amendments). Profit Threshold: If the company’s net profit before tax exceeds 8% of its turnover or INR 6 crores, whichever is higher."
    },
    {
        index : 7,
        head : "Trademark registration",
        desc : "Trademark registration is a crucial step for protecting a company’s brand identity and intellectual property. While it’s not legally mandatory to register a trademark for a Private Limited Company, doing so offers significant advantages and protections for the company’s brand identity and intellectual property. Registering a Private Limited Company with a name does not provide complete protection to the name or brand name. Ultimate protection for a business name is secured only by Trademark Registration of same. By trademark registration, you may get the ownership of your Pvt Ltd Co. name or brand name or logo etc."
    },
    {
        index : 8,
        head : "IEC registration",
        desc : "If a Private Limited Company wishes to engage in import or export activities, it is mandatory to obtain an IEC code. The code serves as a mandatory requirement for customs clearance for goods entering or leaving the country."
    },
   
    {
        index : 9,
        head : "Statutory Registers",
        desc : "The company must maintain statutory registers such as the Register of Members (shareholders), Register of Directors, Register of Charges, etc., and keep them updated."
    },
];



const GRID_CONFIG = {
    cols : 3,
    gap : 60
}


const GirdBoxes = () => {

  return (
    <section className="grid_">
        <div className="wrapper">
            <div className="text_section">
                        <h5>Compliance Required For Partnership Firm</h5>
                        <p>There are plenty of compliance which are required to be fulfilled by an Partnership firm.</p>
            </div>
            <div 
            style={{
                display : 'grid',
                gridTemplateColumns : `${`repeat(${GRID_CONFIG.cols},1fr)`}`,
                gridTemplateRows : `${`repeat(${cards.length / GRID_CONFIG.cols},1fr)`}`,
                gap : `${GRID_CONFIG.gap}px`,
            }}
            className="grid_area">
                {
                      cards.map((card,index) => (
                        <div className="card_">
                            <div className="card_number">
                                <img src={`${`/assets/svg/1_.svg`}`} alt="" srcset="" />
                            </div>
                           <div className="content">
                           <h6>{card.head}</h6>
                           <p>{card.desc}</p>
                           </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default GirdBoxes