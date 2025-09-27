


const getTheInput = () => {
    // get the input 
    const inptNumber = document.getElementById("inptNumber");
    const isNumber = inptNumber.value.trim();
    
    // Check if the input has a number
    if(!isNumber) {
        alert("Enter a Number")
        return null;
    }

    return isNumber ;
}


// main function

export function converterHandler(action) {
    
    const number = getTheInput()

    let result ; 

    if(action === "Absolute") {
        result = Math.abs(number); // abs for converting negative number to positive number
    }


    alert(`${action} of ${number} = ${result}`)
    
}