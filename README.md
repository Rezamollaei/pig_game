This project is a simple 2-player dice game built using JavaScript, HTML, and CSS. Players take turns rolling a dice, aiming to reach the target score of 20 points first.

Features
Interactive Gameplay: Players can roll dice and hold scores.
Turn Switching: Rolling a 1 ends the current turn and switches to the next player.
Winning Condition: The first player to score 20 points wins the game.
New Game: A reset button allows players to start a new game.
How It Works
Initial Setup:

Both players' scores are initialized to 0.
Player 1 is marked as the active player.
The dice image is hidden until a roll is made.
Rolling the Dice:

Players can roll the dice by clicking the "Roll Dice" button.
A random number between 1 and 6 is generated.
If the roll is not 1, the score is added to the player's current total.
Rolling a 1 switches the turn to the other player.
Holding the Score:

Players can hold their current score by clicking the "Hold" button.
The current score is added to the total score of the active player.
If a player's total score reaches or exceeds 20, they are declared the winner.
If the score is below 20, the turn switches to the other player.
New Game:

Clicking the "New Game" button resets all scores and states to start a fresh game.
How to Play
Click "Roll Dice" to roll the dice and accumulate points.
Use "Hold" to save your score and pass the turn to the next player.
Avoid rolling a 1, as it will reset your current score and switch turns.
The first player to reach 20 points wins the game.
Use "New Game" to restart the game at any time.
Technologies Used
HTML for structuring the game interface.
CSS for styling and layout.
JavaScript for implementing the game logic and interactivity.
This project demonstrates fundamental DOM manipulation, event handling, and game logic implementation. Perfect for learning and practicing JavaScript basics!







