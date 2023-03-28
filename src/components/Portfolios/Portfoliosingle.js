import React from 'react';

const Portfoliosingle =()=>{
    return(
        <section className="portfolio_details_area sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="portfolio_details_info pr_50">
                            <h5 className="f_700 f_p f_size_20 t_color3 mb-30">Dudkina Dana</h5>
                            <h5 className="f_700 f_p f_size_20 t_color3 mb-30">Advertising, Promotions and Marketing Manager, CEO Director, founder of company "DD market consulting LLC"</h5>
                            <p className="f_400 f_size_15 mb-0">CEO Director of  company "DD Market Consulting" LLC a full-cycle marketing agency specializing in market research and development of solutions to increase sales. Offers the client a completea range of advertising services, including website development, market analysis, media 
Member of the Kazakhstan Marketing Association</p>
                            <div className="portfolio_pagination mt_100">
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="portfolio_details_gallery">
                            <img className="img-fluid mb_20" src={require('../../img/image-1.png')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 
export default Portfoliosingle;