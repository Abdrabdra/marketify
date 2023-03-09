import React, {Component} from 'react';
import Slider from 'react-slick'

class Pserviceslider extends Component{
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '100px',
            responsive: [
                {
                  breakpoint: 1250,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '100px',
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                  }
                }
              ]
        };
        return(
            <Slider className="service_carousel" {...settings}>
                <div className="service_item">
                    <div className="icon s_icon_one"><i className="ti-check"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Market research<br/></h4>
                    <p>This involves conducting research to identify target markets and competitor analysis.</p>
                    <img className="float-right" src={require('../../../img/home2/undraw.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_two"><i className="ti-location-arrow"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Advertising<br/></h4>
                    <p>This involves creating and placing ads on various media channels to promote products or services.</p>
                    <img className="float-right" src={require('../../../img/home2/inbox.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_three"><i className="ti-search"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Public relations<br/></h4>
                    <p>This involves managing a company's image and reputation through various channels such as media relations and crisis management.</p>
                    <img className="float-right" src={require('../../../img/home2/file.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_four"><i className="ti-stats-up"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Digital marketing<br/></h4>
                    <p>This includes a wide range of services such as search engine optimization, social media marketing, email marketing, and content marketing.</p>
                    <img className="float-right" src={require('../../../img/home2/report.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_one"><i className="ti-check"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Branding<br/></h4>
                    <p> This involves creating and maintaining a brand identity that represents a company's values and mission, and differentiates it from competitors.</p>
                    <img className="float-right" src={require('../../../img/home2/undraw.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_two"><i className="ti-location-arrow"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Event marketing<br/></h4>
                    <p>This involves planning and executing events to promote products or services, build brand awareness, and engage with customers.</p>
                    <img className="float-right" src={require('../../../img/home2/inbox.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_three"><i className="ti-search"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Sales promotion<br/></h4>
                    <p>This involves offering discounts, coupons, or other incentives to encourage customers to buy products or services.</p>
                    <img className="float-right" src={require('../../../img/home2/file.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_four"><i className="ti-stats-up"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Direct marketing<br/></h4>
                    <p>This involves communicating directly with potential customers through mail, email, or other channels to promote products or services.</p>
                    <img className="float-right" src={require('../../../img/home2/report.png')} alt=""/>
                </div>
            </Slider>
        )
    }
}
export default Pserviceslider;