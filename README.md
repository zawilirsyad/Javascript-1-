# JavaScript Introduction Task

## Task Overview

This project consists of several tasks designed to introduce JavaScript concepts such as working with objects, arrays, conditionals, loops, and destructuring.

### Task 1: Create a Biodata Object

- Create a variable named `biodata` with the following properties:
  - `name`: (string) your name
  - `age`: (number) your age
  - `hobbies`: (array) a list of your hobbies
  - `isMarried`: (boolean) marital status
  - `schoolList`: (array of objects) representing your education history. Each object should have:
    - `name`: school name (string)
    - `yearIn`: start year (number)
    - `yearOut`: end year (number)
    - `major`: major (string or `null` if none)
  - `skills`: (array of objects) listing your skills with the properties:
    - `skillName`: the name of the skill (string)
    - `level`: the level of expertise (string, can be beginner, advanced, or expert)
  - `interestInCoding`: (boolean) whether you are interested in coding

### Task 2: Calculate Average UN Score with Grade

Create a program to calculate the average of four subjects: 
- Bahasa Indonesia
- Bahasa Inggris
- Matematika
- IPA

The program should:
- Validate that all scores are filled in
- Calculate the average score
- Assign a grade based on the average:
  - 90 - 100: A
  - 80 - 89: B
  - 70 - 79: C
  - 60 - 69: D
  - 0 - 59: E

### Task 3: Inverted Triangle of Numbers

Create a program with a variable named `printSegitiga` that contains a number and generates an inverted triangle pattern of numbers. 

Example for `printSegitiga = 5`:

### Task 4: Data Manipulation with Spread Operator and Destructuring

Given the following data:

```javascript
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

1. Use the spread operator to update the object with:

name: your name
email: your email
hobby: your hobby

2. Use destructuring to extract the street and city properties from the address object.

## How to Run

Clone the repository
Open the index.js file
Run the JavaScript code in your preferred browser or Node.js environment.

