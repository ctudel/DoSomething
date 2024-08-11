'use client'

import { altTasks, TaskType } from '@/app/lib/tasks' // Collection of "bad habits"
import { useEffect, useState } from 'react';

export default function AltTask() {

    let inputArr;
    let search = '';
    const [input, setInput] = useState('');
    
    console.log('\n\nSTARTING PROGRAM\n');

    useEffect(() => {
        // Create a URLSearchParams object from the current URL
        const params = new URLSearchParams(window.location.search);

        // Get the 'input' parameter value
        const inputParam = params.get('input');

        setInput(inputParam || ''); 
    }, []);

    /* rough draft of splitting user input into an array */
    // const inputArr = input.split(' ');
    // console.log(inputArr[0]);

    /* Match any user-in words to "bad words" collection */
    // make an array with key as habits and value as alt task for O(1) mapping?
    
    /* Version using set
    const set = new Set(habits);
    console.log(set);
    */

    inputArr = input.split(' ');
    console.log('Input Array:'+inputArr); 

    console.log('\n\nStarting loop...\n');
    for (let str = 0; str < inputArr.length; str++) {

        const key = inputArr[str];
        const altTask = altTasks[key];

        console.log('key: '+key);
        console.log('altTask: '+altTask);

        if (altTask) {
            search = altTask;
        }
    }

    search = (!search) ? 'Well that sounds like a great idea!' : search;

    return (
        <>
            <h1 className="font-bold text-5xl">{search}</h1>
        </>
    )
}
