//async await - much cleaner method than .then();
//much earier and readable as compare to callback and .then method

function hardikAsyncFunction(){
    let p = new Promise(function(resolve) {
        resolve("hi there");
    });
    return p;
}

async function main() {
    let value = await hardikAsyncFunction();
       console.log(value); 
    console.log("first");
}

main();