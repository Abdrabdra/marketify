import React , {Component} from 'react';
import AboutWidget from './FooterWidget/AboutWidget';
import SolutionWidget from './FooterWidget/SolutionWidget';
import TeamWidget from './FooterWidget/TeamWidget';
import Reveal from 'react-reveal/Reveal'
class FooterTwo extends Component {
    render(){
        var {fClass} = this.props;
        let FooterData = this.props.FooterData;
        return(
            <footer className={`footer_area footer_area_four f_bg ${fClass}`}>
                <div className="footer_top">
                    <div className="container">
                        
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-6">
                                <p className="mb-0 f_400">{FooterData.copywrite}</p>
                            </div>
                            <div className="col-lg-4 col-md-3 col-sm-6">
                                <div className="f_social_icon_two text-center">
                                    {
                                        FooterData.socialIcon.map(item =>{
                                            return(
                                                <a href="/" key={item.id}><i className={item.icon}></i></a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <ul className="list-unstyled f_menu text-right">
                                    <li><a href=".#">Terms of Use</a></li>
                                    <li><a href=".#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default FooterTwo;