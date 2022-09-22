// function getPlayerChoice() {
//     let choice = prompt("Please enter your choice:\n1: rock\n2: paper\n3: scissor")
//     if (choice == 1) { choice = "rock" }
//     else if (choice == 2) { choice = "paper" }
//     else if (choice == 3) { choice = "scissor" }
//     console.log(`You chose ${choice}`)
//     return choice.toLowerCase();
// }

// function getComputerChoice() {
//     let choice1 = Math.floor(Math.random() * 3) + 1;
//     if (choice1 == 1) choice1 = "rock"
//     else if (choice1 == 2) choice1 = "paper"
//     else if (choice1 == 3) choice1 = "scissor"
//     console.log(`Computer chose ${choice1}`)
//     return choice1;

// }


// function singleGame(playerChoice, computerChoice) {
// playerChoice = getPlayerChoice();
// computerChoice = getComputerChoice();
//     if (computerChoice == choice) {
//         console.log("It's a tie!")
//         tries += 1;
//         console.log(`tries are ${tries}`)
//     } else if ((computerChoice == "rock" && choice == "paper") || (computerChoice == "paper" && choice == "scissor") || (computerChoice == "scissor" && choice == "rock")) {
//         console.log("You win!")
//         tries += 1;
//         score += 1;
//         console.log(`tries are ${tries}`)
//         console.log(`score is ${score}`)
//     } else if ((computerChoice == "rock" && choice == "scissor") || (computerChoice == "paper" && choice == "rock") || (computerChoice == "scissor" && choice == "paper")) {
//         console.log("You lose!")
//         tries += 1;
//         lives -= 1;
//         score -= 1;
//         console.log(`tries are ${tries}`)
//         console.log(`score is ${score}`)
//         console.log(`lives is ${lives}`)
//     }

// }

// game();





function game() {
    let gameOnGoing = true;
    let lives = 5;
    let score = 0;
    let tries = 0;
    while (gameOnGoing) {

        if (lives == 0) {
            console.log("You ran out of lives")
            let choice1 = prompt("Replay: y/n")
            let dec = choice1.toLowerCase();
            if (dec == "y") {
                console.clear();
                game();
            } else if (dec == "n") {
                console.log('You Quit')
                gameOnGoing = false;
                break;
            } else gameOnGoing = false; break;
        }

        let choice = prompt("Please enter your choice:\n1: rock\n2: paper\n3: scissor")
        if (choice == 1) { choice = "rock" }
        else if (choice == 2) { choice = "paper" }
        else if (choice == 3) { choice = "scissor" }
        console.log(`You chose ${choice}`)

        let choice1 = Math.floor(Math.random() * 3) + 1;
        if (choice1 == 1) choice1 = "rock"
        else if (choice1 == 2) choice1 = "paper"
        else if (choice1 == 3) choice1 = "scissor"
        console.log(`Computer chose ${choice1}`)

        if (choice == 'q') {
            console.log('You Quit')
            gameOnGoing = false;
        } else if (choice1 == choice) {
            console.log("It's a tie!")
            // console.log(choice1)
            // console.log(choice)
            tries += 1;
            console.log(`tries are ${tries}`)
        } else if ((choice1 == "rock" && choice == "paper") || (choice1 == "paper" && choice == "scissor") || (choice1 == "scissor" && choice == "rock")) {
            console.log("You win!")
            // console.log(choice1)
            // console.log(choice)
            tries += 1;
            score += 1
            console.log(`tries are ${tries}`)
            console.log(`score is ${score}`)
        } else if ((choice1 == "rock" && choice == "scissor") || (choice1 == "paper" && choice == "rock") || (choice1 == "scissor" && choice == "paper")) {
            console.log("You lose!")
            // console.log(choice1)
            // console.log(choice)
            tries += 1;
            lives -= 1;
            if (score > 0) score -= 1;
            console.log(`tries are ${tries}`)
            console.log(`score is ${score}`)
            console.log(`lives is ${lives}`)
        }

    }

}


game();