"use strict";


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', main)
})

function main(event){
    event.preventDefault();
    var source = new Date(document.getElementById('birthday-input').value);
    document.getElementById('results').innerHTML = source.getFullYear();
}
