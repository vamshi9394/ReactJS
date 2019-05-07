import React, { Component } from 'react';

class Unitplan extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="spad">
                    <div className="container">
                        <div className="section-title text-center">
                            <h3>Gallery</h3>
                            <p>Unit Plan</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={require('../img/plan-sketch(1).jpg')} alt="sketch1" />
                                    <div className="card-body">
                                    <h5 className="card-title">Villa</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                        of the card's content.</p>                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={require('../img/plan-sketch(2).jpg')}  alt="sketch2" />
                                    <div className="card-body">
                                    <h5 className="card-title">Villa</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                        of the card's content.</p>                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img style={{height:'245px'}} src={require('../img/plan-sketch.jpg')} alt="sketch3" />
                                    <div className="card-body">
                                    <h5 className="card-title">Villa</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                        of the card's content.</p>                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}
 
export default Unitplan;