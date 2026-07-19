import React,{Component} from "react";

const Child = (props) =>{
    return(
        <h2>
            HELLO FROM CHILD and 
            <br />
            **{props.name}** 
            <br />
            From Parent Component
        </h2>        
    )
}

export default Child