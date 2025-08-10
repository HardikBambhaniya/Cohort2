const btn = document.getElementById('btn');
const total = document.getElementById('sum');

const totalSum = () => {
     const value1 = document.getElementById('firstNumber').value; //this always read string inside a html so we need to change string to number if we want.
     const value2 = document.getElementById('secondNumber').value;
     
     fetch("https://sum-server.100xdevs.com/sum?a=" + value1 + "&b=" + value2).then(response => response.json()).
        then(data => {
            const ans = data.result; //data is the object that we get from the server, and result is the key that we want to access
            total.innerHTML = ans;
        })
    // const ans = parseInt(value1) + parseInt(value2); //parseInt - a global function taht convert strings into number
    
}




btn.addEventListener("click", totalSum); 

