import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import Reveal from 'react-reveal/Reveal'
class Footer extends Component {
    render(){
        let FooterData = this.props.FooterData;
        return(
            <footer className="new_footer_area bg_color">
                
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400">{FooterData.copywrite}</p>
                            </div>
                            <div className="col-lg-6 col-sm-5 text-right">
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;