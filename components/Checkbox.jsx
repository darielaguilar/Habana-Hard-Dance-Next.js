import React, { useState} from "react";

export default function Checkbox()
{
    const [checked, setChecked] = useState(false);

    

    

    return (
        <>
            <div className="flex my-9 mx-9  ">
                <div >
                    <input className="my-4 py-4 border-3 border-black" type="checkbox" value={checked} onChange={()=> setChecked(checked => !checked)}/>
                    {checked ? "checked":"not checked"}
                </div>
            </div>
        </>
    );
}
