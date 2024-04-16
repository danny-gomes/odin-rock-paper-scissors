let player_score = 0;
let pc_score = 0;
let rounds = 3;
let result;

while(pc_score < rounds && player_score < rounds) {
    result = game()
    if(result === 1) {
        player_score++;
    } else if(result === 2) {
        pc_score++;
    }

    alert("Player: " + player_score + " PC: " + pc_score);
}

function game() {
    let player_choice = prompt("Rock, Paper, Scissors");
    player_choice = player_choice.charAt(0).toUpperCase();

    while(player_choice.charAt(0).toUpperCase() !== "R" && player_choice.charAt(0).toUpperCase() !== "P" && player_choice.charAt(0).toUpperCase() !== "S") {
        player_choice = prompt("That's not an option. Rock, Paper, Scissors");
        player_choice = player_choice.charAt(0).toUpperCase();
    }

    let pc_choice = Math.floor((Math.random() * 3) + 1);

    switch (pc_choice) {
        case 1:
            pc_choice = "R";
            break;
        case 2:
            pc_choice = "P";
            break;
        case 3:
            pc_choice = "S";
            break;
        default:
            alert("Something went wrong in pc_choice attribution.");
    }

    if (player_choice === pc_choice) {
        alert(char_choice_to_long(player_choice) + "  Vs. " + char_choice_to_long(pc_choice) + "\nDraw.");
        return 0;
    } else if ((player_choice === "R" && pc_choice === "S") ||
        (player_choice === "P" && pc_choice === "R") ||
        (player_choice === "S" && pc_choice === "P")) {
        alert(char_choice_to_long(player_choice) + "  Vs. " + char_choice_to_long(pc_choice) + "\nYou win.");
        return 1;
    } else {
        alert(char_choice_to_long(player_choice) + "  Vs. " + char_choice_to_long(pc_choice) + "\nYou lose.");
        return 2;
    }

    function char_choice_to_long(char_choice) {
        switch (char_choice) {
            case "R":
                return "Rock";
            case "P":
                return "Paper";
            case "S":
                return "Scissors";
            default:
                return "oops something went wrong converting char choice to long choice";
        }
    }
}




