#! /usr/bin/env node
import inquirer from "inquirer"; //importing the libraries
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
function turnOff() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2500); //animations turn off after 2.5 secs
    });
}
async function display() {
    let title = chalkAnimation.rainbow('Guessing Game'); //first title
    await turnOff();
    let secondTitle = chalkAnimation.karaoke('Lets play the guessing game!'); //second title
    await turnOff(); //animation runs for 2.5 sec
    secondTitle.stop(); //animation turns off
}
async function guessNumber() {
    let userScore = 0; // initial scores
    let computerScore = 0;
    console.log(chalk.bgMagentaBright('Its best of 5. Whoever scores more wins.\n'));
    for (let x = 0; x < 5; x++) { //for running the code below for specific time
        let numberToGuess = Math.floor(Math.random() * 5); /*random generated between 0 and 5 round to nearest
        lower number*/
        let guessNumber = await inquirer. //user enters the number
            prompt({
            name: "numb",
            type: 'number',
            message: 'Please enter any number between 0 and 5: '
        });
        if (guessNumber.numb === numberToGuess) { //if the guess is correct, increment the user score
            userScore++;
            console.log(chalk.bgBlueBright(`You guessed the right number! \n`));
            console.log(`Your Score: ${userScore}\nComputer Score: ${computerScore}`); //displaying scores
        }
        else { //if incorrect, increment the computer score
            computerScore++;
            console.log(chalk.bgRedBright(`Oops, Wrong guess!\n`));
            console.log(`Your Score: ${userScore}\nComputer Score: ${computerScore}`);
        }
    }
    if (userScore > computerScore) { //user is the winner if its score is more
        console.log(chalk.bgCyanBright('The user wins!'));
    }
    else if (computerScore > userScore) { //computer is the winner if its score is more
        console.log(chalk.bgGray('The computer wins'));
    }
    else { //it is a tie
        console.log(chalk.magentaBright('It is a ties'));
    }
}
async function doAgain() {
    do { //doing the following code at least once
        await guessNumber(); //calling the function and not moving forward unless the operation of function done
        var repeat = await inquirer.prompt({
            name: 'userChoice',
            type: 'rawlist',
            message: 'Do you want to play again? Select an option: ',
            choices: ['Yes', 'No'] //options available to choose from
        });
    } while (repeat.userChoice == 'Yes'); // the code will continue unless the user select no
}
await display(); //callin the function and not moving forward unluess the opeartion of function is performed
doAgain(); //calling the function
