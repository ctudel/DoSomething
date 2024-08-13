'use client'

import { habits, altTasks } from '@/app/lib/tasks' // Collection of "bad habits"
import { getKey, getRandomTask, getRandomNumber } from '@/app/lib/task-functions'
import { useEffect, useState } from 'react';

export default function AltTask() {

    let inputArr;
    let search = '';
    const [input, setInput] = useState('');

    useEffect(() => {
        // Create a URLSearchParams object from the current URL
        const params = new URLSearchParams(window.location.search);

        // Get 'input' parameter value
        const inputParam = params.get('input');

        setInput(inputParam || ''); 
    }, []);

    inputArr = input.toLowerCase().split(/, |,| |; |;|\|/); // Delimit comma-space, comma, space, etc.
    
    console.log('\n\nStarting loop...\n');
    search = detectBadHabit(inputArr); // Call habit detection function
    console.log('\nTask Generated: '+search);

    return (
        <>
            <h1 className="text-3xl font-bold md:text-5xl w-5/6">{search}</h1>
        </>
    )
}


/* Detection logic for bad habits */
function detectBadHabit(inputArr: string[]): string {

    // Detection logic for any bad habits
    for (let i = 0; i < inputArr.length; i++) {

        /* Scan sentence for habits */
        const key = getKey(inputArr, i); 
        const altTask = habits.find(habit => {
            return habit === key;
        }); 

        console.log('Key to match: '+key);
        console.log('Matched: '+altTask);

        if (altTask) {
            const newTask = getRandomTask(altTasks);
            return newTask;
        }

        /* Scan for specific habits and create logic to give specific responses
         *  i.e. "sleep" could be a good thing or a bad thing
         *      based on time
         */
         // if (subHabits[key]) {
            
         // }
    }
    
    return 'Well that sounds like a great idea!';
}


