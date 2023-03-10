import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Blogsingle from '../components/Blog/Blogsingle'
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const BlogSingle = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Post Single" Pdescription="Unlock Your Marketing Potential: Powerful Strategies to Boost Your Brand and Drive Sales"/>
            <Blogsingle/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default BlogSingle;