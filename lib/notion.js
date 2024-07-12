import 'server-only';
import { Client } from "@notionhq/client";


export const notion = new Client({
  auth: 'secret_PCdsvC4JbkbMevssvDrG87mIsxmi9c1WAFd7lunW7vU',
});

const databaseId =  '65a1fc2857684feaa54b9d8fcfd269a7';

  

  // Fetch children of a block
export async function fetchBlockChildren(blockId) {
  try {
    const response = await notion.blocks.children.list({
      block_id: blockId,
    });

    return response.results;
  } catch (error) {
      return null;
  }

  }
  


  // Fetch most recent 5 blogs
export async function fetchRecentBlogs(blog_count) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: 'status',
            select: {
              equals: 'Live',
            },
          },
        ],
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
      page_size: blog_count,
    });
  
    return response.results;
  
  } catch (error) {
      return null;    
  }

}


export async function fetchBlogById(blogID){
  try {
   const response = await notion.pages.retrieve({
     page_id: blogID,
   });
   return response;
  } catch (error) {
   return null;
  }
 }



// Fetch blogs related to tags
export async function fetchBlogsByTag(tag) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'Tags',
          multi_select: {
            contains: tag,
          },
        },
        {
          property: 'Status',
          select: {
            equals: 'Published',
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  return response.results;
}


// Fetch user details
export async function fetchUserDetails(userId) {
 try {
  const response = await notion.users.retrieve({
    user_id: userId,
  });

  return response;
 } catch (error) {
    return null;
 }
}




// Function to perform a search in Notion
export async function fetchBySearchText(query) {
  try {
    const response = await notion.search({
      query: query,
      filter: {
        value: 'page',
        property: 'object'
      },
      sort: {
        direction: 'ascending', 
        timestamp: 'last_edited_time', 
      },
    });

    return response.results;
  } catch (error) {
    return null;
  }
}