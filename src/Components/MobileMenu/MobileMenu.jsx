"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSpring, animated } from '@react-spring/web';
import Collapse from '@mui/material/Collapse';

import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';


import  fbLogo from  "../../../public/assets/svg/fb_svg.svg";
import  instagramLogo from  "../../../public/assets/svg/instagram_svg.svg";
import  youtubeLogo from  "../../../public/assets/svg/yt_svg.svg";
import  linkedinLogo from  "../../../public/assets/svg/linkedin_svg.svg";
import  Logo from  "../../../public/assets/svg/logo.svg";




// Social_meadi_icons_array
const socialMediaIcons = [
    {
      icon: fbLogo,
      alt_tag: 'Follow us on Facebook',
      className: 'facebook icon_sm'
    },
    {
      icon: instagramLogo,
      alt_tag: 'Follow us on Instagram',
      className: 'twitter icon_sm'
    },
    {
      icon: youtubeLogo,
      alt_tag: 'Follow us on YouTube',
      className: 'youtube icon_sm'
    },
    {
      icon: linkedinLogo,
      alt_tag: 'Follow us on LinkedIn',
      className: 'linkedin icon_sm'
    }
  ];
  




const MENU_ITEMS = [
    
        {
            isBold : true,
            id: 'entrepreneur',
            head : "Be an Entrepreneur",
            list : [],
            sub_list : [
                {
                    id : 'for-indian-entrepreneur',
                    subhead : "For Indian Entrepreneur",
                    sub_items : [
                        "Private Limited Comapny",
                        "Public Limited Company",
                        "Limited Libiality Partnership",
                        "Hindu Undevided Family",
                        "Partnership Firm",
                        "Public Limited Comapny",
                        "Sole Propirorship",
                        "One Person Company",
                        "E-commerce"
                    ]
                },
                {   
                    id : 'for-foreign-entrepreneur',
                    subhead : "For Foreign Entrepreneur",
                    sub_items : [
                        "Comapny Registration by Foreigner",
                        "Indian Subsidary",
                        ""
                    ]
                }
            ]
        },
        {
            isBold : true,
            id : 'registrations',
            head : "Registrations",
            list : [],
            sub_list : [
                {
                    id : 'gst-itr',
                    subhead : "GST & ITR",
                    sub_items : [
                        "GST Registraton",
                        "GST Modification",
                        "GST Refund",
                        "GST Health CheckUP",
                        "GST Returns",
                        "ITR Filling",
                        "Revised ITR"
                    ]
                },
                {
                    id : 'other-registration',
                    subhead : "Other Registrations",
                    sub_items : [
                        "PAN Card",
                        "TAX Number",
                        "Digital Signature",
                        "DIN Application",
                        "DIR-3 KYC",
                        "ESIC Registration",
                        "IEC Modification",
                        "IEC Registration",
                        "EPF",
                        "MSME Registration"
                    ]
                }
            ]
        },
        {
            isBold : true,
            id : 'returns',
            head : "Returns",
            list : [],
            sub_list : [
                {
                    id : 'gst-returns',
                    subhead : "GST Returns",
                    sub_items : [
                      "ST Returns",
                      "GST Refund"
                    ]
                },
                {
                    id : 'income-tax-return',
                    subhead : "Income Tex Return",
                    sub_items : [
                        "TDS Return",
                        "TDS on Property",
                        "ITR Filling",
                        "TDS Revised Revision"
                    ]
                },
                {
                    id : 'other-returns',
                    subhead : "Other Returns",
                    sub_items : [
                        "ESI Returns",
                        "PF Return",
                        "Public Limited Filling",
                        "OPC Annual Filling",
                        "LLP Annual Filling",
                        "Private Limited Annual Filling",
                    ]
                }
            ]
        },
        {
            isBold : true,
            id : 'compliances',
            head : "Compliances",
            list : [],
            sub_list : [
                {
                    id : 'change-service',
                    subhead : "Change Service",
                    sub_items : [
                        "Add a Director",
                        "Add/Remove Partner LLP",
                        "MOA Ammendment",
                        "AOA Ammendment",
                        "Appointment of Auditors",
                        "Change in DIN",
                        "Change LLP Agreement",
                        "Chnage Address MCA",
                        "Company Name Change",
                        "Removal/Resigation Director",
                        "Surrender DIN",
                        "Share Transfer",
                    ]
                },
                {
                    id : 'clouser',
                    subhead : "Clouser",
                    sub_items : [
                        "Dissolution of Firms",
                        "Striking of Company",
                        "Strke off LLP",
                        "Stcike of OPC",
                    ]
                },
                {
                    id : 'special',
                    subhead : "Special",
                    sub_items : [
                        "FOSCOS",
                        "Letter of Undertaking",
                        "LLP Name Change",
                        "MOA Printing",
                        "ROC Search Report"
                    ]
                },
                
               
            ]
        },
        {
            isBold : true,
            id : 'accounts',
            head : "Accounting",
            list : [
                "Accounts Payable",
                "Payroll Service",
                "Accounts Receivable",
                "Book-Keeping",
                "Invoice Processing Service",
                "Virtual CFO Service"
            ],
            sub_list : []
        }
]




