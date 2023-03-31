import React from 'react';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';

const Service = () => {
    return(
        <React.Fragment>
            <section className="seo_service_area sec_pad">
                <div className="container">
                    <SeoTitle Title='How does it work?'/>
                    <div className="row seo_service_info">
                        <Fade bottom duration={500}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon1.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Targeting and Segmentation</h4>
                                    </a>
                                    <p>One of the most important aspects of marketing is understanding your target audience and segmenting them based on their needs and preferences.</p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={700} >
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon2.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Digital Marketing</h4>
                                    </a>
                                    <p>With the rise of the internet and social media, digital marketing has become an essential part of any marketing strategy.</p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={1000}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon5.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Branding and Positioning</h4>
                                    </a>
                                    <p>Developing a strong brand identity and positioning is critical for success in marketing.</p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
            <section className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="seo_features_img">
                                <div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img src={require('../../img/seo/features_img.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2>Get tips & tricks on how to skyrocket your sales.</h2>
                                    <p>One effective way to boost your sales is to create a sense of urgency and scarcity in your offers.</p>
                                    <div className="media seo_features_item">
                                        <div className="icon"><img src={require('../../img/seo/icon4.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Limited-Time Sale</h3>
                                            <p>Offer a limited-time sale on a specific product or service.</p>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item">
                                        <div className="icon two"><img src={require('../../img/seo/icon3.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Exclusive Deal</h3>
                                            <p>Offer an exclusive deal for a specific group of customers, such as email subscribers or social media followers. </p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
            <section className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="seo_features_img seo_features_img_two">
                                <div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img src={require('../../img/seo/features_img_two.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2 className="wow fadeInUp">Get tips & tricks on how to skyrocket your sales.</h2>
                                    <h6 className="wow fadeInUp">Personalize your marketing</h6>
                                    <p className="wow fadeInUp">Customers respond better to personalized marketing messages that address their individual needs and preferences. Use customer data and analytics to tailor your marketing messages to specific target audiences and create personalized experiences that build customer loyalty.</p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Service;
