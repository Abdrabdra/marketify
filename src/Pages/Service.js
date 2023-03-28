import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import HRService from '../components/Service/HRService';
import PrototypeService from '../components/Service/Sservice/PrototypeService';
import Partner from '../components/Partner';
import ServiceSubscribe from '../components/ServiceSubscribe';
import FooterTwo from '../components/Footer/FooterTwo';
import ServiceData from '../components/Service/ServiceData';
import FooterData from '../components/Footer/FooterData';

const Service = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Services" Pdescription="DD Market Consulting LLC is committed to becoming a leading marketing consulting firm in the United States. We will achieve this by delivering high-quality and innovative solutions to our clients while adhering to the highest ethical standards in the industry. We are confident that our approach to marketing consulting will help businesses and beyond thrive in today's competitive market. Our mission is to become a trusted partner for businesses seeking to improve their market position, increase brand awareness, and drive sales growth through effective and efficient marketing strategies. At DD Market Consulting LLC, we believe that our success is measured by the success of our clients, and we are passionate about helping our clients achieve their marketing objectives."/>
            <HRService ServiceData={ServiceData}/>
            <PrototypeService/>
            <ServiceSubscribe sClass="s_form_info_two"/>
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default Service;