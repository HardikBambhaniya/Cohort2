const fs = require('fs'); //File system

function hardikReadFile(){
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", function(err, data){ //operation like log something, read file etc always happen inside promise
            resolve(data); //after the complete async task resolve called
        });
    })
}

function onDone(data){
    console.log(data);
}

hardikReadFile().then(onDone); //.then called whenever async function resolved

//by using promises we don't need to use callback hell