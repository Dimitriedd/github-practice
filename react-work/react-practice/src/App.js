import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import './App.css';
    class App extends Component {
        render () {
            return (
            <div>
                < Header />
                < Content />
                < Footer />
            </div>
            )
        }
    }
    export default App;