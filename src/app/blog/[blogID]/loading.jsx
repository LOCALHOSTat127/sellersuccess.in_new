import "../../../Styles/Pages_Styles/module.contact.scss"
import AlarmOnOutlinedIcon from "@mui/icons-material/AlarmOnOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";

const loading = () => {
  return (
    <div className="blog_page_server_">
          <div className="dark_banner">
            <div className="banner_wrapper">
              <div 
              style={{
                padding : "40px 60px"
              }}
              className="infobar">
                <div style={{
                  alignItems : "flex-start"
                }} className="block auther ">
                 <div 
                 style={{
                  width : "42px",
                  height : "42px",
                  borderRadius : "50%"
                 }} className="skleten_round skleten">

                 </div>
                  <div>
                    <p className="block_name">WRITTEN BY</p>
                    <p className="block_text skleten skleten-text"></p>
                  </div>
                </div>
                <div 
                style={{
                  alignItems : "normal"
                }}
                className="block posted_on">
                  <EditCalendarOutlinedIcon
                    className="auther_profile"
                    sx={{
                      color: "white",
                      width: "24px",
                      height: "auto",
                    }}
                  />
                  <div>
                    <p className="block_name">POSTED ON</p>
                    <p className="block_text skleten skleten-text"></p>
                  </div>
                </div>
                <div className="block time_span">
                  <AlarmOnOutlinedIcon
                    className="auther_profile"
                    sx={{
                      color: "white",
                      width: "24px",
                      height: "auto",
                    }}
                  />
                  <div>
                    <p className="block_name">TIME SPAN</p>
                    <p className="block_text skleten skleten-text"></p>
                  </div>
                </div>
              </div>

              <div className="blog_meta">
              <div style={{
                      width : "100%",
                      display: "flex",
                      flexDirection: 'column',
                      gap: '26px'
                }} className="title">
              <p className="block_text skleten skleten-text title"></p>
              <p className="block_text skleten skleten-text title last"></p>
              </div>
                
                <div style={{
                      width : "100%",
                      display: "flex",
                      flexDirection: 'column',
                      gap: '8px'
                }} className="des">
                      <p className="block_text skleten skleten-text"></p>
                      <p className="block_text skleten skleten-text"></p>
                      <p className="block_text skleten skleten-text"></p>
                      <p className="block_text skleten skleten-text"></p>
                      <p className="block_text skleten skleten-text last"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div style={{
              background : "#efefef",
              width : "100%",
              borderRadius : "16px",
              overflow : "hidden"
            }}>
            <div style={{
              width : "100%",
              minHeight : "450px"
            }} className="blog_banner_img skleten">
            </div>
            </div>
            <div
              className="prose blog_html_area">
                 <div style={{
                      width: "100%",
                      maxWidth: "1124px",
                      display: "flex",
                      flexDirection: 'column',
                      gap: '8px'
                }} className="des">
                      <p  className="block_text skleten skleten-text"></p>
                      <p className="block_text skleten skleten-text"></p>
                      <p className="block_text skleten skleten-text"></p>
                      <p className="block_text skleten skleten-text"></p>
                      <p className="block_text skleten skleten-text last"></p>
                </div>

              </div>
          </div>
        </div>
  )
}

export default loading