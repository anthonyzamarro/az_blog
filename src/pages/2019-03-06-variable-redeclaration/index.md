---
path: '/variable-redeclaration'
title: 'Variable Redeclaration'
published: true
author: 'Anthony'
date: '2019-03-06'
---

One of the most popular releases of ECMAScript 2015, also known as ES6, is the different ways to declare variables. With these new standards comes new functionality for how variables interact with the rest of your program. Some issues that arose with the `var` keyword include variable redeclaration, variable hoisting, and and variable scope. We'll explore what these are and how the ES6 deals with them.


## Variable Redeclaration

Originally, variables were declared with the reserved keyword `var`:

```
	var number = 1;
	var numbers = [1,2,3,4]
	var getNumber = function(n) { code... }
```

We could assign `var` a value, and then later on assign the same `var` a different value in the same manner.

```
	var number = 3;
	console.log(number); // 3
	var number = 4;
	console.log(number); // 4
```

In the code above we are assigning the variable `number` to the value 3, logging the variable to the console, then assigning another variable with the same name but to a different value and logging the variable to the console.

What gets logged the first time is the value 3 and the second time is the value 4. This can become a problem on large codebases because the name of the variable may be used in several locations causing collusions and possibly changing the output of our program. Let's examine this scenario using `let` and `const`.

```
	let number = 3;
	console.log(3); 
	let number = 4;
	console.log(4);
```

When we log this we receive this error:
***Uncaught SyntaxError: Identifier 'number' has already been declared***
Using `let` makes variable redeclaration impossible and thus saves our program from producing unexpected results.
Now, lets try this using `const`.

```
	const number = 3;
	console.log(3); 
	const number = 4;
	console.log(4);
```

Logging this, we get the same error: ***Uncaught SyntaxError: Identifier 'number' has already been declared***
This too saves our program from producing unexpected results, but what if we tried this:

```
	let number = 3;
	console.log(3); // 3 
	number = 4;
	console.log(4); // 4
```

With let we are able to *reassign* the variable number, but we cannot *redeclare* a new variable with the same name as number. This helps to keep our programs free of variable redeclarations, but allows us to reassign variables when we need to. However, reassignment is not possible with `const`:

```
	const number = 3;
	console.log(3); 
	number = 4;
	console.log(4);
```

Logging this, we get this error: ***Uncaught TypeError: Assignment to constant variable.***
`const` prevents us from reassigning variables. What this means is that we can use `const` to declare variables that we *know* will not be reassigned later on in our program (hence they will remain constant) and we can use `let` when we feel that the variable's value we are declaring now may change later on.
