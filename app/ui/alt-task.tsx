'use client'

import { habits } from '@/app/lib/tasks' // Collection of "bad habits"
import { useEffect, useState } from 'react';

export default function AltTask() {

    let inputArr;
    let search = '';
    const [input, setInput] = useState('');
    
    console.log('\n\nSTARTING PROGRAM\n');

    useEffect(() => {
        // Create a URLSearchParams object from the current URL
        const params = new URLSearchParams(window.location.search);

        // Get 'input' parameter value
        const inputParam = params.get('input');

        setInput(inputParam || ''); 
    }, []);

    inputArr = input.split(' ');

    console.log('Input Array:'+inputArr); 
    console.log('\n\nStarting loop...\n');
    
    /* Call habit detection function */
    search = detectBadHabit(inputArr); 
    
    console.log('\nTask Generated: '+search);

    return (
        <>
            <h1 className="font-bold text-5xl">{search}</h1>
        </>
    )
}


/* Detection logic for bad habits */
function detectBadHabit(inputArr: string[]) {

    // Detection logic for any bad habits
    for (let i = 0; i < inputArr.length; i++) {

        const key = inputArr[i];
        const altTask = habits.find(habit => {
            return habit === key;
        }); 

        console.log('key: '+key);
        console.log('altTask: '+altTask);

        if (altTask) {
            return "Let's do something else!";
        }
    }
    
    return 'Well that sounds like a great idea!';
}
