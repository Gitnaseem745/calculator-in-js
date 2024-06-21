const numOne = document.querySelector('.one').addEventListener('click', function(){
    document.querySelector('.calc').innerHTML += 1;
});

const numTwo = document.querySelector('.two').addEventListener('click', function(){
    document.querySelector('.calc').innerHTML += 2;
});

const numThree = document.querySelector('.three').addEventListener('click', function(){
    document.querySelector('.calc').innerHTML += 3;
});

const numFour = document.querySelector('.four').addEventListener('click', function(){
    document.querySelector('.calc').innerHTML += 4;
});

const numFive = document.querySelector('.five').addEventListener('click', function(){
    document.querySelector('.calc').innerHTML += 5;
});

const numSix = document.querySelector('.six').addEventListener('click', function(){
    document.querySelector('.calc').innerHTML += 6;
});

const numSeven = document.querySelector('.seven').addEventListener('click', function(){
    document.querySelector('.calc').innerHTML += 7;
});

const numEight = document.querySelector('.eight').addEventListener('click', function(){
    document.querySelector('.calc').innerHTML += 8;
});

const numNine = document.querySelector('.nine').addEventListener('click', function(){
    document.querySelector('.calc').innerHTML += 9;
});

const numTen = document.querySelector('.ten').addEventListener('click', function(){
    document.querySelector('.calc').innerHTML += 10;
});

const plus = document.querySelector('.add').addEventListener('click', function(){
    document.querySelector('.calc').innerHTML += '+';
})
const minus = document.querySelector('.sub').addEventListener('click', function(){
    document.querySelector('.calc').innerHTML += '-';
})
const divide = document.querySelector('.div').addEventListener('click', function(){
    document.querySelector('.calc').innerHTML += '/';
})
const multiply = document.querySelector('.multi').addEventListener('click', function(){
    document.querySelector('.calc').innerHTML += '*';
})


const total = document.querySelector('.total').addEventListener('click', function(){
    const inputVal = document.querySelector('.calc').innerHTML;
    const outputDiv = document.querySelector('.output');
    try {
        const result = eval(inputVal);
        outputDiv.innerHTML = result;
    } catch (error) {
        outputDiv.innerHTML = 'Error';
    } 
});

const clearAll = document.querySelector('.clear-all').addEventListener('click', function(){
    document.querySelector('.calc').innerHTML = '';
    document.querySelector('.output').innerHTML = '';
})

const backspace = document.querySelector('.back').addEventListener('click', function(){
    let prevContent = document.querySelector('.calc');
    let currentContent = prevContent.innerHTML
    if(currentContent.length > 0){
        prevContent.innerHTML = currentContent.slice(0, -1) 
    }
})
