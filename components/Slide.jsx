import React from "react"

export default function Slide({...props}){

    return (
        <div className="mySlides fade">
        <div className={props.numbertext}>1 / 3</div>
        <img src={props.src} style={props.width}/>
        <div class={props.text}>Caption Text</div>
    </div>
    );
}