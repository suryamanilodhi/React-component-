import React from "react";
function Functional(props){
    return(
      <div>this is my first div  inside functional component
        <div>this is outer child inside one parent beacause react allow only one parent div</div>
        <h3>isited of div we can use fragement</h3>
        <h1>my name is {props.name}</h1>
      </div>
      
    )
}
export default Functional;