# Explanation of the CSV Helper File

This file contains a *helper function* that reads a CSV file and returns the data inside it as an array of JavaScript objects.

### ✔ What the function does

* It takes a *CSV file path* as input.
* Reads the file *line by line*.
* Converts each line into a *JavaScript object*.
* Returns *all the rows* as an array.

---

##  Breaking down the code

### ⿡ Importing required modules

ts
import * as fs from 'fs';
import csv from 'csv-parser';


* *fs* → Node.js module that helps us read/write files.
* *csv-parser* → A package that helps convert CSV content into objects.

---

## ⿢ Function: readDataFromCSV

ts
export async function readDataFromCSV(filePath: string): Promise<any[]> {


* filePath → path of the CSV file you want to read.
* Returns a *Promise* that will eventually give an *array of rows*.

---

## ⿣ Creating a Promise

ts
return new Promise((resolve, reject) => {


We use a Promise because reading a file takes time (asynchronous).
So we return the data *once the file is fully read*.

---

## ⿤ Creating an empty array to store all rows

ts
const data: any[] = [];


Every time we read a row from the CSV, we will push it inside this array.

---

## ⿥ Reading the file using a stream

ts
fs.createReadStream(filePath)


* Think of this as reading the CSV *slowly*, line by line.
* Useful for big files so Node does not crash.

---

## ⿦ Passing the file through a CSV parser

ts
.pipe(csv())


* This converts CSV lines into *JavaScript objects* automatically.
* Example:
  CSV line: name,age becomes { name: "John", age: "25" }

---

## ⿧ Event: Reading each row

ts
.on('data', (row) => {
  data.push(row);
})


* Every time a row is found → push it into the data array.
* Event name: 'data' means *row received*.

---

## ⿨ Event: File reading completed

ts
.on('end', () => {
  resolve(data);
})


* 'end' event → all rows finished reading.
* Now we *resolve the Promise* with complete data.

So whoever calls this function will get:

ts
[
  { name: "John", age: "25" },
  { name: "Sara", age: "30" }
]


---

## ⿩ Event: Handling errors

ts
.on('error', (error) => {
  reject(error);
});


* If file is missing or corrupted → reject the Promise.
* Allows caller to catch errors with try/catch.

---

# 🎉 Final Summary

This function:

| Step | What Happens                                    |
| ---- | ----------------------------------------------- |
| 1    | Takes a CSV file path                           |
| 2    | Opens the file as a stream                      |
| 3    | Reads it line by line                           |
| 4    | Converts each line to an object                 |
| 5    | Pushes all rows into an array                   |
| 6    | Returns the array once file reading is complete |

---

# How you can use it

ts
const users = await readDataFromCSV('./data.csv');
console.log(users);


This will print all the CSV rows as objects.

---

