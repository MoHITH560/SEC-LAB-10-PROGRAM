let randomNumber = Math.floor(Math.random()*100)
let count = 0;

function main(){
    let user = parseInt(document.getElementById("userNumber").value);
    count ++

    if(randomNumber<user){
        document.getElementById("show1").innerText =" to low"
    }
    else if(randomNumber>user){
        document.getElementById("show1").innerText =" to high"
    }
    else{
        document.getElementById("show1").innerText =" your correct"
        document.getElementById("show2").innerText ="number of attemps"+ +count
    }
}