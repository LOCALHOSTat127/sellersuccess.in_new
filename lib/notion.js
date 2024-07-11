import 'server-only';
import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
export const notion = new Client({
  auth: 'secret_PCdsvC4JbkbMevssvDrG87mIsxmi9c1WAFd7lunW7vU',
});

const databaseId =  '65a1fc2857684feaa54b9d8fcfd269a7';


// Fetch all blogs
export async function fetchAllBlogs() {
    const response = await notion.databases.query({
      database_id:databaseId,
      filter: {
            property: "status",
            select: {
              equals: "Live",
            },
      },
    });
  
    return response.results;
  }
  
  // Fetch single blog by slug
  export async function fetchBlogBySlug(slug) {
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
          {
            property: 'slug',
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    });
  
    return response.results[0];
  }
  

  // Fetch children of a block
export async function fetchBlockChildren(blockId) {
    const response = await notion.blocks.children.list({
      block_id: blockId,
    });
  
    return response.results;
  }
  

  // Fetch most recent 5 blogs
export async function fetchRecentBlogs() {
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
    page_size: 3,
  });

  return response.results;
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
  const response = await notion.users.retrieve({
    user_id: userId,
  });

  return response;
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


export function createSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/-+/g, '-');     // Replace multiple hyphens with a single hyphen
}
