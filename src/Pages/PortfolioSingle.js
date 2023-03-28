import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Portfoliosingle from '../components/Portfolios/Portfoliosingle';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const About = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="DD Market Consulting LLC" Pdescription="Will help companies make better decisions by optimizing the media mix, suggesting the best price per region or sales channel, improving and creating tracking reports, and establishing long-term partnerships with key tool providers to enhance business performance."/>
            <Portfoliosingle/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default About;