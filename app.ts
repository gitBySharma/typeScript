const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector('button') as HTMLButtonElement;

const numResult: Array<number> = [];
const textResult: string[] = [];

type numOrString = number | string;
type Result = {val: number; timeStamp: Date};

interface ResultObj {
    val: number; 
    timeStamp: Date;
}

function add(num1: numOrString, num2: numOrString) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        return num1 + num2;
    } else if (typeof (num1) === 'string' && typeof (num2) === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;

}

function printResult(resultObj: ResultObj){
    console.log(resultObj.val);

}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResult.push(result as number);
    const stringResult = add(num1, num2);
    textResult.push(stringResult as string);
    console.log(result);
    console.log(stringResult);
    printResult({val: result as number, timeStamp: new Date()});
    console.log(numResult, textResult);
});


const myPromise = new Promise<string> ((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello, World!');
    }, 1000)
});

myPromise.then((result) => {
    console.log(result.split('W'));
})