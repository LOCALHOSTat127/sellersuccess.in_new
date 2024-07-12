import { generateBlogContent } from "../../../../lib/utils";
import { fetchBlogById } from "../../../../lib/notion";
import "../../../Styles/Pages_Styles/module.contact.scss";
import DynamicHtmlArea from "@/Components/BlogPageComponents/DynamicHtmlArea";



export async function generateMetadata({ params, searchParams }) {
  const blogID = searchParams.id;
  let blogData = null;

  if (blogID) {
    blogData = await fetchBlogById(blogID);
  }
  // Prepare metadata object
  const meta_info_obj = {
    title: blogData ? blogData.properties.Name.title[0].plain_text : "Not Found",
    description: blogData ? blogData.properties.Description.rich_text[0].plain_text : "Page Not Found!",
    keywords: blogData ? blogData.properties.Keywords.rich_text.map(kword => kword.plain_text).join(', ') : "",
    author: blogData ? blogData.created_by.name : "Unknown Author",
    openGraph: {
      title: blogData ? blogData.properties.Name.title[0].plain_text : "Not Found",
      description: blogData ? blogData.properties.Description.rich_text[0].plain_text : "Page Not Found!",
      url: blogData ? `https://yourwebsite.com/blog/${params.blogID}?id=${searchParams.id}` : "",
      siteName: 'Your Website Name',
      locale: 'en_US',
      type: 'article',
      image: blogData ? (blogData.properties.Image.type === "files" ? blogData.properties.Image.files[0].file.url : blogData.properties.Image.external.url) : "",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@yourtwitterhandle',
      title: blogData ? blogData.properties.Name.title[0].plain_text : "Not Found",
      description: blogData ? blogData.properties.Description.rich_text[0].plain_text : "Page Not Found!",
      image: blogData ? (blogData.properties.Image.type === "files" ? blogData.properties.Image.files[0].file.url : blogData.properties.Image.external.url) : "",
    }
  };

  return meta_info_obj;
}


export default async function BlogMaster({ searchParams }) {

  const blogID = searchParams.id;
  const BLOG = await generateBlogContent(blogID);

  return (
    <>
    {(BLOG.blog_info === null || BLOG.html === null) ?
    <p>NOT FOUND</p>
    :  
      <DynamicHtmlArea BLOG={BLOG}/>
    }
    </>
  );
}
