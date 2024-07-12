
import React from 'react'
import { fetchBySearchText } from '../../../lib/notion'
const page = async() => {
    function extractNotionId(url) {
        // Match the ID at the end of the URL using a regular expression
        const match = url.match(/(?:https:\/\/www\.notion\.so\/)([a-f0-9]{32})/i);
      
        // Check if a match was found and return the ID (group 1)
        if (match && match.length > 1) {
          return match[1];
        } else {
          // Handle cases where the URL format doesn't match
          console.error('Invalid Notion URL format:', url);
          return null;
        }
      }
  
    const data = await fetchBySearchText("Gst");
    if(data){
   
        data.forEach((d) =>{
            let url = d.url;
            let parts = url.split("-");
        console.log({
            title : d.url,
            id : parts[parts.length - 1]
        });
        })
    }
  return (
    <div>
        page
     

    </div>
  )
}

export default page