import React from "react";




export default class ClassCom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: new Date(),
        }
    }
    
    render(){
        console.log(this.state.data.toLocaleDateString())
        return (
            <div>
                <span>
                    hello {this.state.data.toLocaleDateString(this.props.local)}
                </span>
            </div>
        )
    }
}