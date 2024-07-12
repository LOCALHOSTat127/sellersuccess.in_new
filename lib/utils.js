import { notion,fetchBlockChildren, fetchBlogById, fetchUserDetails } from "./notion";
export  function formatDate(dateString) {
    // Parse the input date string
    const date = new Date(dateString);
    
    // Define an array of month names
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    // Extract the day, month, and year
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    // Construct the formatted date string
    return `${day} ${month} ${year}`;
  }






export async function generateBlogContent(blogID) {
    let blogData = null;
    const BLOG_CONTENT_GENERATED = {
      blog_info : null,
      html : null
    }

    if (blogID) {
      blogData = await fetchBlogById(blogID);
    }
  
  
    if (blogData) {
      BLOG_CONTENT_GENERATED.blog_info = {
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
          keywords: blogData.properties.Keywords.rich_text.map((kword) => kword.plain_text),
        },
        author: {
          author_id: blogData.created_by.id,
          name: "",
          profile: "",
          email: "",
        },
      };
  
      if (blogData.properties.Image.type === "files") {
        BLOG_CONTENT_GENERATED.blog_info.img.url = blogData.properties.Image.files[0].file.url;
        BLOG_CONTENT_GENERATED.blog_info.img.name = blogData.properties.Image.files[0].name;
      } else if (blogData.properties.Image.type === "external") {
        BLOG_CONTENT_GENERATED.blog_info.img.url = blogData.properties.Image.external.url;
        BLOG_CONTENT_GENERATED.blog_info.img.name = blogData.properties.Image.external.name;
      }
  
      const authorDetails = await fetchUserDetails( BLOG_CONTENT_GENERATED.blog_info.author.author_id);
      BLOG_CONTENT_GENERATED.blog_info.author = {
        author_id:  BLOG_CONTENT_GENERATED.blog_info.author.author_id,
        name: authorDetails.name,
        profile: authorDetails.avatar_url,
        email: authorDetails.person.email,
      };
    }
  
    const blocks = await fetchBlockChildren(blogID);
    BLOG_CONTENT_GENERATED.html = blocks;



    return BLOG_CONTENT_GENERATED;
  }

  export function createSlug(title) {

    if(title){
      return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/-+/g, '-');     // Replace multiple hyphens with a single hyphen      
    }else{
      return "";
    }
  
}


export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};