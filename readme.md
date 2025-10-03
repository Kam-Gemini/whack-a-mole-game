# Whack-A-Mole

<br/>

You must make a plan before you start coding and have a member of the instructional team sign you off.  
<br/>

This is a group task, only one person needs to share their screen and pseudocode

<br/>

#### The game should take place on a 5 by 5 grid of cells, centered on the screen (a lot like the daft punk soundboard!)
#### A start button should start the game...
 <br/>

### When the game starts:

* Every 2 seconds, a new 'mole' should appear in a random cell. When implementing, I recommend using a .mole class to add a mole to a cell. Style it how you wish!
* If the player clicks the mole, the mole is removed, and the player gets 100 points.
    * **hint:** Think about what method we can use to check for classes on an element...
* If the player doesn't click the mole in time, the mole disappears, and the player loses a life.
* If 3 moles are not clicked in time, the game ends.
* When the game ends, alert the final score.

**Note: Moles always appear every 2 seconds, whether the player clicks the current mole or not, until the game is over**
<br/>

**Bonus tasks:**
* See if you can spot any bugs with your solution, and fix those.
* Display the score on the screen (extra challenge: check out localStorage even after the page has been refreshed, see if you can save a high score)
* Add a reset button
* A bit more tricky: Every time a mole is clicked, slightly decrease the time the next mole takes to appear. 