import "../../Styles/Small_Modules/modules.tcb.scss";

const TwoColBox = ({CONFIG}) => {
  return (
    <section className="column_">
       <div className="wapper">
        <div className="left container">
                <p>{CONFIG.content.left_col.head} : </p>
                <ul>
                    {
                        CONFIG.content.left_col.list.map((item,index) =>(
                            <li key={index}>
                                {item.title && 
                                    <span>{item.title} : </span>
                                }
                            {item.description}
                        </li>
                        ))  
                    }
                </ul>
            </div>
            <div className="right container">
            <p>{CONFIG.content.right_col.head} : </p>
                <ul>
                    {
                        CONFIG.content.right_col.list.map((item,index) =>(
                            <li key={index}>
                                {item.title && 
                                    <span>{item.title} : </span>
                                }
                            {item.description}
                        </li>
                        ))  
                    }
                </ul>
            </div>
       </div>
    </section>
  )
}

export default TwoColBox