import "../../Styles/Pages_Styles/dynamic_page.scss";
import QuickContact from '@/Components/DynamycPageComponents/QuickContact';
import PageTextArea from "@/Components/DynamycPageComponents/PageTextArea";
import TwoColBox from "@/Components/DynamycPageComponents/TwoColBox";

// export async function getPageData(pageID) {
//   // Fetch data based on the slug parameter
//   const filePath = path.join(process.cwd(), 'data', 'pages', `${pageID}.json`);
//   const fileContents = fs.readFileSync(filePath, 'utf8');
//   const pageData = JSON.parse(fileContents);
//   return pageData;
// }




const DynamicStaticPage = async ({params }) => {
  return (
    <div className="dynamic_page">
      <QuickContact isShort={false}/>
      <PageTextArea/>
      <TwoColBox />
    </div>
  );
}



export default  DynamicStaticPage;