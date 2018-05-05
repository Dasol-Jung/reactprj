import React from 'react';
import './Person.css'

const person = (props)=>{

       return (
           <div className="Person">
            <h3 onClick={props.click}>{props.name}'s age : {props.age}</h3>
            <input type="text" onChange={props.change} value={props.name}/>
            </div>
       )


    }
    

export default person;