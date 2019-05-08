import React, { Component } from 'react';
import './amenities.css';

class Amenitiespage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                hello world
                <div className="spad set-bg bgamenitiesing">
                    <div className="container">
                    <div className="section-title text-center">
                        <h4>
                        AMENITIES
                        </h4>
                        <div className="second-left-content">
                        <div className="second-left-flex">
                            <div className="row">
                            <div className="col-md-3 col-xs-6">
                                <img src={require('../img/a1.png')} alt="a1" />
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <img src={require('../img/a2.png')} alt="a2" />
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <img src={require('../img/a3.png')} alt="a3" />
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <img src={require('../img/a4.png')} alt="a4" />
                            </div>
                            </div>
                            <div className="row"> <br /> </div>
                            <div className="row">        
                            <div className="col-md-3 col-xs-6">
                                <img src={require('../img/a5.png')}alt="a5" />
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <img src={require('../img/a6.png')} alt="a6" />
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <img src={require('../img/a7.png')}alt="a7" />
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <img src={require('../img/a8.png')} alt="a8" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="spad">
                    <div className="section-title text-center">
                        <h3>Testimonial PropMentor</h3>
                        <p style={{marginTop:'30px'}} >
                            Brigade Group brings you Brigade Buena Vista, luxury apartments in the
                            lucrative micro-market of East Bangalore. Located just 20 minutes from
                            Whitefield, these homes enjoy excellent connectivity to Indiranagar,
                            Whitefield and the Airport.
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default Amenitiespage;