// Code DigitalClicker Component Here
import React, {Component} from "react"



export default class DigitalClicker extends Component {
    constructor(props){
    super()
        this.state = {
            timesClicked: 0
        }


    }

    counter = () => {
        this.setState({
            timesClicked: this.state.timesClicked +1
        })
    }

    render(){
        return(
            <button onClick={() => this.counter()}>{this.state.timesClicked}</button>
        )
    }



}