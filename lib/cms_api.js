import { fetchUserDetails,notion,fetchRecentBlogs} from './notion';
import {createSlug} from "../lib/utils";

export const FetchRecentBlogsCards_  = async (blog_count) =>{
    const RESPONSE = {
           cards : [],
            status: "",
            ERR : null
    }

    try {
        // fetching blogs...
        const RAW_DATA = await fetchRecentBlogs(blog_count);
        
        // valading data...
        if(!RAW_DATA){
            throw new Error("Error While Fetching Blogs.");
        }

        // mapping out cards...
        RAW_DATA.forEach( (blog,index) =>{
            const blog_card = {
                index : index,
                id: blog.id,
                title: blog.properties.Name.title[0].plain_text,
                date: blog.properties.Date.date.start,
                description: blog.properties.Description.rich_text[0].plain_text, 
                category: blog.properties.Category.rich_text[0].plain_text, 
                img : {
                    name : "",
                    url : ""
                },
                seo:{
                    slug : createSlug(blog.properties.Name.title[0].plain_text),
                    keywords : blog.properties.Keywords.rich_text.forEach((kword,index) => kword.plain_text)
                },
                
                auther : {
                    auther_id : blog.created_by.id,
                    name: "", 
                    profile :  "", 
                    email : "" 
                }
            }

            if(blog.properties.Image.type == "files"){
                blog_card.img.url = blog.properties.Image.files[0].file.url;
                blog_card.img.name = blog.properties.Image.files[0].name;
            }else if(blog.properties.Image.type == "external"){
                blog_card.img.url = imageProperty.external.url;
                blog_card.img.name = blog.properties.Image.external.name;
            }

            RESPONSE.cards.push(blog_card);
            RESPONSE.status = "OK";
        });

        const authers = await Promise.all(RESPONSE.cards.map(async (blog, index) => {
            const authorDetails = await fetchUserDetails(blog.auther.auther_id);
            return authorDetails;
        }))


        const final_cards = RESPONSE.cards.map((blog,index) =>{
            return{
                ...blog,
                auther :{
                    auther_id : blog.auther.auther_id,
                    name: authers[index].name, 
                    profile :  authers[index].avatar_url, 
                    email : authers[index].person.email
                } 
                    
            }
        })

        RESPONSE.cards = final_cards;
        return RESPONSE;   
    } catch (error) {
        return  RESPONSE;
    }
}
