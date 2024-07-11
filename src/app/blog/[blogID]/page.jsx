// pages/contact.js
import { NotionRenderer } from "@notion-render/client";
import formatDate from "../../../../lib/utils";
import {
  fetchBlockChildren,
  notion,
  fetchBlogById,
  fetchUserDetails,
} from "../../../../lib/notion";
import "../../../Styles/Pages_Styles/module.contact.scss";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import AlarmOnOutlinedIcon from '@mui/icons-material/AlarmOnOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
const BlogMaster = async ({ searchParams }) => {
  const blogID = searchParams.id;
  let blog_card = null;
  let blogData = null;
  if (blogID) {
    blogData = await fetchBlogById(blogID);
  }

  if (blogData) {
    blog_card = {
      id: blogData.id,
      title: blogData.properties.Name.title[0].plain_text,
      date: formatDate(blogData.properties.Date.date.start),
      description: blogData.properties.Description.rich_text[0].plain_text,
      category: blogData.properties.Category.rich_text[0].plain_text,
      img: {
        name: "",
        url: "",
      },
      seo: {
        keywords: blogData.properties.Keywords.rich_text.forEach(
          (kword, index) => kword.plain_text
        ),
      },

      auther: {
        auther_id: blogData.created_by.id,
        name: "",
        profile: "",
        email: "",
      },
    };

    if (blogData.properties.Image.type == "files") {
      blog_card.img.url = blogData.properties.Image.files[0].file.url;
      blog_card.img.name = blogData.properties.Image.files[0].name;
    } else if (blogData.properties.Image.type == "external") {
      blog_card.img.url = imageProperty.external.url;
      blog_card.img.name = blogData.properties.Image.external.name;
    }

    const authorDetails = await fetchUserDetails(blog_card.auther.auther_id);
    blog_card.auther = {
      auther_id: blog_card.auther.auther_id,
      name: authorDetails.name,
      profile: authorDetails.avatar_url,
      email: authorDetails.person.email,
    };
  }

  const blocks = await fetchBlockChildren(blogID);
  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));
  let htmlContent = await renderer.render(...blocks);
  let processedHtmlContent = htmlContent.replace(
    /<img/g,
    '<img class="rounded-xl"'
  );

  return (
    <>
      {blogData !== null ? (
        <div className="blog_page_server_">
          <div className="dark_banner">
            <div className="banner_wrapper">
                <div className="infobar">
                    <div className="block auther">
                        <img 
                         className="auther_profile"
                         src={blog_card.auther.profile} 
                         alt={blog_card.auther.name}
                         />
                         <div>
                            <p className="block_name">
                                WRITTEN BY
                            </p>
                            <p className="block_text">
                                {blog_card.auther.name}
                            </p>
                         </div>
                    </div>
                    <div className="block posted_on">
                    <EditCalendarOutlinedIcon  
                         className="auther_profile"
                         sx={{
                            color : "white",
                            width : "24px",
                            height : "auto"
                           }}
                     
                         />
                         <div>
                            <p className="block_name">
                                POSTED ON
                            </p>
                            <p className="block_text">
                                
                                {blog_card.date}
                            </p>
                         </div>
                    </div>
                    <div className="block time_span">
                    <AlarmOnOutlinedIcon  
                         className="auther_profile"
                         sx={{
                            color : "white",
                            width : "24px",
                            height : "auto"
                           }}
                     
                         />
                         <div>
                            <p className="block_name">
                                TIME SPAN
                            </p>
                            <p className="block_text">
                                6 Min Reading
                            </p>
                         </div>
                    </div>
                </div>

                <div className="blog_meta">
                    <h1 className="blog_title">
                        {blog_card.title}
                    </h1>
                    <p className="blog_description">
                        {blog_card.description}
                    </p>
                </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="blog_banner_img">
            <img 
            loading="eager"
            src={blog_card.img.url} 
            alt={blog_card.img.name}
             className="blog_hero_img"
             />
            </div>
            <div
              className="prose  blog_html_area"
              dangerouslySetInnerHTML={{ __html: processedHtmlContent }}
            />
          </div>
        </div>
      ) : (
        <p>No Blog Found!</p>
      )}
    </>
  );
};

export default BlogMaster;
