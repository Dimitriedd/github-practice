import React, { Component } from 'react';
import Header from './Header.js';
import MovieList from './MovieList.js';
import './App.css';
class App extends Component {
    render() {
        return(
        <div>
            < Header />
            < MovieList />
        </div>
        )
    }
}


export default App;
