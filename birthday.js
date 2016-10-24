"use strict";


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', handleClick);
                          
    
    // Testing purposes
    // localStorage.clear();
                          
                          
    // If there is already local storage, show timer
    var loadedDateString = JSON.parse(localStorage.getItem('date'));
    if(loadedDateString){
        // Disallows reentry
        document.getElementById('input-form').style.visibility = "hidden";
        
        prepareTimer(new Date(loadedDateString));
    } else {
        // Hide age display
        document.getElementById('age').style.visibility = "hidden";
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
    document.getElementById('age').style.visibility = "visible";
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
                
                // Padding of milliseconds
                milliseconds = String("000" + milliseconds).slice(-3);
                
                
                displayElement.innerHTML = '<h4>' +
                                           years + ' years <br/>' +
                                           days + ' days <br/>' +
                                           hours + ' hours <br/>' +
                                           minutes + ' minutes <br/>' +
                                           seconds + ' seconds <br/>' +
                                           milliseconds + ' ms' +
                                           '</h4>';
                
                
//                console.log(displayElement)
//                console.log(now, "NOW")
//                console.log(input, "input")
                
    }, 61)
}
