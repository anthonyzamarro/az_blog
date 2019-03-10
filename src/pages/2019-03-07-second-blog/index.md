---
path: '/second-post'
title: 'Var / Let / Const: Variable Hoisting'
published: true
author: 'Anthony'
date: '2019-03-07'
---

# Variable Hoisting

When you declare variables or functions and then run your program, the JavaScript Engine brings all of those declarations to the top of your file for some un-godforesaken reason. This can cause big problems:
```
console.log(k); // undefined

var k = 0;

console.log(k); // 0;

```
The first `console.log` will output `undefined`, which is odd because we declared `var k` later on in the program. We would expect some error to be thrown. Behind the scenes, the JavaScript engine brings, or hoists, `var k` to the top of the file. So, even though we log the variable before it is declared, the JS Engine quickly scans the file and hoists all declared variables to the top, *but not the variable's value*.

Thus, the declared variable `k` is recoginzed as being present in the program, but its value is not recognized until we reach the final `console.log` in which case `0` outputs. This is because we were able to assign it a value after the variable was hoisted.

How does `let` and `const` fix this? Let's look at `let`:

```
console.log(k); // reference error 

let k = 1;

console.log(k); // 1

```

Using `let` we gives us more intuitive results. We haven't declared `k` yet, so the error we get is ***Uncaught ReferenceError: k is not defined***. Also, since we assign `k` a value without declaring it the second `console.log` results in `undefined` which makes sense. The variables are still hoisted, *all variables are*, but the output is what we expect when using `let`.

Let's see with `const`
```
console.log(k); // error, 

const k = 2;

console.log(k); // 2

```
Using `const` also gives us the error ***Uncaught ReferenceError: k is not defined ***. This also produces intuitive results. 

`let` and `const` helps us deal with hoisting in JavaScript by giving us appropriate errors when we try to use our variables before their decrlations. It's important to know that *all variables* are hoisted no matter what, but the new ES6 features discussed here show us how we can make our programs more intuitive.

