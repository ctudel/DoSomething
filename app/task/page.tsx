'use client';

import { useEffect, useState } from 'react';

export default function Page() {
    // Functions of interest: search()
    // Once a prompt is given, split it to a new array and then try to find any        matches in the "bad word" collection.

    const [input, setInput] = useState('');


    useEffect(() => {
        // Create a URLSearchParams object from the current URL
        const params = new URLSearchParams(window.location.search);

        // Get the 'input' parameter value
        const inputParam = params.get('input');

        setInput(inputParam || '');
    }, []);

    console.log(input);

    return (
        <>
            <div className="flex w-screen h-screen justify-center items-center">
                <h1 className="font-bold text-5xl">{input}</h1>
            </div>
        </>
    )
}
