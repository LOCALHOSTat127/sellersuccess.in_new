import "../../Styles/Small_Modules/module.about.scss";




const GridPoints = ({TEXT_CONFIG}) => {
  return (
    <section className="about_us" 
    style={{
        background : `${TEXT_CONFIG.isBG === false ? 'white' : null}`
    }}
    >
       <div className="wrapper">
       <div className="text_area">
            <h5> 
                {TEXT_CONFIG.head}
            </h5>
            <p>
                {TEXT_CONFIG.subhead}
            </p>
        </div>
        <div className="points">
            {
                TEXT_CONFIG.points.map((point,index) =>(
                    <div 
                    className={`point ${point.index % 3 === 0 ? "nlv" : null} ${index   >= (TEXT_CONFIG.points.length -  ((TEXT_CONFIG.points.length % 3 ) || 3)) ? "nlh" : ""}`} 
                    id={index}
                    key={index}>
                        <p className="desc">
                            {point.subhead}
                        </p>
                        <span>
                            <img
                                src={`${`/assets/svg/${point.index}.svg`}`}
                                alt={point.head}
                            />
                            <p>{point.head}</p>
                        </span>
                    </div>
                ))
            }
        </div>
       </div>
    </section>
  )
}

export default GridPoints