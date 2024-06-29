import "../../Styles/Small_Modules/module.prices.scss";
import SendIcon from '@mui/icons-material/Send';

const KEY_FEATURES = [
  [
    "GST Registration",
    "PAN Card Registration",
    "MOA & AOA Drafting",
    "Company Registration",
  ],
  [
    "GST Registration",
    "PAN Card Registration",
    "MOA & AOA Drafting",
    "Company Registration",
    "DIN Creation & Activation",
    "Digital Signature",
    "PAN Card Registration",
    "MOA & AOA Drafting",
    "Company Registration",
    "DIN Creation & Activation",
    "Digital Signature"
  ],
  [
    "GST Registration",
    "PAN Card Registration",
    "MOA & AOA Drafting",
    "Company Registration",
  ]
]

const Pricing = () => {
  return (
   <div className="prices_">
      <div className="wrapper">
        <span className="text_area">
          <h6>Affordable Pricing for everybody.</h6>
          <p>You won’t get the services at this unbeatable price range anywhere in India. </p>
        </span>
        <div className="price_cards">
          <div className="card">
              <div className="card_price_info">
                <div className="tag">
                  <div className="dot"></div>
                  <p>Essential</p>
                </div>

                <div className="pricing_section">
                  <span className="pricing_upper">
                    <p className="original_pricing">
                      5000
                    </p>
                    <p className="dis_percent">
                    (-53%)
                    </p>
                  </span>
                    <span className="pricing_lower">
                      <p className="symbol">
                        ₹
                      </p>
                      <p className="current_price">
                      3999
                      </p>
                    </span>
                    <p className="info">
                    Plan inclusive of all charges
                    </p>
                </div>

              </div>

              <div className="features">
                <p>KEY FEATURES</p>
                <ul>
                 {
                  KEY_FEATURES[0].map((feature,index) =>(
                    <li key={index} className="feature">
                      <div>
                        <img src="/assets/svg/sm_tick.svg"  />
                      </div>
                      {feature}
                    </li>
                  ))
                 }
                </ul>
              </div>

              <div className="cta_">
                <p>BOOK THIS PACKAGE</p>
                <SendIcon/>
              </div>
          </div>
          
          <div className="card">
              <div className="card_price_info">
                <div className="tag">
                  <div className="dot"></div>
                  <p>Ultimate</p>
                </div>

                <div className="pricing_section">
                  <span className="pricing_upper">
                    <p className="original_pricing">
                    25662
                    </p>
                    <p className="dis_percent">
                    (-53%)
                    </p>
                  </span>
                    <span className="pricing_lower">
                      <p className="symbol">
                        ₹
                      </p>
                      <p className="current_price">
                      24000
                      </p>
                    </span>
                    <p className="info">
                    Plan inclusive of all charges
                    </p>
                </div>

              </div>

              <div className="features">
                <p>KEY FEATURES</p>
                <ul>
                 {
                  KEY_FEATURES[1].map((feature,index) =>(
                    <li key={index} className="feature">
                      <div>
                        <img src="/assets/svg/sm_tick.svg"  />
                      </div>
                      {feature}
                    </li>
                  ))
                 }
                </ul>
              </div>

              <div className="cta_">
                <p>BOOK THIS PACKAGE</p>
                <SendIcon/>
              </div>
          </div>

          <div className="card">
              <div className="card_price_info">
                <div className="tag">
                  <div className="dot"></div>
                  <p>Enhanced</p>
                </div>

                <div className="pricing_section">
                  <span className="pricing_upper">
                    <p className="original_pricing">
                    8900
                    </p>
                    <p className="dis_percent">
                    (-24%)
                    </p>
                  </span>
                    <span className="pricing_lower">
                      <p className="symbol">
                        ₹
                      </p>
                      <p className="current_price">
                      7900
                      </p>
                    </span>
                    <p className="info">
                    Plan inclusive of all charges
                    </p>
                </div>

              </div>

              <div className="features">
                <p>KEY FEATURES</p>
                <ul>
                 {
                  KEY_FEATURES[0].map((feature,index) =>(
                    <li key={index} className="feature">
                      <div>
                        <img src="/assets/svg/sm_tick.svg"  />
                      </div>
                      {feature}
                    </li>
                  ))
                 }
                </ul>
              </div>

              <div className="cta_">
                <p>BOOK THIS PACKAGE</p>
                <SendIcon/>
              </div>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Pricing