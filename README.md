# QA Graduate Intern JavaScript Exercise

Welcome to your JavaScript coding challenge. This exercise is designed to help you learn the fundamentals of JavaScript while preparing you for testing applications and working with the **Shesha framework**.

This assignment is intended to be completed within **2 days**. It is broken down into **progressive sections**, each focusing on a different JavaScript concept and its use in real-world testing or development scenarios. You will use **Node.js** to run your scripts, and test real-world APIs to gain hands-on experience.

## 🚀 Getting Started

### Prerequisites

* Node.js installed: [Download Node.js](https://nodejs.org/)
* Basic understanding of command-line usage

### How to Run JavaScript Files

1. Open terminal or command prompt
2. Navigate to the project directory
3. Run a JS file with:

```bash
node <filename>.js
```

---

## 📂 Project Structure

```
qa-js-exercise/
├── README.md
├── examples/
│   ├── api.js
│   ├── arraysandloops.js
│   ├── formattedstrings.js
│   ├── functions.js
│   ├── stringmanipulation.js
│   ├── variablesandstring.js
├── exercises/
│   ├── 1_variables.js
│   ├── 2_strings.js
│   ├── 3_formatted_strings.js
│   ├── 4_arrays_loops.js
│   ├── 5_functions.js
│   ├── 6_api_call.js
│   └── 7_debugger.js
```

---

## 🧠 Sections and Exercises

### 1. Variables and Data Types

**Concept:** Introduction to `var`, `let`, and `const`. Understanding primitive types: string, number, boolean, null, undefined.

**Use Case:** Storing and manipulating test data.

**Examples:**

```js
let testName = "Login Test";
const isPassed = true;
let executionTime = 2.35;
```

**Exercises:**

1. Declare and initialize one variable of each type.
2. Change the value of a `let` variable and print both old and new values.
3. Log each variable and its type using `typeof`.

File: `1_variables.js`

---

### 2. String Manipulation

**Concept:** Using common string methods: `.toUpperCase()`, `.toLowerCase()`, `.includes()`, `.replace()`, `.split()`, `.trim()`.

**Use Case:** Parsing and validating test results or UI text.

**Examples:**

```js
let response = " Test completed successfully ";
console.log(response.trim().includes("completed"));
```

**Exercises:**

1. Create a string representing a response message.
2. Clean up whitespace and convert it to lowercase.
3. Check if certain keywords exist (e.g. "success", "fail").
4. Replace part of the string with another word.

File: `2_strings.js`

---

### 3. Formatted Strings (Template Literals)

**Concept:** Using backticks and `${}` to combine variables in strings.

**Use Case:** Generating readable logs and dynamic messages.

**Examples:**

```js
let test = "Login";
let status = "passed";
console.log(`Test '${test}' has ${status}.`);
```

**Exercises:**

1. Define variables for test name, tester name, duration, and result.
2. Construct and log a formatted test report string using template literals.

File: `3_formatted_strings.js`

---

### 4. Arrays and Loops

**Concept:** Working with lists using arrays. Using `for`, `forEach`, and `map()` to iterate.

**Use Case:** Executing test steps or verifying multiple results.

**Examples:**

```js
let steps = ["Navigate to login", "Enter credentials", "Submit form"];
steps.forEach((step, i) => console.log(`Step ${i + 1}: ${step}`));
```

**Exercises:**

1. Create an array of 5 QA test steps.
2. Log each step with its index.
3. Use `map()` to convert each step to uppercase.
4. Use a `for` loop to simulate step execution by logging: `Executing step X...`

File: `4_arrays_loops.js`

---

### 5. Functions

**Concept:** Writing reusable functions, understanding parameters and return values.

**Use Case:** Wrapping test logic into reusable blocks.

**Examples:**

```js
function validateStatus(code) {
  return code === 200 ? "Success" : "Error";
}
console.log(validateStatus(200));
```

**Exercises:**

nb : follow ES6 standards

1. Write a function `logResult(testName, passed)` that logs pass/fail.
2. Write a function `calculateDuration(startTime, endTime)` that returns elapsed time.
3. Create a function that returns a formatted report from a test case object.

File: `5_functions.js`

---

### 6. Calling Real APIs

**Concept:** Using `fetch()` (via `node-fetch`) to call and parse REST APIs.

**Use Case:** Validating endpoint responses or loading test data.

**Examples:**

```js
const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => console.log("Title:", data.title));
```

**Exercises:**

1. Fetch users from `https://jsonplaceholder.typicode.com/users`.
2. Log each user’s name, email, and company.
3. Fetch posts from `/posts` and log titles only.
4. Count how many posts contain the word "qui" in the title.

File: `6_api_call.js`

---

## ✅ Submission Instructions

1. Fork the repo you were provided (Please find out how to fork a repository )
2. Complete all exercises in the `exercises` folder
3. run node main in exercises folder to see final results
3. Commit and push your changes
4. Notify your mentor/facilitator when done

---

## 📚 Optional Learning Resources

* [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [Node.js Docs](https://nodejs.org/en/docs/)
* [REST API Basics](https://restfulapi.net/)

Good luck, and happy testing! 🧪
