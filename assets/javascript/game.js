$(document).ready(function(){

    //We need a function that will initialize a new game after player wins or loses.

    var newNumber
    var allCrystals
    var totalScore
    var wins = 0;
    $("#wins").text(wins);
    
    var losses = 0;
    $("#losses").text(losses);

    var newGame = function() {

        //Computer picks a random number between 19 and 120.

        newNumber = 19 + Math.floor(Math.random() * 102);
        console.log(newNumber);

        $("#numberSelected").text(newNumber);

        //4 numbers between 1 and 12 will be selected.

        allCrystals = [];

        for (var i = 0; i < 4; i++) {
            var crystalValue = 1 + Math.floor(Math.random() * 12);
            allCrystals.push(crystalValue);
        };

        console.log(allCrystals);

        totalScore = 0;
        $("#totalScore").text(totalScore);

    }

    

    //Now, each of the crystals will be assigned with one of the numbers in the allCrystals array. Score will go up by corresponding random number when each crystal is pressed.


    $("#red_crystal").on("click", function() {
        totalScore = totalScore + allCrystals[0];
        console.log(totalScore);
        $("#totalScore").text(totalScore);

        //After the player makes the click, game needs to evaluate if player wins or loses.

        if (totalScore === newNumber) {
            wins = wins + 1;
            $("#wins").text(wins);
            $("#win-lose-msg").text("Congratulations! You've reached the correct number! We've set your wins to " + wins + "! Let's play again.");
            newGame();
        } else if (totalScore > newNumber) {
            losses = losses + 1;
            $("#losses").text(losses);
            $("#win-lose-msg").text("Oh oh, you lost... The number selected was " + newNumber + "... But it's ok. Let's try again now.");
            newGame();
        };
    });

    $("#blue_crystal").on("click", function() {
        totalScore = totalScore + allCrystals[1];
        console.log(totalScore);
        $("#totalScore").text(totalScore);

        //After the player makes the click, game needs to evaluate if player wins or loses.

        if (totalScore === newNumber) {
            wins = wins + 1;
            $("#wins").text(wins);
            $("#win-lose-msg").text("Congratulations! You've reached the correct number! We're setting your wins to " + wins + "! Let's play again.");
            newGame();
        } else if (totalScore > newNumber) {
            losses = losses + 1;
            $("#losses").text(losses);
            $("#win-lose-msg").text("Oh oh, you lost... The number selected was " + newNumber + "... But it's ok. Let's try again now.");
            newGame();
        };
    });

    $("#purple_crystal").on("click", function() {
        totalScore = totalScore + allCrystals[2];
        console.log(totalScore);
        $("#totalScore").text(totalScore);

        //After the player makes the click, game needs to evaluate if player wins or loses.

        if (totalScore === newNumber) {
            wins = wins + 1;
            $("#wins").text(wins);
            $("#win-lose-msg").text("Congratulations! You've reached the correct number! We're setting your wins to " + wins + "! Let's play again.");
            newGame();
        } else if (totalScore > newNumber) {
            losses = losses + 1;
            $("#losses").text(losses);
            $("#win-lose-msg").text("Oh oh, you lost... The number selected was " + newNumber + "... But it's ok. Let's try again now.");
            newGame();
        };
    });

    $("#pink_crystal").on("click", function() {
        totalScore = totalScore + allCrystals[3];
        console.log(totalScore);
        $("#totalScore").text(totalScore);

        //After the player makes the click, game needs to evaluate if player wins or loses.

        if (totalScore === newNumber) {
            wins = wins + 1;
            $("#wins").text(wins);
            $("#win-lose-msg").text("Congratulations! You've reached the correct number! We're setting your wins to " + wins + "! Let's play again.");
            newGame();
        } else if (totalScore > newNumber) {
            losses = losses + 1;
            $("#losses").text(losses);
            $("#win-lose-msg").text("Oh oh, you lost... The number selected was " + newNumber + "... But it's ok. Let's try again now.");
            newGame();
        };

    });
    newGame();


})
