var wins = 0;
var losses = 0;
var ties = 0;

var computerChoices = ['rock', 'paper', 'scissors']

var opponents = [
    'Agent Smith',
    'Darth Maul',
    'Darth Vader',
    'Donald Trump',
    'Gollum',
    'The Joker',
    'Michael Myers',
    'Scar',
    'The Terminator',
    'Lord Voldemort'
];

var selectedOpponent = [];

var randomizeOpp = function () {

    var rand = opponents[Math.floor(Math.random() * opponents.length)];
    selectedOpponent.push(rand)


}




var userChoice = '';

var hasPicked = false;

var disableChoices = false;

var computerGuess = [];

var randomizeGuess = function () {
    var rand = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(rand)
}



var opponentImage = function () {
    if (selectedOpponent.toString() === 'Agent Smith') {
        $('#opponent').append('<img src="Assets/Images/agent-smith.jpeg" />')
    }
    if (selectedOpponent.toString() === 'Darth Maul') {
        $('#opponent').append('<img src="Assets/Images/darth-maul.jpeg" />')
    }
    if (selectedOpponent.toString() === 'Darth Vader') {
        $('#opponent').append('<img src="Assets/Images/dath-vader.jpeg" />')
    }
    if (selectedOpponent.toString() === 'Donald Trump') {
        $('#opponent').append('<img src="Assets/Images/donald-trump.jpeg" />')
    }
    if (selectedOpponent.toString() === 'Gollum') {
        $('#opponent').append('<img src="Assets/Images/gollum.jpeg" />')
    }
    if (selectedOpponent.toString() === 'The Joker') {
        $('#opponent').append('<img src="Assets/Images/joker.jpeg" />')
    }
    if (selectedOpponent.toString() === 'Michael Myers') {
        $('#opponent').append('<img src="Assets/Images/myers.jpeg" />')
    }
    if (selectedOpponent.toString() === 'Scar') {
        $('#opponent').append('<img src="Assets/Images/scar.jpeg" />')
    }
    if (selectedOpponent.toString() === 'The Terminator') {
        $('#opponent').append('<img src="Assets/Images/terminator.jpeg" />')
    }
    if (selectedOpponent.toString() === 'Lord Voldemort') {
        $('#opponent').append('<img src="Assets/Images/voldemort.jpeg" />')
    }
}

var logWin = function () {
    wins++;
    $('#winRow').text(wins)
}

var logLoss = function () {
    losses++;
    $('#lossRow').text(losses)
}

var logTie = function () {
    ties++;
    $('#tieRow').text(ties)
}

$(document).ready(function () {

    randomizeGuess();

    console.log(computerGuess)




    userChoice;

    hasPicked;

    disableChoices;

    var throwRock = function () {

        userChoice = 'rock';

        if (hasPicked) {
            if (computerGuess.toString() === 'paper') {
                logLoss();
            } else if (computerGuess.toString() === 'scissors') {
                logWin();
            } else {
                logTie();
            }
        }
    }

    var throwPaper = function () {
        userChoice = 'paper'



        if (hasPicked) {
            if (computerGuess.toString() === 'scissors') {
                logLoss();
            } else if (computerGuess.toString() === 'rock') {
                logWin();
            } else {
                logTie();
            }
        }
    }

    var throwScissors = function () {
        userChoice = 'scissors'





        if (hasPicked) {
            if (computerGuess.toString() === 'rock') {
                logLoss();
            } else if (computerGuess.toString() === 'paper') {
                logWin();
            } else {
                logTie();
            }
        }
    }

    var submitWeapon = function (event) {
        hasPicked = true;
        disableChoices = true;
        var submitButton = $('<button>')
        submitButton.addClass('btn btn-outline-danger weapon-ready')
        submitButton.text('Submit ' + event.charAt(0).toUpperCase() + event.slice(1))
        $('#warrior').append(submitButton);

        var battle = $('<h1>');
        battle.addClass('display-1 bold mr-5')
        battle.text("VS")

        $('#battle').append(battle)


    }



    $('#rock').on('click', function () {
        if (!disableChoices) {
            randomizeOpp();
            opponentImage();
        }

        if (hasPicked) {
            $('.weapon-ready').text('Submit Rock')
        } else {
            submitWeapon('rock');
        }



        console.log(selectedOpponent.toString())
    })



    $('#paper').on('click', function () {
        if (!disableChoices) {
            randomizeOpp();
            opponentImage();
        }

        if (hasPicked) {
            $('.weapon-ready').text('Submit Paper')
        } else {
            submitWeapon('paper')
        }


        console.log(selectedOpponent.toString())
    })

    $('#scissors').on('click', function () {
        if (!disableChoices) {
            randomizeOpp();
            opponentImage();
        }

        if (hasPicked) {
            $('.weapon-ready').text('Submit Scissors')
        } else {
            submitWeapon('scissors')
        }


        console.log(selectedOpponent.toString())


    })



    console.log(userChoice)
    console.log(computerGuess)
    console.log(hasPicked)
    console.log(disableChoices)
    console.log(selectedOpponent.toString())








})