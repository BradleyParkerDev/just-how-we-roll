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
/*******************
 * EVENT LISTENERS *
 *******************/
imageD6.addEventListener('click', function(){
    console.log("D6 Clicked!");
    d6RollFunction();
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

    //reset images
    imageD6.src = "./images/start/d6.png";

    //change text
    meanD6.innerText = "N/A";
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