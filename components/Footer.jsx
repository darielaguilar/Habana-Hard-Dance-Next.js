import React from "react";

export default function Footer({children})
{

    return (
    <>
        <div className="flex flex-row-reverse md:items-stretch   bg-black ">
            {children}
        </div>
        
        </>
    );
}
