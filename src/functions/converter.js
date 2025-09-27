


const getTheInput = (value) => {
    // get the input 
    const inptNumber = document.getElementById("inptNumber");
    const isNumber = inptNumber.value = value;
    
    // Check if the input has a number
    if(!isNumber) {
        alert("Enter a Number")
    }

    //check if the input is string
    if(typeof isNumber === "string"){
        alert(`${isNumber} is not a number`)
        isNumber = "" ;
    }

    return isNumber ;
}


// main function

export function converterHandler(params) {
    
    const btnAbs = document.getElementById("btnAbs").

    
}