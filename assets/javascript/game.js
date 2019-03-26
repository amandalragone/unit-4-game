$(document).ready(function(){

    //Global vars. 

    var newNumber
    var allCrystals
    var totalScore
    var wins = 0;
    $("#wins").text(wins);
    
    var losses = 0;
    $("#losses").text(losses);

    //Function that will initialize a new game after player wins or loses.


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

        //Each number is associated to 1 crystal.

        $("#red_crystal").attr( "value", allCrystals[0]);
        $("#blue_crystal").attr( "value", allCrystals[1]);
        $("#purple_crystal").attr( "value", allCrystals[2]);
        $("#pink_crystal").attr( "value", allCrystals[3]);

        //Total score is reset to 0.

        totalScore = 0;
        $("#totalScore").text(totalScore);

    }

    

    //On click, score will go up by number that corresponds to the crystal pressed.

    $(".crystal").on("click", function() {
        var eachCrystal = ($(this).attr("value"));
        eachCrystal = parseInt(eachCrystal);
        totalScore = totalScore + eachCrystal;
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

    //When page loads, new game starts.

    newGame();

})
