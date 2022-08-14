# Activity: A Dice Roller
We're going to create a simple dice simulator. "Simulator" maybe sounds more epic than this really is. But by the end of this assessment, someone could certainly use our Dice Roller in place of real, physical dice.

## Instructions

### 1. Get the new project started

- Create a new project with `index.html`, `style.css`, and `main.js` files. Go ahead and make sure this project is a `git` repo and ready to roll.

### 2. Create the basic user interface while thinking about the user's experience

<fieldset>
  <p>
    Understanding the user's experience is the key to understanding the design goals of any application. "Design," in this sense, doesn't just refer to the way the application is <em>presented</em> to the user, but to the way the code itself is <em>designed to function.</em>
  </p>
</fieldset>

**The user should be able to tell you how many dice they want to roll:**
  - **HTML Task:** Create a [text input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text).
  - Big Picture: Eventually, this text input element is where you will get user input, and will determine how many times you will "roll the die."

**The user should be able to tell you when they are ready to roll the dice:**
  - **HTML Task:** Create a "Roll!" [button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).
  - Big Picture: Eventually, you'll have a click event listener ready to "roll the die." You'll record each individual die roll in a `dieRoll` array.

**The user should see the total of all the dice that were rolled:**
  - **HTML Task:** Create a "Total" element on the page.
  - Big Picture: Eventually, when the user clicks "Roll!", you will total the results of all the dice that were rolled and add the sum to the "Total" area on the page using `innerHTML`.
  - An Example Scenario: The user inputs "3" in the text input element, then clicks the "Roll!" button. The dice rolled are 2, 4, and 1, so you will sum these results and show the total "7" on the page.

**The user should be able to tell you when they are ready to see the roll of every die individually (in addition to the Total):**
  - **HTML Task:** Create a "Show All Rolls" button element.
  - Big Picture: Eventually, you'll have a click event listener on this button, too, ready to display for the user all the rolls you've recorded in your `dieRolls` array.

**The user should see the result of every individual die on the page (in addition to the Total):**
  - **HTML Task:** Create an "All Rolls" element on the page. This should be an [Ordered List](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) tag. Don't add any List Item tags to it yet. You will add the LI elements later, via JavaScript.
  - Big Picture: Eventually, when the user clicks "Show All Rolls", you will loop through each roll in the `dieRolls` array and, for each, create a List Item tag (`<li>...</li>`) containing the result of that single die roll. You will add each LI element to the `innerHTML` of an "All Rolls" Ordered List you are creating in this step.

**When complete, you should see something like this:**

![Example page](https://i.imgur.com/fVBXSAc.gif)

### 3. On user request, roll those dice and show the total to the user

- Create a variable, named `dieRolls`, and define it as an empty array (which later you will use as a list of each die that has been rolled). (1 point)
- Add a click event listener for your "Roll!" button. (1 point)
- On click, you need to get the `value` from the text input box, so that you know how many dice to roll. Assign this to a variable within your event listener. (1 point)
- Then you need to roll the dice. It is time to write a loop. Use `Math.random()` to simulate rolling a single six-sided die X number of times, where X is the number from the text input box. X is also the number of times you will loop. (4 points)
- _Push_ the result of each roll onto your `dieRolls` array. (2 points)
- Sum all your dice rolls and display the result in the Total area on the page using `innerHTML`. (2 point)

<fieldset>
  <p>
    <em>You got this.</em> It might seem like a lot, but you can "eat the elephant one bite a time."
  </p>
  <p>
    The only potentially new thing in this assessment is using <code>Math.random()</code> to produce a random number from 1 through 6, to simulate a six-sided dice roll. But we have used <code>Math.random()</code> to produce a random number between 0.0 and 1.0 (excluding 1.0). A little math, or a little Internet research, should enable us to overcome this challenge.
  </p>
  <p>
    If you copy code from online, and you wonder whether you should cite your source, it can't hurt to cite!
  </p>
</fieldset>

### 4. On user request, show all of the individual die rolls to the user (4 points)

- Add a click event listener to your "Show All Rolls" button.
- Write a new loop: Loop over the `dieRolls` array, creating a new List Item for each number and adding that List Item to the `innerHTML` of the "All Rolls" element. This LI should show the value of the roll. (4 points)

<fieldset>
  <p>
    Don't allow yourself to get stuck too long on any one problem. Reach out to your peers and instructional team to get unstuck!
  </p>
</fieldset>

### Hints & Reminders

- Don't worry much about styling until you complete the minimum requirements. Meet the minimum requirements before doing anything extra.
- When you create an HTML element on the page for a user, and you want to be able to control it with JavaScript, you must also write a `querySelector` and assign that element to a variable in JavaScript. Try to keep every `querySelector` at the very top of your JavaScript file. You could define all of your elements at once near the beginning of the project, or you could define each, one at a time, as you need them. Do you have a preference?
- Avoid writing one event listener inside the other. Keep them separate.
- Creating a new element and adding it to an existing element which is already on the page can be done with strings, concatenation, and `innerHTML`. Here is an _example_ of one way you might create a new die element (presuming you have the `numberRolled` and `allRollsElement` variables already defined elsewhere in your code):

    ```js
    const newDiceString = '<li class="dice">' + numberRolled + "</li>";
    allRollsElement.innerHTML += newDiceString;
    ```

### Common Problems

- Infinite loop? Make sure your `while` condition will eventually fail (will evaluate as false).
- Looping one time more often or less often than expected? Make sure you are thinking through whether to use `<` versus `<=` in your `while` condition.

### Extra Credit

- Create a reset button which, on click, will empty the array and the `innerHTML` of your Total and All Rolls elements.
- Make each "dice roll" element look more like an actual six-sided (cube) die. You don't have to show dice pips – numbers are fine. Just find some ways to style these "dice" elements to help the user "see" them as dice.
- Create a user input box, where a user can specify the number of sides on the dice. For example, instead of six-sided dice, the user could opt for a 20-sided die.