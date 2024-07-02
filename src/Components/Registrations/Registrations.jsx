import "../../Styles/Small_Modules/module.registrations.scss";

const GRID_CONFIG = {
    cols : 2,
    gap : 60
}


const Registrations = ({GC,CONFIG}) => {
    
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
          return text;
        }
        return text.substring(0, maxLength) + '...';
      };
  return (
    <section className="section_outer">
        <div className="text_section">
            <h4>{CONFIG.head}</h4>
            <p>{CONFIG.subhead}</p>
        </div>
        <div 
        style={{
            display : 'grid',
            gridTemplateColumns : `${`repeat(${GC.cols},1fr)`}`,
            gridTemplateRows : `${`repeat(${CONFIG.cards.length / GC.cols},1fr)`}`,
            gap : `${GRID_CONFIG.gap}px`,
        }}
        className="grid">
            {
                CONFIG.cards.map((card,index) => (
                  <div key={index} className="card">
                    <div className="image_outer">
                        <img
                        className="card_img"
                        src={card.card_image}
                        alt={card.alt || "image"}
                        />
                    </div>
                    <span>
                    <h3 className="card_title">
                            {card.card_title}
                        </h3>
                        <p className="card_desc">
                            {
                            truncateText(card.card_description,200)
                            }
                        </p>
                    </span>
                        <p className="cta_link">
                            Learn More
                        </p>
                  </div>
                ))
            }
        </div>
    </section>
  )
}

export default Registrations