import React, * as react from 'react';
import Headerpage from './components/header';
import Footerpage from './components/footer';
import Formpage from './components/form';
import Amenitiespage from './components/amenities';
import Unitplan from './components/unitPlan';
import Carousels from './components/Carousels/carousels';
import './App.css';

class App extends react.Component {
  render() {
    return (
      <div>
      
        <div className="spad">
          <Headerpage />
          <Carousels />
        </div>

        <div className="spad">
          <Unitplan />
        </div>

        <div className="spad">
          <Amenitiespage />
        </div>

        <div className="spad">
          <Formpage />        
        </div>
        
        <div>
          <Footerpage />
        </div>
      
      </div>
    );
  }
}

export default App;
