import React from "react";
import {Links} from "./anchor"

const Navbar = () =>{
   
    let array =[
        {link:"Services"},
        {link:"Project"},
        {link:"About"}
    ]
    return (
        <div id="main_div">
            <div> LOGOBACKERY</div>
            <div id="anchor_div">
          { array.map((link)=>
             < Links {...link} />
          )}
            </div>
            <div ><button id="button_div">Contact</button></div>
        </div>
    )

}



export {Navbar}