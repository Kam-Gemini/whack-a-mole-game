/*-------------------------------- Pseudocode --------------------------------*/

/* HTML Section
// Draw a 5 by 5 grid made of divs in html - centred using flex method
> // add start button - (top left above the grid)
> // somewhere to add score - (below the grid) - held by a variable
> // add number of lives - below the grid - held by a variable

/* CSS
/create a class to hold the mole image

/*Code Section
> cache the button elements - "divs" - use a querySelectAll
> cache the start button
> cache the score element
> cache the lives element
> add a click event to every button using the ForEach method to call the button clicked function
> add a click event to the start button to call the start function

> //create a start function to start the game

    * Every 2 seconds, a new 'mole' should appear in a random button. When implementing, I recommend using a .mole class to add a mole to a button. Style it how you wish!

    // time interval function - 2 second intervals
        // randomly select a div every 2 second - held by a selectedDiv
        // add the class of the mole to that div
        // create a delay function that runs after 2 seconds - passing the selectedDiv value
            // check if the mole is still in the div
            // if mole found, remove mole and minus 1 life
            // call checkGameEnded function
    
        
//create clickedDiv function
    // check if clicked button has mole using contains method
    // if mole found add 100 points to the score

//create checkGameEnded function
    // If lives is zero
    // clear interval function
    // set up an alert to post the final score

/*-------------------------------- Constants --------------------------------*/
// selectedDiv
/*-------------------------------- Variables --------------------------------*/
 // create a variable to hold number of lives - global
 // create a variable to track the score - global
 // interval function variable - global
/*------------------------ Cached Element References ------------------------*/
// cache the button elements - "divs" - use a querySelectAll
// cache the start button
// cache the score element
// cache the lives element
/*-------------------------------- Functions --------------------------------*/
 // start game function
 // time interval function
 // delay function
 // clickedDiv function
 // checkGameEnded function

/*----------------------------- Event Listeners -----------------------------*/
//add an event listener for the start button
//add an event listener for each div


// #### The game should take place on a 5 by 5 grid of cells, centered on the screen (a lot like the daft punk soundboard!)
// #### A start button should start the game...
//  <br/>

// ### When the game starts:

// * Every 2 seconds, a new 'mole' should appear in a random cell. When implementing, I recommend using a .mole class to add a mole to a cell. Style it how you wish!
// * If the player clicks the mole, the mole is removed, and the player gets 100 points.
//     * **hint:** Think about what method we can use to check for classes on an element...
// * If the player doesn't click the mole in time, the mole disappears, and the player loses a life.
// * If 3 moles are not clicked in time, the game ends.
// * When the game ends, alert the final score.

// **Note: Moles always appear every 2 seconds, whether the player clicks the current mole or not, until the game is over**
// <br/>

// **Bonus tasks:**
// * See if you can spot any bugs with your solution, and fix those.
// * Display the score on the screen (extra challenge: check out localStorage even after the page has been refreshed, see if you can save a high score)
// * Add a reset button
// * A bit more tricky: Every time a mole is clicked, slightly decrease the time the next mole takes to appear. 

let lives = 3
let score = 0


const divs = document.querySelectorAll('.cell')
const startButton = document.querySelector('button')
const scoreElement = document.querySelector('#score-display')
const livesElement = document.querySelector('#lives-display')

function startGame() {
    lives = 3
    score = 0
    scoreElement.innerHTML = 0
    livesElement.innerHTML = "❤️❤️❤️"
    startButton.disabled = true 
    timer = setInterval(() => {
        const randomIdx = Math.floor(Math.random() * divs.length)
        const selectedDiv = divs[randomIdx]
        selectedDiv.classList.add('mole')
        timeout = setTimeout(() => {
            if (selectedDiv.classList.contains('mole')) {
                selectedDiv.classList.remove('mole')
                lives --
                livesElement.innerHTML = livesElement.innerHTML.substring(0, livesElement.innerHTML.length - 2)
                checkGameEnded()
            } 
        },1950)
    },2000)
}

function clickedDiv(event) {
    if (event.target.classList.contains('mole')) {
        event.target.classList.remove('mole')
        score = score + 100
        clearTimeout(timeout)
        scoreElement.innerHTML = score
    }
}

function checkGameEnded() {
    if (lives === 0) {
        livesElement.innerHTML = "💔"
        clearInterval(timer)
        setTimeout(() => {
            alert("This game has ended. Try again!");
            startButton.disabled = false
        }, 100);       
    }
}

divs.forEach(div => div.addEventListener('click', clickedDiv));

startButton.addEventListener('click', startGame);