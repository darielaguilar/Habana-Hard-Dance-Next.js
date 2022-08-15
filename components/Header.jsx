
import React from "react";

export default function Header({children})
{
    return (
        <div className="flex rounded-md   md:mx-10 sm:mx-5 h-32 justify-center App-header " >
            {children}
        </div>
    );
}