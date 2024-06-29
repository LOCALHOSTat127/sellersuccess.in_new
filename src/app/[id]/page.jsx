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




// export async function getPageData(pageID) {
//   // Fetch data based on the slug parameter
//   const filePath = path.join(process.cwd(), 'data', 'pages', `${pageID}.json`);
//   const fileContents = fs.readFileSync(filePath, 'utf8');
//   const pageData = JSON.parse(fileContents);
//   return pageData;
// }

const TEXT_CONFIG = {
  isBG : false,
  head : "How to register Partnership Firm?",
  subhead : "To register a partnership firm in India, you need to follow these steps",
  points : [
      {
          index : 1,
          head : "Choose a Name",
          subhead : "Choose a unique name for your partnership firm. Ensure that the name is not already in use and does not violate any trademarks."
      },
      {
          index : 2,
          head : "Draft a Partnership Deed",
          subhead : "Draft a partnership deed that outlines the terms and conditions of the partnership, including the names and addresses of partners, profit-sharing ratios, capital contributions, rights, and responsibilities, etc."
      },
      {
          index : 3,
          head : "Notarized Partnership Deed",
          subhead : "Once the partnership deed is drafted, it needs to be printed on a stamp paper of appropriate value and signed by all partners in the presence of a notary public. Notarization of the deed helps in providing legal validity."
      },
      {
          index : 4,
          head : "Obtain PAN and TAN",
          subhead : "Apply for PAN and TAN for the partnership firm from the Income Tax Department. PAN is required for opening a bank account and for various tax-related purposes, while TAN is necessary for deducting and remitting taxes."
      },
      {
          index : 5,
          head : "Register with Registrar of Firms",
          subhead : "While registration of partnership firms is optional, it is advisable to register with the Registrar of Firms in the state where the partnership is situated. The registrar will verify the documents and enter the details in the Register of Firms. Once registered, a Certificate of Registration will be issued."
      },
      {
          index :6,
          head : "Open a Bank Account",
          subhead : "Use the Certificate of Registration obtained from the Registrar of Firms to open a bank account in the name of the partnership firm. A partnership bank account is necessary for carrying out business transactions."
      },
      {
        index :7,
        head : "Obtain GST Registration",
        subhead : "If the annual turnover of the partnership firm exceeds the threshold limit prescribed under the Goods and Services Tax (GST) Act, obtain GST registration."
    },
      {
        index :8,
        head : "Open a Bank Account",
        subhead : "Use the Certificate of Registration obtained from the Registrar of Firms to open a bank account in the name of the partnership firm. A partnership bank account is necessary for carrying out business transactions."
    },
    {
      index :9,
      head : "Other Regulatory Requirements ",
      subhead : "Depending on the nature of the business, you may need to obtain licenses, permits, or registrations from other regulatory authorities as per applicable laws and regulations."
    },
      {
        index :10,
        head : "Compliance with Income Tax",
        subhead : "File income tax returns for the partnership firm and partners as per the provisions of the Income Tax Act, 1961."
    },
    {
      index :11,
      head : "Maintain Records",
      subhead : "Maintain proper accounting records, books of accounts, and other financial documents as required by law."
    },

  ]
}


const DynamicStaticPage = async ({params }) => {
  return (  
    <div className="dynamic_page">
      <QuickContact isShort={false}/>
      <PageTextArea/>
      <TwoColBox />
      <GirdBoxes/>
      <Documents/>
      <Steps/>
      <GridPoints TEXT_CONFIG={TEXT_CONFIG}/>
      <Faq/>
      <Reviews/>
      <Blogs/>    
    </div>
  );
}



export default  DynamicStaticPage;