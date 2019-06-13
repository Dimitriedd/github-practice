import React, {Component} from 'react';
import LightBulb from './LightBulb'
import './App.css';

class App extends Component  {
    render() {
        return(
            <div>
            <LightBulb/>
            <LightBulb/>
            <LightBulb/>
            </div>
        )
    }
}

export default App;
