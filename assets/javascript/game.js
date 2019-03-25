$(document).ready(function(){

    //Computer picks a random number between 19 and 120.

    var newNumber = 19 + Math.floor(Math.random() * 102);
    console.log(newNumber);

    $("#numberSelected").text(newNumber);

    //4 numbers between 1 and 12 will be selected.

    var allCrystals = [];

    for (var i = 0; i < 4; i++) {
        var crystalValue = 1 + Math.floor(Math.random() * 12);
        allCrystals.push(crystalValue);
    };
    
    console.log(allCrystals);

    //Now, each of the crystals will be assigned with one of the numbers in the allCrystals array. Score will go up by corresponding random number when each crystal is pressed.

    var totalScore = 0;

    $("#red_crystal").on("click", function() {
        totalScore = totalScore + allCrystals[0];
        console.log(totalScore);
        $("#totalScore").text(totalScore);
    });

    $("#blue_crystal").on("click", function() {
        totalScore = totalScore + allCrystals[1];
        console.log(totalScore);
        $("#totalScore").text(totalScore);
    });

    $("#purple_crystal").on("click", function() {
        totalScore = totalScore + allCrystals[2];
        console.log(totalScore);
        $("#totalScore").text(totalScore);
    });

    $("#pink_crystal").on("click", function() {
        totalScore = totalScore + allCrystals[3];
        console.log(totalScore);
        $("#totalScore").text(totalScore);
    });






})
