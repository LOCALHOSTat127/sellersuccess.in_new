import "../../Styles/Small_Modules/module.about.scss";




const GridPoints = ({CONFIG}) => {
    
  return (
    <section className="about_us" 
  
    >
       <div className="wrapper">
       <div className="text_area">
            <h5> 
                {CONFIG.head}
            </h5>
            <p>
                {CONFIG.sub_head}
            </p>
        </div>
        <div className="points">
            {
                CONFIG.list.map((point,index) =>(
                    <div 
                    className={`point ${point.index % 3 === 0 ? "nlv" : null} ${index   >= (CONFIG.list.length -  ((CONFIG.list.length % 3 ) || 3)) ? "nlh" : ""}`} 
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