import React, {Component} from 'react';
import './LightBulb.css';
class LightBulb extends Component {
    constructor(props) {
        super(props)
        this.state={
            light: "off",
            bulb:"https://banner2.kisspng.com/20180803/xlt/kisspng-incandescent-light-bulb-clip-art-lamp-openclipart-free-clipart-1001freedownloads-com-5b643bf93c1f21.7278385815332956092463.jpg",
            lightSwitch: "imageOff",
        }
    }
    handleChange=()=>{
        let newLight =this.state.light
        let newBulb =this.state.bulb
        let newSwitch = this.state.lightSwitch
        if(newLight==="off"){
            newLight="on"
            newBulb ="https://www.pinclipart.com/picdir/middle/117-1172058_light-bulb-clipart-light-bulb-clipart-png-transparent.png"
            newSwitch = "imageOn"
        }else{
            newLight="off"
            newBulb="https://banner2.kisspng.com/20180803/xlt/kisspng-incandescent-light-bulb-clip-art-lamp-openclipart-free-clipart-1001freedownloads-com-5b643bf93c1f21.7278385815332956092463.jpg"
            newSwitch = "imageOff"
        }
        this.setState({light:newLight})
        this.setState({bulb:newBulb})
        this.setState({lightSwitch:newSwitch})
    }
    render(){
          let{ light }= this.state
          let{ bulb }=this.state
          let{ lightSwitch }=this.state

          // let styles = {
          //     backgroundColor: light,
          //     height: "100px",
          //     width: "100px",
          //     border: "2px solid black"
          //
          // }
        return(
            <div>
            <img src={bulb} alt="this is a light bulb"className="Bulb"></img>
            <br></br>
            <img src="http://www.clker.com/cliparts/H/d/P/7/r/b/light-switch-off.svg" alt="this is a light switch" className={lightSwitch} onClick = {this.handleChange}></img>

            </div>
        )
    }
}
export default LightBulb;
