'use client';

import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function Textbox() { 
    const [userText, setUserText] = useState('');

    /* Called once user has stopped typing for 300ms */
    const handleInput = useDebouncedCallback( (e: any) => {
        setUserText(e.target.value);
        console.log(userText);
    }, 100);


    function handleSubmit(e: any) {
        e.preventDefault();
        console.log("Form submitted with input: "+userText);
        console.log(getRandomTask("Hello"));
    } 

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <form autocomplete="off" className="p-3 bg-white border-5 border-solid border-black rounded font-medium" onSubmit={handleSubmit}>
                <input type="text" onChange={handleInput} className="p-3 outline-0 text-black" name="user-text" placeholder="What're you gunna do now?"/> 
                <button className="px-3 py-0.5 text-white font-bold bg-black border-2 border-solid rounded border-black hover:text-black hover:bg-white" type="submit">{"->"}</button>
            </form>
        </div>
    )
}

function getRandomTask(prompt: string): string {
    const tasks = ["Do something", "Well ain't that something"];
    let index = getRandomNumber(0, tasks.length - 1); 
    return tasks[index];
}


function getRandomNumber(min: number, max: number): number {
    let randNum = Math.random();
    return Math.floor(randNum * (max - min + 1)) + min
}
