import React, { useState } from "react";





export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clock: new Date()
        }
    }
    componentDidMount(){
        setInterval( this.tick,1000)
    }
    tick = ()=>{
        this.setState({clock: new Date()})
    }
    render(){
        return(
            <div>
                bangladesh -- {this.state.clock.toLocaleTimeString(this.props.locale)}
            </div>
        )
    }
}