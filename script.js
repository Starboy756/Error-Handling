//Error = object which is made when an error occurs while taking
//        user input or establishing a connection

// try{} = Encloses code that might potentially cause an error
// catch{} = Catch and Handle any thrown error from try{}
// finally{} = always executes just to clean up close files close connection resources

// try{
//     console.log(x)
//     // NETWORK ERRORS 
//     // PROMISE REJECTION
//     // SECURITY ERRORS 
// }

// catch(error){
//     console.error(error)
// }

// finally{
//     console.log(`This always executes`)
// }

// console.log(`You have reached the end`)

try {

let dividend = Number(window.prompt(`Enter the dividend`));
let devisor = Number(window.prompt(`enter a devisor`));

if(devisor == 0){
    throw new Error(`You cant divide with zero`);
}
if(isNaN(dividend) || isNaN(devisor)){
    throw new Error(`Dividend and Devisor Must be a number`)
}

let result = dividend / devisor;

console.log(`Answer is ${result}`);

}

catch(error){
    console.error(error)
}

console.log(`this is the end`)