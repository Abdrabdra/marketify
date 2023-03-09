import React, {Component} from 'react';
import StudySlider from '../components/StudySlider';
import SeoTitle from '../components/Title/SeoTitle';
import Testimonial from '../components/Testimonial/Testimonial';
import Fade from 'react-reveal/Fade'

class Subscribe extends Component {
    render(){
        let FooterData = this.props.FooterData;
        return(
            <React.Fragment>
                <section className="seo_subscribe_area">
                    <div className="overlay_img"></div>
                    <div className="cloud_img"><img src={require('../img/seo/cloud.png')} alt=""/></div>
                    <div className="container">
                        <SeoTitle Title="Leave Email!" TitleP=""/>
                        <form action="#" className="row seo_subscribe_form">
                            <div className="input-group col-lg-5 col-md-5 col-sm-6">
                                <input type="url" name="website" id="website" placeholder="Name" className="form-control"/>
                            </div>
                            <div className="input-group col-lg-5 col-md-4 col-sm-6">
                                <input type="email" name="email" id="emails" placeholder="Email" className="form-control"/>
                            </div>
                            <div className="input-group col-lg-2 col-md-3 col-sm-12">
                                <input type="submit" name="submit" value="Submit" className="check-btn"/>
                            </div>
                        </form>
                    </div>
                </section>
                
                <section className="seo_partner_logo_area sec_pad">
                    <div className="container">
                        <div className="seo_sec_title text-center mb_70">
                            <Fade bottom><h2>Relied on marketers, trusted by engineers,<br/> and beloved by executives, every where.</h2></Fade>
                        </div>
                    </div>
                </section>
                <section className="seo_call_to_action_area sec_pad">
                    <div className="container">
                        <div className="seo_call_action_text">
                            <h2>Ready to get started?<br/></h2>
                            <a href="/" className="about_btn">Get Started</a>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Subscribe;