"use strict";


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', main)
})

function main(event){
    event.preventDefault();
    var source = new Date(document.getElementById('birthday-input').value);
    var display = document.getElementById('results').innerHTML
    display = source.getFullYear();
    
    startTimer(display, source);
}

function startTimer(display, input){
    var now = new Date()
    setInterval(function(){
                // This function displays milliseconds remaining
                display = input - now;
                
                console.log(now - input)
                console.log(now, "NOW")
                console.log(input, "input")
                
    }, 2000)
}
