$(document).ready(function(){

    //Computer picks a random number between 19 and 120.

    var newNumber = 19 + Math.floor(Math.random() * 102);
    console.log(newNumber);

    $("#numberSelected").text(newNumber);

    //Each of the crystals will pick a random number between 1 and 12.

    var allCrystals = [];

    for (var i = 0; i < 4; i++) {
        var crystalValue = 1 + Math.floor(Math.random() * 12);
        allCrystals.push(crystalValue);
    };
    
    console.log(allCrystals);



})
