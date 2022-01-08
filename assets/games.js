// This creates the initial alert at the top pf thw window asking player for name
var playerName = window.prompt("What's your robot's name ?");

// This is the starting hit point for the players robot 
var playerHealth = 100;

// This is the starting attack damage for the players robot
var playerAttack = 10;

// The starting money a player hass
var playerMoney = 10;

// loogging all the values to the console once collected
console.log(playerName, playerHealth, playerAttack, playerMoney);

//opposing robots stats
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// After all info is collected fight messages intiates 
var fight = function (enemyName) {
    //alert players fight is starting
    window.alert("Welcome to Robot Gladiators !");

    // giving players the choice to figt or skip 
    var promptFight = window.prompt("Would you like to Fight or Skip this battle ? Enter 'Fight' or 'Skip' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

        // subtract the value of 'playerAttack' from the value of 'enemyHealth'.
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + ' attacked ' + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // check for enenmy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left !");
        }

        // subtract the value of 'enemyAttack' from the value 'playerHealth' and use  that result to update the value in the 'enemyHealth' variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + "  health remaining.");

        if (playerHealth <= 0) {
            window.alert(playerName + " has died.");
        } else {
            window.alert(playerName + " can still fight. " + playerName + " has " + playerHealth + "  health remianing.");
        }

    } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to skip this fight ?");

        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight ");
            playerMoney = playerMoney - 2;
            console.log(playerName + " has " + playerMoney + " dollars remaining.")
        } else {
            fight();
        };
    } else {
        window.alert("You need to select a valid option. Try again !");
        fight()
    }
};

//fight()


for(var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i])
}




