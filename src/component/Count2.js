import React from "react";
import {Component } from "react";

class Count2 extends Component(){
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    render(){
        return(
            <div>
                <h3>by class  component</h3>
                <button onClick={()=>this.setstate({count:this.state.count+1})}>count2</button>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}
export default Count2;