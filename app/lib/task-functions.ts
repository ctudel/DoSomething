/* Task Generator */
export function getRandomTask(taskList: string[]): string {
    let index = getRandomNumber(0, taskList.length - 1); 
    return taskList[index];
}


/* Number Generator */
export function getRandomNumber(min: number, max: number): number {
    let randNum = Math.random();
    return Math.floor(randNum * (max - min + 1)) + min
}


/* Returns a specific key if matched, otherwise a general key */
export function getKey(inputArr: string[], index: number): string {
    let key = inputArr[index]; 
    let retStr = '';

    switch (key) {
        case 'not':
            retStr = `${key} ${inputArr[index+1]}`
            console.log('\nReturn:'+retStr);
            return retStr;

        case 'i':
            retStr = `${key} ${inputArr[index+1]} ${inputArr[index+2]}`
            console.log('\nReturn:'+retStr);
            return retStr;

        default: 
            return inputArr[index];
    }

}
