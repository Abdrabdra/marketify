import React from 'react';

const Portfoliosingle =()=>{
    return(
        <section className="portfolio_details_area sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="portfolio_details_info pr_50">
                            <h5 className="f_700 f_p f_size_20 t_color3 mb-30">Name Surname</h5>
                            <p className="f_400 f_size_15 mb-0">A marketing person is a professional who specializes in promoting and selling products or services to potential customers. They are responsible for developing and implementing effective marketing strategies and campaigns that drive sales and increase brand awareness. A successful marketing person is skilled in market research, data analysis, customer behavior, and competitive landscape analysis.</p>
                            <div className="portfolio_category mt_60">
                                <div className="p_category_item mb-30">
                                    <h6 className="f_p f_size_15 f_400 t_color3 mb-0 l_height28">Client: </h6>
                                    <p className="f_size_15 f_400 mb-0">Abstergo Industries.</p>
                                </div>
                                <div className="p_category_item mb-30">
                                    <h6 className="f_p f_size_15 f_400 t_color3 mb-0 l_height28">Date: </h6>
                                    <p className="f_size_15 f_400 mb-0">March, 2023</p>
                                </div>
                                <div className="p_category_item mb-30">
                                    <h6 className="f_p f_size_15 f_400 t_color3 mb-0 l_height28">Website: </h6>
                                    <p className="f_size_15 f_400 mb-0">website.com</p>
                                </div>
                                <div className="p_category_item mb-30">
                                    <h6 className="f_p f_size_15 f_400 t_color3 mb-0 l_height28">Services: </h6>
                                    <p className="f_size_15 f_400 mb-0">Marketing, SEO</p>
                                </div>
                                <div className="p_category_item">
                                    <p className="f_400 f_size_15 mb-0">Share on</p>
                                    <div className="social_icon">
                                        <a href=".#"><i className="ti-facebook"></i></a>
                                        <a href=".#"><i className="ti-twitter-alt"></i></a>
                                        <a href=".#"><i className="ti-google"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio_pagination mt_100">
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="portfolio_details_gallery">
                            <img className="img-fluid mb_20" src={require('../../img/portfolio-details/pr_details1.jpg')} alt=""/>
                            <img className="img-fluid mb_20" src={require('../../img/portfolio-details/pr_details2.jpg')} alt=""/>
                            <img className="img-fluid mb_20" src={require('../../img/portfolio-details/pr_details3.jpg')} alt=""/>
                            <img className="img-fluid mb_20" src={require('../../img/portfolio-details/pr_details4.jpg')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 
export default Portfoliosingle;