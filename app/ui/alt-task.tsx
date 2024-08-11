'use client'

import { habits } from '@/app/lib/tasks' // Collection of "bad habits"
import { useEffect, useState } from 'react';

export default function AltTask() {
    // Functions of interest: search()
    // Once a prompt is given, split it to a new array and then try to find any        matches in the "bad word" collection.

    const [input, setInput] = useState('');

    // Has a value if any 'bad habits' are detected
    /* const [search, setSearch] = useState(); */


    useEffect(() => {
        // Create a URLSearchParams object from the current URL
        const params = new URLSearchParams(window.location.search);

        // Get the 'input' parameter value
        const inputParam = params.get('input');

        setInput(inputParam || '');
    }, [input]);


    /* rough draft of splitting user input into an array */
    const inputArr = input.split(' ');
    console.log(inputArr[1]);


    /* Match any user-in words to "bad words" collection */
    // make an array with key as habits and value as alt task for O(1) mapping?
    const set = new Set(habits);
    console.log(set);

    return (
        <>
            <h1 className="font-bold text-5xl">{input}</h1>
        </>
    )
}
