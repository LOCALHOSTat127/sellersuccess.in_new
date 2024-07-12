import { notion } from "../../../lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import AlarmOnOutlinedIcon from "@mui/icons-material/AlarmOnOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";

const DynamicHtmlArea = async ({ BLOG }) => {
  const renderer = new NotionRenderer({
    client: notion,
  });
  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));
  const htmlContent = await renderer.render(...BLOG.html);
  const processedHtmlContent = htmlContent.replace(
    /<img/g,
    '<img class="rounded-xl"'
  );
  return (
    <>
      <div className="blog_page_server_">
        <div className="dark_banner">
          <div className="banner_wrapper">
            <div className="infobar">
              <div className="block auther">
                <img
                  className="auther_profile"
                  src={BLOG.blog_info.author.profile}
                  alt={BLOG.blog_info.author.name}
                />
                <div>
                  <p className="block_name">WRITTEN BY</p>
                  <p className="block_text">{BLOG.blog_info.author.name}</p>
                </div>
              </div>
              <div className="block posted_on">
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
                  <p className="block_text">{BLOG.blog_info.date}</p>
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
                  <p className="block_text">6 Min Reading</p>
                </div>
              </div>
            </div>

            <div className="blog_meta">
              <h1 className="blog_title">{BLOG.blog_info.title}</h1>
              <p className="blog_description">{BLOG.blog_info.description}</p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="blog_banner_img">
            <img
              loading="eager"
              src={BLOG.blog_info.img.url}
              alt={BLOG.blog_info.img.name}
              className="blog_hero_img"
            />
          </div>
          <div
            className="prose blog_html_area"
            dangerouslySetInnerHTML={{ __html: processedHtmlContent }}
          />
        </div>
      </div>
    </>
  );
};

export default DynamicHtmlArea;
