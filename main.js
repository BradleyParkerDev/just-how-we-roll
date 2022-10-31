/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/
//reset button
let resetButton = document.querySelector('#reset-button');

//d6-roll
let imageD6 = document.querySelector('#d6-roll');
let meanD6 = document.querySelector('#d6-rolls-mean');

//double six roll
let d6OneImage = document.querySelector('#double-d6-roll-1');
let d6TwoImage = document.querySelector('#double-d6-roll-2');
let doubleD6Mean = document.querySelector('#double-d6-rolls-mean');

//twelve roll
let imageD12 = document.querySelector('#d12-roll');
let meanD12 = document.querySelector('#d12-rolls-mean');
//twenty roll
let imageD20 = document.querySelector('#d20-roll');
let meanD20 = document.querySelector('#d20-rolls-mean');
/*******************
 * EVENT LISTENERS *
 *******************/
imageD6.addEventListener('click', function(){
    console.log("D6 Clicked!");
    d6RollFunction();
})
imageD12.addEventListener('click', function(){
    console.log("D12 Clicked!");
    d12RollFunction();
})
imageD20.addEventListener('click', function(){
    console.log("D20 Clicked!");
    d20RollFunction();
})
resetButton.addEventListener('click', function(){
    console.log("Reset Clicked!");
    reset();
})
//or this
//resetButton.addEventListener('click', reset)

/******************
 * RESET FUNCTION *
 ******************/
function reset(){
    //empty global arrays
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];
    //reset images
    imageD6.src = "./images/start/d6.png";
    d6OneImage.src =  "./images/start/d6.png";
    d6TwoImage.src =  "./images/start/d6.png";
    imageD12.src = "./images/start/d12.jpeg";
    imageD20.src = "./images/start/d20.jpg";
    //change text
    meanD6.innerText = "N/A";
    doubleD6Mean.innerText = "N/A";
    meanD12.innerText = "N/A";
    meanD20.innerText = "N/A";
}
reset();

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function d6RollFunction(){
    let result = getRandomNumber(6);
    console.log(result);
    imageD6.src = `./images/d6/${result}.png`;
    sixes.push(result);
    meanD6.innerText = getMean(sixes);
    console.log(sixes);
}

// function doubleD6RollFunction(){
//     let result = getRandomNumber(6);
//     console.log(result);
//     imageD6.src = `./images/d6/${result}.png`;
//     sixes.push(result);
//     meanD6.innerText = getMean(sixes);
//     console.log(sixes);
// }
function d12RollFunction(){
    let result = getRandomNumber(12);
    console.log(result);
    imageD12.src = `./images/numbers/${result}.png`;
    twelves.push(result);
    meanD12.innerText = getMean(twelves);
    console.log(twelves);
}

function d20RollFunction(){
    let result = getRandomNumber(20);
    console.log(result);
    imageD20.src = `./images/numbers/${result}.png`;
    twenties.push(result);
    meanD20.innerText = getMean(twenties);
    console.log(twenties);
}

/****************
 * MATH SECTION *
 ****************/
function getMean(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }

    return sum/array.length;
}