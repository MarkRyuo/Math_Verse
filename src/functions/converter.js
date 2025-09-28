
// * 
export const opeHandler = (action) => {
  
    const Number1 = document.getElementById("inptNumber1") ;
    const Number2 = document.getElementById("inptNumber2") ;

    const number1 = Number1.value.trim();
    const number2 = Number2.value.trim();

    let result ;

    if(action === "*") {
        result = number1 * number2 ;
        alert(`${number1} * ${number2} = ${result}`)
    }

    if(action === "/") {
        result = number1 / number2 ;
        alert(`${number1} / ${number2} = ${result}`)
    }

    return result ;


}

const getTheInput = () => {
    // get the input 
    const inptNumber1 = document.getElementById("inptNumber1");
    const isNumber1 = inptNumber.value.trim();
    const inptNumber2 = document.getElementById("inptNumber2");
    const isNumber2 = inptNumber.value.trim();
    
    // Check if the input has a number
    if(!isNumber1 && !isNumber2 ) {
        alert("Enter a Number")
        return null;
    }

    if (operations = "*") {
        fusion = isnumber1 * isNumber2;
        return fusion;
    } else if (operations = "/")


    return isNumber1, isNumber2 ;
}


// main function

export function converterHandler(action) {
    
    const number = getTheInput()
    
    let result ; 

    if(action === "Absolute") {
        result = Math.abs(number); // abs for converting negative number to positive number
    }
    if (action === "Ceil"){
        result = Math.ceil(number);
    }
    if (action === "Floor"){
        result = Math.floor(number);
    }
    if (action === "Round"){
        result = Math.round(number);
    }
    if (action === "Trunc"){
        result = Math.trunc(number);
    }


    alert(`${action} of ${number} = ${result}`)
    
}