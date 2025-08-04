
function calculate(){
    const number1 = parseFloat(document.getElementById("num1").value);
    const number2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;

    if(isNaN(number1) || isNaN(number2)){
        result = "enter correct number"
    }
    else{
    switch(operation){
        
        //add
        case "addition":
            result = number1+number2;
            break;
        
        case "subraction":
            result = number1-number2;
            break; 

        case "multiplication":
            result = number1*number2;
            break;
        
        case "division":
            if(number2 === 0){
                result = "invalid"
            }
            else{
                result = number1 / number2; 
            } 
        break;
        default:
            result = "Invalid";
        }
    }
    result=document.getElementById("answer").innerText = "Result:" + result

}