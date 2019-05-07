import React, { Component } from 'react';
import '../components/form.css';

class Formpage extends Component {
    state = {  }
    render() { 
        return ( 

            //  {/* Form  */}
            <div>
                <div className="bgforming spad set-bg">
                    <div className="container">
                        <div className="section-title text-center">
                            <h4> GET IN TOUCH</h4>
                            <p>Please enter the details below to get in touch with us !</p>
                        </div>
                        
                        <form id="contact-form">
                            <div className="sppb-row-container">
                                
                                <div>
                                    <div className="form-group col-md-6">
                                        <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="glyphicon glyphicon-user" aria-hidden="true">
                                            </i>
                                        </div>
                                        <input type="text" className="form-control form-iotext" name="fname" placeholder="First Name*" />
                                        </div>
                                        <label htmlFor="fname" generated="true" className="error" />
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="form-group col-md-6">
                                        <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="glyphicon glyphicon-user" aria-hidden="true">
                                            </i>
                                        </div>
                                        <input type="text" className="form-control form-iotext" name="fname" placeholder="Last Name*" />
                                        </div>
                                        <label htmlFor="fname" generated="true" className="error" />
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="form-group col-md-6">
                                    <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="glyphicon glyphicon-phone">
                                        </i>
                                    </div>
                                    <input type="text" className="form-control form-iotext" name="fname" placeholder="Mobile*" />
                                    </div>
                                    <label htmlFor="fname" generated="true" className="error" />
                                </div>
                                </div>
                                
                                <div>
                                    <div className="form-group col-md-6">
                                        <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="glyphicon glyphicon-envelope" aria-hidden="true">
                                            </i>
                                        </div>
                                        <input type="text" className="form-control form-iotext" name="fname" placeholder="Email" />
                                        </div>
                                        <label htmlFor="fname" generated="true" className="error" />
                                    </div>
                                </div>

                            </div>
                        </form>

                        {/* <button type="submit" className="form-btn" onclick="show_alert();">Submit</button> */}
                    </div>    
                </div>       
            </div>
        );
        }
    }
 
export default Formpage;