import React, { Component } from 'react';
import './header.css'

class Headerpage extends Component {
    state = {  }
    render() { 
        return (
            <div>
                hello World
                <header className="header-section">
                    <div className="header header-top">
                        <h1 className="logo"><img className="logoimg" src={require('../img/logo.png')} alt="logo" /> </h1>
                        <form className="formclass">
                            <ul className="main-menu ">
                            <li>
                                {/* <a href>Home</a> */}
                            </li>
                            <li>
                                {/* <a href>Our Price</a> */}
                            </li>
                            <li>
                                {/* <a href>Contact US</a> */}
                            </li>
                            </ul>
                        </form>
                    </div>
                </header>
            </div>
        );
    }
}
 
export default Headerpage;