const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    function TransitionComponent(props) {
        const style = useSpring({
          to: {
            opacity: props.in ? 1 : 0,
            transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
          },
        });
      
        return (
          <animated.div style={style}>
            <Collapse {...props} />
          </animated.div>
        );
      }
      
      const CustomTreeItem = React.forwardRef((props, ref) => (
        <TreeItem
          {...props}
          slots={{ groupTransition: TransitionComponent, ...props.slots }}
          ref={ref} 
        />
      ));


      const DrawerList = (
        <Box  
        sx={{
            padding : "30px 10px",
            display: 'flex',
            flexDirection: 'column',
            gap: '100px', // Space between items
    
        }}
        >
            <SimpleTreeView 
            defaultExpandedItems={['grid']}>
            {
                MENU_ITEMS.map((main_list, index) => (
                    <CustomTreeItem 
                    sx={{
                        marginBottom: 2,
                        '& .MuiTreeItem-label': {
                          fontWeight: main_list.isBold === true ? 'bold' : 'regular', // Adjust the font weight based on the outer prop
                        },
                      }}
                    key={index} itemId={main_list.id} label={main_list.head}>
                        {
                            main_list.list.length > 0 ? 
                            main_list.list.map((single_list,index) =>(
                                <CustomTreeItem
                                 key={index} itemId={`id-${single_list}-${index}`} label={single_list} />
                            )):
                            main_list.sub_list.map((outer_main_list, sub_index) => (
                                <CustomTreeItem 
                                key={sub_index} itemId={outer_main_list.id} label={outer_main_list.subhead}>
                                    {
                                        outer_main_list.sub_items.map((itm, last_index) => (
                                            <CustomTreeItem key={last_index} itemId={`id-${itm}-${last_index}`} label={itm} />
                                        ))
                                    }
                                </CustomTreeItem>
                            ))
                        }
                    </CustomTreeItem>
                ))
            }
            </SimpleTreeView>
        </Box>
    );

    return (
        <div >
            <Drawer
                sx={{
                    background : "#000000a8",
                    zIndex: "15000",
                    '& .MuiDrawer-paper': {
                        width: isMobile ? '70%' : isTablet ? 300 : 300,
                        overflowY: 'scroll',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        msOverflowStyle: 'none', // for Internet Explorer and Edge
                        scrollbarWidth: 'none', // for Firefox
                    },
                }}
                open={open}
                onClose={toggleDrawer(false)}
            >
                <div>
                    <div 
                        style={{
                            padding : "12px 24px",
                            display : "flex",
                            alignItems : "center",
                            justifyContent : "space-between"
                        }}
                    >
                        <Image
                        style={{
                            maxWidth : "120px",
                            height: "auto"
                        }}
                            src={Logo}
                        />
                        <IconButton 
                        sx={{
                            background : "#f9f9f9",
                            '&:hover':{
                                background : "rgb(213 211 211)"
                            }
                        }}
                        onClick={toggleDrawer(false)} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    {DrawerList}
                 
                </div>
                <div>
                    <Divider/>
                <div 
                style={{
                    display : "flex",
                    flexDirection : `${isMobile ? "column" : "column"}`,
                    justifyContent : `${isMobile ? "space-between" : "none"}`,
                    gap : "20px",
                    padding : "30px 12px",

                }}
                className="call_to_actions">
                    <Button 
                    className='cta_btn'
                    sx={{
                       
                        width : "100%",
                        background : "#403CF6",
                        padding : "12px 18px"
                    }} variant="contained" startIcon={<EmailIcon />}>
                        Contect Us
                    </Button>
                    <Button 
                      className='cta_btn'
                    sx={{
                        width : "100%",
                        borderColor : "#403CF6",
                        color : "#403CF6",
                        borderRadius : "4px",
                        padding : "12px 18px"
                    }} variant="outlined" startIcon={<AutoStoriesIcon />}>
                        Blogs
                    </Button>
                </div>
          
                <div className="social_links">
                <ul 
                style={{
                    
                    display: 'none',
                    alignItems: 'center',
                    columnGap: '34px',
                    justifyContent : "space-between",
                    padding :`${isMobile ? "24px 34px" : "24px 28px"}`,
                }}
                >
                    {
                        socialMediaIcons.map((icon,index) => (
                            <li >
                                    <Image
                                    sx={{
                                        width: '17px',
                                        height: 'auto',
                                    }}
                                    priority
                                    key={index}
                                    src={icon.icon}
                                    alt={icon.alt_tag}
                                    className={`social__icon ${icon.className}`}
                                    />
                            </li>
                        ))
                    }
                </ul>
                </div>
                </div>
            </Drawer>
        </div>
    );
};

export default MobileMenu;



















































