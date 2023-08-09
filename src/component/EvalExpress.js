import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
 export default function EvalExpress(){
   
    let z =119.67;
    let y=110;

    return(
        <div>
            <h1>
                EVALUATE EXPRESSION
            </h1>
            <h3>
                {z}{">"}{y}{" "}{ z>y ? "TRUE": 'FALSE'}
            </h3>
        </div>
    );
 }