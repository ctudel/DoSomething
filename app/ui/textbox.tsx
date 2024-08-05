'use client';

import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function Textbox() { 
    const [userText, setUserText] = useState('');

    /* Called once user has stopped typing for 300ms */
    const handleInput = useDebouncedCallback( (e) => {
        setUserText(e.target.value);
        console.log(userText);
    }, 300);


    function handleSubmit(e) {
        /*e.preventDefault();
        console.log("Form submitted with input: "+userText);*/
    } 

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <form className="p-3 bg-white border-2 border-solid border-black rounded font-medium" onSubmit={handleSubmit}>
                <input type="text" onChange={handleInput} className="p-3 outline-0 text-black" name="user-text" placeholder="What're you gunna do now?"/> 
                <button className="px-3 py-0.5 text-white font-bold bg-black border-2 border-solid rounded border-black hover:text-black hover:bg-white" type="submit">-></button>
            </form>
        </div>
    )
}
