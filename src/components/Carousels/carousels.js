import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Carousels extends Component {
    state = {  }
    render() { 
        return ( 
            <div> 
                <Carousel >
                    <Carousel.Item>
                        <img
                        className="d-block w-100" style={{height:'600px'}}
                        src="../../img/4020.jpg"
                        // src="http://www.uisorganiclaboratory.co.za/wp-content/uploads/layerslider/LayerSlider-5-responsive-demo-slider/bg4-1000x720.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100" style={{height:'600px'}}
                        src="../../img/4030.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100" style={{height:'600px'}}
                        src="../../img/4040.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>;
            </div>
        );
    }
}
 
export default Carousels;