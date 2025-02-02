// Code YouTubeDebugger Component Here
import React, {Component} from "react"



export default class YouTubeDebugger extends Component {
    constructor(props){
    super()
      this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }  
    }

        setBitrate = () => {
            // {...this.state.setting,{bitrate:12}}
        this.setState({settings: ({...this.state.settings,bitrate:12})
        })}


        setResolution = () => {
            console.log({...this.state.settings,video2:{resolution:'720p'}})
            this.setState({settings: ({...this.state.settings,video2:{resolution:'720p'}})})}
            
    render(){
        return(
            <div>
            <button className = "bitrate" onClick = {() => this.setBitrate()}>"Bitrate"</button>
            <button className = "resolution" onClick = {() => this.setResolution()}>"Resolution"</button>
            </div>
        )
    }



}