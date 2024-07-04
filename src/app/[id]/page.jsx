import path from 'path';
import fs from 'fs';

import "../../Styles/Pages_Styles/dynamic_page.scss";
import QuickContact from '@/Components/DynamycPageComponents/QuickContact';
import PageTextArea from "@/Components/DynamycPageComponents/PageTextArea";
import TwoColBox from "@/Components/DynamycPageComponents/TwoColBox";
import GirdBoxes from "@/Components/DynamycPageComponents/GirdBoxes";
import Documents from "@/Components/DynamycPageComponents/Documents";
import GridPoints from "@/Components/GridPoints/GridPoints";
import Steps from "@/Components/DynamycPageComponents/Steps";
import Faq from "@/Components/Faq/Faq";
import Reviews from "@/Components/Reviews/Reviews";
import Blogs from "@/Components/Blogs/Blogs";
import Pricing from "@/Components/DynamycPageComponents/Pricing";
import NotFound from '../NotFound';


export async function getPageData(pageID) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'pages', `pg_${pageID}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const pageData = JSON.parse(fileContents);

    return pageData;
  } catch (error) {
      return null
  }
}



export async function generateMetadata({searchParams}) {
  // read route params
  const id = searchParams.id
  let meta_info_obj;
  try{
    const filePath = path.join(process.cwd(), 'data', 'pages', `pg_${id}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const pageData = JSON.parse(fileContents);
    meta_info_obj = {
      title: pageData.mata_info.title,
      description : pageData.mata_info.description,
    }
  }catch{
    meta_info_obj = {
      title: "Not Found",
      description : "Page Not Found!",
    }
  }

  return meta_info_obj;
}


const DynamicStaticPage = async ({searchParams}) => {
  const PAGE_DATA = await getPageData(searchParams.id);
  return (  
    <div className="dynamic_page">
      <QuickContact isShort={false}/>
      
      {PAGE_DATA  ?  
        <>
           <PageTextArea META_INFO={PAGE_DATA.mata_info} CONTENT={PAGE_DATA.content}/>
         {
          PAGE_DATA.settings.isTwoCol.state &&
          <TwoColBox CONFIG={PAGE_DATA.settings.isTwoCol} />
          }
          {
            PAGE_DATA.settings.isnCol.state &&
            <GirdBoxes CONFIG={PAGE_DATA.settings.isnCol} />
          }
          {
            PAGE_DATA.settings.isGridPints.state &&
            <GridPoints CONFIG={PAGE_DATA.settings.isGridPints} />
          }
          {
            PAGE_DATA.settings.isDocuments.state &&
            <Documents CONFIG={PAGE_DATA.settings.isDocuments} />
          }
          {
            PAGE_DATA.settings.isSteps.state &&
            <Steps CONFIG={PAGE_DATA.settings.isSteps} />
          }
          {
            PAGE_DATA.settings.isPricing.state &&
            <Pricing />
          }
          {
            PAGE_DATA.settings.isFAQ.state &&
            <Faq  CONFIG={PAGE_DATA.settings.isFAQ}/>
          }
          {
            PAGE_DATA.settings.isBlogs &&
            <Blogs />
          }
                {
            PAGE_DATA.settings.isReviews &&
            <Reviews />
          }
        </>
      : 
      <NotFound/>
      }
      
     
    </div>
  );
}



export default  DynamicStaticPage;