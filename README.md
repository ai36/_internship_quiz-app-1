# QuizApp

<br>

Live demo - [https://internship-quiz-app-1-neon.vercel.app](https://internship-quiz-app-1-neon.vercel.app)

<br>

## Install

```shell
npm install
```
or
```shell
npm i
```

## Run in dev mode

```shell
npm run dev
```

## Run in production mode

```shell
npm run build
```

<br>

## Sprint 1

**Objective**:

Development of a 💬 quiz service, topic — countries, on a bundle — ReactJS and Vite.

The goal of the sprint is to create an SPA application with a single structure, work with the global state and response to events, it is necessary to use custom hooks, utilities, a component approach and other 👍 best practices.

Work in solo mode, in your repository and with your code

**Settings**:
+ Solo, Legacy
+ Estimated time: 15 hours
+ Number of task: 5
+ Technology: React, JS, HTML, CSS


### Task 3

Set up answer validation based on the [design](https://www.figma.com/file/HkBnd1kauGcJD1Ytq1fITk/QuizApp.-1-sprint.-3-task?type=design&node-id=0-1&mode=design&t=84GUv8kT4T40VVhJ-0):

- After selecting an answer and clicking the **"Answer"** button:  
  - The correct option is highlighted in **green**.  
  - If the selected answer is incorrect, it is highlighted in **red**, and the correct one is also highlighted in green.  
  - If the selected answer is correct, only the chosen option is highlighted (in green).  
  - The page must **not reload** during this interaction.

- Ensure that once a country has been used as a **correct answer**, it is no longer included among the incorrect options in future questions (to avoid duplicate correct answers among wrong choices).

- The **"Next"** button remains **disabled** until the user selects an answer.

- After clicking **"Next"** on the last question, display the **quiz results**, showing:
  - Total number of correct answers  
  - Total number of incorrect answers

- Clicking **"Try Again"** returns the user to the **welcome screen**, and all previous answers are reset.

- Clicking the **close (X)** icon should exit the quiz and bring up the **"Welcome"** start screen.


### Task 2

Use a [JSON file](https://projects.preax.ru/api/shared/9256b390-8a47-4a10-94c9-156ff238b642/download) to provide quiz data, containing fields: `question`, `correctAnswer`, and `flag`.

Based on the [design](https://www.figma.com/file/oooP5fMn4EDtdOSkkXjtEM/QuizApp.-1-sprint.-2-task?type=design&node-id=0-1&mode=design&t=mAj3fZrREERwSZz9-0), create the following new components:
- `RadioButton`  
- `Question`  
- `Answer`

Component structure:
- The `Answer` component includes four `RadioButton` components.  
- The `Question` component displays a flag image and a question text.

**Quiz setup behavior:**

- The total number of questions is controlled using "+" and "−" buttons. Each click increases or decreases the number shown in the `Counter` component.  
- The minimum number of questions is **1**. If a number below the minimum is entered, the counter remains at 1.  
- The maximum number of questions is equal to the total number of entries in the JSON file. Once the max is reached, the "+" button becomes disabled.  
- It’s not possible to input a number outside the allowed range.  
- The quiz can be started by pressing the **Enter** key, but only if the current number of questions is within the valid range.  
- After clicking "Start" (via Enter or click), the value in the counter becomes locked and can’t be changed.

**Image requirements:**
- The flag image height should match the design.  
- Flag proportions must not be distorted. Width may vary from the design to preserve aspect ratio.

**After quiz start:**

- Once the number of questions is selected and "Start" is clicked, the quiz should be generated with the specified number of questions.  
- The progress counter’s maximum value should be set to the total number of quiz questions (progress functionality will be added later).  
- For each question, incorrect answers are randomly selected from the list of countries.  
- The total number of answers, including the correct one, must always be **4 options**.

**Important:**  
In this task, implement only the question count selection and the generation of the **first quiz question**.  
Answer validation will be implemented in the next steps.


### Task 1

In an empty working folder, open the terminal and run the following command (make sure to include the dot at the end):  
```shell
npm init vite@latest .
```
When prompted, select **React** as the framework and choose the **JavaScript** option.  
Install the required packages:
```shell
npm install
```
Start the development server with:
```shell
npm run dev
```

Split the UI into the following 4 components: `Button`, `Card`, `Logo`, and `Counter`.  
Place styles in separate `.module.css` files.

Create the layout based on the Figma [designs](https://www.figma.com/file/yKTwPuY9xM9zCUlT6IsROf/QuizApp.-1-sprint.-1-task?type=design&t=fz9ipm7a7KTN6Omb-6) for the following screens:
- Start screen  
- Question screen  
- Result screen  

While working on the task, keep in mind:

- All text, images, and values must match the design exactly.  
- Page content should be centered on the screen.  
- If the window height is smaller than the page content, the page should be scrollable.  
- The background image must remain fixed when scrolling.  
- The minimum screen width should be **1280px**; there is no maximum width limit.

**Important:** This task includes only the layout for all screens. No routing should be used.  
The visible screen should be rendered conditionally. Functionality will be added in future tasks.
