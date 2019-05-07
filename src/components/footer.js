import React, { Component } from 'react';
import logo from '../img/logo.png';
import './footer.css';

class Footerpage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
              
               <footer className="footer-area footer--light">
                    <div className="footer-big">                    
                        <div className="container">
                        <div>
                            
                            <div className="col-md-3 col-sm-4">
                                <div className="footer-widget">
                                    <div className="widget-about">
                                        <img src={logo} style={{marginTop:'-20px'}} height="80" alt="logo" />
                                        <p>Welcome to PropMentor</p>
                                        <ul className="contact-details">
                                            <li>
                                                <span className="icon-earphones"></span> Call Us:
                                                {/* <a href="tel:344-755-111">344-755-111</a> */}
                                            </li>
                                            <li>
                                                <span className="icon-envelope-open"></span>
                                                {/* <a href="mailto:support@aazztech.com">support@Chequecut.com</a> */}
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="footer-widget">
                                    <div className="footer-menu footer-menu--1">
                                        <h4 className="footer-widget-title">Popular Homes</h4>
                                        <ul>
                                            <li>
                                              34  {/* <a href="./plans/plan1.html">30 X 40 (1200Sqft)</a> */}
                                            </li>
                                            <li>
                                                35 {/* <a href="./plans/plan2.html">30 X 50 (1500Sqft)</a> */}
                                            </li>
                                            <li>
                                               46 {/* <a href="./plans/plan3.html">40 X 60 (2400Sqft)</a> */}
                                            </li>                                   
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-4">
                                <div className="footer-widget">
                                    <div className="footer-menu">
                                        <h4 className="footer-widget-title">We Provide</h4>
                                        <ul>
                                            <li>
                                              3d  {/* <a href="#">3D Design</a> */}
                                            </li>
                                            <li>
                                               AR {/* <a href="#">Architect</a> */}
                                            </li>
                                            <li>
                                               CI {/* <a href="#">Consultation & Implementation</a> */}
                                            </li>                                   
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-4">
                                <div className="footer-widget">
                                    <div className="footer-menu no-padding">
                                        <h4 className="footer-widget-title">Help Support</h4>
                                        <ul>
                                            <li>
                                               SF {/* <a href="#">Support Forum</a> */}
                                            </li>
                                            <li>
                                              CC*  {/* <a href="#">Terms &amp; Conditions</a> */}
                                            </li>                                  
                                            <li>
                                               FAQ {/* <a href="#">FAQs</a> */}
                                            </li>                                  
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mini-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="copyright-text">
                                        <p>© 2018 All rights reserved. Created by Chequecut
                                            {/* <a href="#">Chequecut</a>. All rights reserved. Created by */}
                                            {/* <a href="#">Chequecut</a> */}
                                        </p>
                                    </div>

                                    {/* <div className="go_top">
                                        <span className="icon-arrow-up"></span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}
 
export default Footerpage;