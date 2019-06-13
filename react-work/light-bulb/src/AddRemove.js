import React, {Component} from 'react';
import LightBulb from './LightBulb';

class AddRemove extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
        }
    }
    counterUp=()=>{
        let newCount=this.state.count +1
        this.setState({count:newCount})
    }
    dupLight=()=>{
        let counter=this.state.count
        for(let i=0,i<=counter;i++){
            
        }
    }




}
