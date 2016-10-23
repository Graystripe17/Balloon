"use strict";


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', handleClick);
                          
    
    // Testing purposes
    localStorage.clear();
                          
                          
    // If there is already local storage, show timer
    var loadedDate = JSON.parse(localStorage.getItem('date'));
    if(loadedDate){
        // Disallows reentry
        document.getElementById('input-form').style.visibility = "hidden";
        prepareTimer(loadedDate);
    }
})

function handleClick(event){
    // Stops submit
    event.preventDefault();
    
    // Disallows reentry
    document.getElementById('input-form').style.visibility = "hidden";
    
    var source = new Date(document.getElementById('birthday-input').value);
    
    // Save to local storage
    localStorage.setItem('date', JSON.stringify(source));
    
    prepareTimer(source);
}

function prepareTimer(source) {
    var displayElement = document.getElementById('results');
    
    startTimer(displayElement, source);
    
}


function startTimer(displayElement, input){
    setInterval(function(){
                
                var now = new Date();
                
                
                
                var elapsedMS = now - input;
                var years = Math.floor(elapsedMS / (365.2425 * 24 * 60 * 60 * 1000));
                var total_days = Math.floor(elapsedMS / (24 * 60 * 60 * 1000)); // Also counts full years
                var weeks = Math.floor(total_days / 7); // We know years precisely as a measure of days, weeks is a derived quantity
                var days = total_days % 365;
                
                
                var milliseconds = Math.floor(elapsedMS % (1000));
                var seconds = Math.floor(elapsedMS % (60 * 1000) / (1000));
                var minutes = Math.floor(elapsedMS % (60 * 60 * 1000) / (60 * 1000));
                var hours = Math.floor(elapsedMS % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
                
                
                displayElement.innerHTML = years + '<br/>' + 
                                           days + '<br/>' +
                                           hours + '<br/>' +
                                           minutes + '<br/>' +
                                           seconds + '<br/>' +
                                           milliseconds;
                
                
//                console.log(displayElement)
//                console.log(now, "NOW")
//                console.log(input, "input")
                
    }, 81)
}
