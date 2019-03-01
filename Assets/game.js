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

var newGame = function () {
    $('#battle').empty();
    var submitButton = $('<button>')
    submitButton.addClass('btn btn-danger new-game');
    submitButton.text('Next Opponent');
    $('#battle').append(submitButton);
}

var initializeGame = function () {
    computerGuess = [];
    selectedOpponent = [];
    hasPicked = false;
    disableChoices = false;
    randomizeOpp();
    randomizeGuess();
    $('#opponent').empty();
    $('#battle').empty();
    $('#warrior').empty();
}


$(document).ready(function () {

    initializeGame();

    console.log(computerGuess)




    userChoice;

    hasPicked;

    disableChoices;

    var throwRock = function () {

        if (computerGuess.toString() === 'paper') {
            logLoss();
            alert('You lost. ' + selectedOpponent.toString() + ' threw paper.')
        } else if (computerGuess.toString() === 'scissors') {
            logWin();
            alert('You Won. ' + selectedOpponent.toString() + ' threw scissors.')
        } else {
            logTie();
            alert('You tied. ' + selectedOpponent.toString() + ' threw rock.')
        }
        newGame();
    }

    var throwPaper = function () {

        if (computerGuess.toString() === 'scissors') {
            logLoss();
            alert('You lost. ' + selectedOpponent.toString() + ' threw scissors.')
        } else if (computerGuess.toString() === 'rock') {
            logWin();
            alert('You Won. ' + selectedOpponent.toString() + ' threw rock.')
        } else {
            logTie();
            alert('You tied. ' + selectedOpponent.toString() + ' threw paper.')
        }
        newGame();
    }

    var throwScissors = function () {

        if (computerGuess.toString() === 'rock') {
            logLoss();
            alert('You lost. ' + selectedOpponent.toString() + ' threw rock.')
        } else if (computerGuess.toString() === 'paper') {
            logWin();
            alert('You Won. ' + selectedOpponent.toString() + ' threw paper.')
        } else {
            logTie();
            alert('You tied. ' + selectedOpponent.toString() + ' threw scissors.')
        }
        newGame();
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
        userChoice = 'rock';

        if (!disableChoices) {

            opponentImage();
        }

        if (hasPicked) {
            $('.weapon-ready').text('Submit Rock')
        } else {
            submitWeapon('rock');
        }




    })



    $('#paper').on('click', function () {
        userChoice = 'paper';

        if (!disableChoices) {

            opponentImage();
        }

        if (hasPicked) {
            $('.weapon-ready').text('Submit Paper')
        } else {
            submitWeapon('paper')
        }



    })

    $('#scissors').on('click', function () {
        userChoice = 'scissors';

        if (!disableChoices) {

            opponentImage();
        }

        if (hasPicked) {
            $('.weapon-ready').text('Submit Scissors')
        } else {
            submitWeapon('scissors')
        }



    })

    $('#warrior').on('click', function () {
        console.log(userChoice)
        console.log(computerGuess)

        if (userChoice === 'rock') {
            throwRock()
        } else if (userChoice === 'paper') {
            throwPaper();
        } else if (userChoice === 'scissors') {
            throwScissors()
        } else {
            alert('Please select a weapon')
        }
    })

    $('#battle').on('click', function () {
        initializeGame();
        console.log(selectedOpponent)
        console.log(hasPicked)
        console.log(disableChoices)
        console.log(computerGuess)
    })








})