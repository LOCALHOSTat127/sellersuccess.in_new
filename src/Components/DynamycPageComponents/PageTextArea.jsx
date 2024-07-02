import Image from "next/image";
import "../../Styles/Small_Modules/module.pagetextarea.scss";
import DateSvg from "../../../public/assets/svg/calender_sm_grey.svg";
import ClockSvg from "../../../public/assets/svg/clock_sm_grey.svg";


const PageTextArea = ({META_INFO,CONTENT}) => {
  return (
    <section className="page_area">
        <div className="wapper">
            <div className="meta_text">
            <h1 className="page_main_title">

            {META_INFO.title}
            </h1>
            <div className="info">
                <span>
                    <Image
                    src={DateSvg}
                    alt="Page last updated"
                    />
                    <p>{META_INFO.read_time} </p>
                </span>
                <span>
                    <Image
                    src={ClockSvg}
                    alt="Time to read"
                    />
                    <p>
                        {META_INFO.date_publish}
                    </p>
                </span>
            </div>
            </div>
            <p className="page_main_description">
                {META_INFO.description}
            </p>
            <img src={META_INFO.page_img} alt="" srcset="" id="page_image" />
            <div className="dynamic_html_fluyed" dangerouslySetInnerHTML={{ __html: CONTENT }} />
        </div>
    </section>
  )
}

export default PageTextArea