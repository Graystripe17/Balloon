"use strict";




document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM CONTENT LOADED");
    document.querySelector('button').addEventListener('click', main)
})

function main(event){
    event.preventDefault();
    var source = document.getElementById('birthday-input').value;
    document.getElementById('results').innerHTML = source;
    console.log("MAIN");
}
