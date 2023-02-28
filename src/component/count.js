import React from "react";
import { useState } from "react";
function Counter(){ 
    const[count,setcount]=useState(0)//count==0
    let addcount=()=>{
    setcount(count+1);
    }
    return(
        <div>
            <h2>counter</h2>
            <button onClick={addcount}>count</button>
            <h3>{count} </h3>
        </div>
    )
}
export default Counter;

