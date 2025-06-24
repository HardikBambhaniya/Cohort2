//create a countdown in javascript that count from 30 to 0.

// let count = 30;

// let countDown = setInterval(() => {
//     console.log(count);
//     count-- ;

//     if (count < 0) {
//      clearInterval(countDown,);
//      console.log("Time's up!");
//     }

// }, 1000);


//FIND OUT HOW MUCH TIME IT TAKES TO RUN SETTIMEOUT FUNCTION
// const expectedTime = Date.now() + 1000;

// setTimeout(() => {
//    const actualTime = Date.now();
//    const delay = actualTime - expectedTime;
   
//    console.log("expected time is " + expectedTime);
//    console.log("actual time is " + actualTime);
//    console.log("delay is " + delay);

// }, 1000);


//Create a terminal cloack (HH:MM:SS);
function displayClock () {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const sec = String(now.getSeconds()).padStart(2, '0');

    console.clear();
    console.log(`${hours}:${min}:${sec}`);
}

setInterval(displayClock, 1000);





 
