import React from "react"


export default function TextContainer(props)
{


    return (
        <div className="bg-white border rounded-lg p-10 md:mx-10 mx-2 my-7 shadow-md">
            <h1 className="font-bold my-2 sm:my-5 divide-y md:text-4xl text-lg">{props.header}</h1>
            <hr></hr>
            <p className="md:leading-10 font-sans md:text-2xl my-2 text-justify  sm:text-sm sm:leading-none"> {props.text}</p>
        </div>
    );
}