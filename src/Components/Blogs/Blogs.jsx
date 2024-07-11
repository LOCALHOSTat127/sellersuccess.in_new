import Link from "next/link";
import "../../Styles/Small_Modules/module.blogs.scss";
import { FetchRecentBlogsCards_ } from "../../../lib/cms_api";







const Blogs = async() => {

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

      const cards_ = await FetchRecentBlogsCards_();
    
  
  return (
    <section className="blogs_section">
        <div className="wrapper">
        <div className="text_area">
        <h6>blogs - Recent Articles</h6>
        <p>Explore our concise yet insightful articles covering taxation, accounting, and business compliance.</p>
        </div>
        <>
    {
        cards_?.cards &&

        <div 
        className={`blogs_slider slider`}>
    {
        cards_.cards.map((blog,index) => (
            <Link href={`/blog/${blog.seo.slug}/?id=${blog.id}`}>
            <div 
            key={index}
            className="blog_card">
                <div className="img_">
                <img
                src={blog.img.url}
                alt={blog.img.name} 
                className="blog_img" 
                />
                </div>
            
            <div className="info_">

                <span className="tags">
                {blog.category}
                </span>
            <div className="blog_meta">
                <h3 className="blog_title">
                    {truncateText(blog.title, 60)}
                </h3>
                <p className="blog_description">
                    {truncateText(blog.description, 120)}
                </p>
                </div>

                <div className="meta_info">
                <div className="author">
                    <div className="auther_img">
                    <img
                    alt={blog.auther.name}
                    src={blog.auther.profile}
                    />
                    </div>
                    <span>
                    <p className="author_name">{blog.auther.name}</p>
                    <p className="readingtime">
                    {blog.date}
                    </p>
                    </span>
                </div>
                </div>
            </div>
            </div>
            </Link>
        ))
    }
    </div>
    }

  </>
        </div>
    </section>
  )
}

export default Blogs