$(document).ready(function(){

    //Computer picks a random number between 19 and 120.

    var newNumber = 19 + Math.floor(Math.random() * 102);
    console.log(newNumber);

    $("#numberSelected").text(newNumber);



})
