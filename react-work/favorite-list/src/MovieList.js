import React, {Component} from 'react';
import Avengers,{GreenBook, ToyStory, StarWars, Jaws} from './Movies.js'


class MovieList extends Component {
    render() {
        return (
            <ol>
                <li>< Avengers /></li>
                <li>< GreenBook /></li>
                <li>< ToyStory /></li>
                <li>< StarWars /></li>
                <li>< Jaws /></li>
            </ol>
        )
    }
}
    export default MovieList
