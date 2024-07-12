import "../../Styles/Small_Modules/module.blogs.scss";

import { FetchRecentBlogsCards_ } from "../../../lib/cms_api";
import BlogCards from "../BlogPageComponents/BlogCards";

const Blogs = async() => {
  const cards_ = await FetchRecentBlogsCards_(3);
  return (
    <section className="blogs_section">
        <div className="wrapper">
        <div className="text_area">
        <h6>blogs - Recent Articles</h6>
        <p>Explore our concise yet insightful articles covering taxation, accounting, and business compliance.</p>
        </div>
        <>
    {
       cards_.cards && 
       <BlogCards cards_={cards_}/>
    }

  </>
        </div>
    </section>
  )
}

export default Blogs