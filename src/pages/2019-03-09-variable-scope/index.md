---
path: '/variable-scope'
title: 'Variable Scope'
published: true
author: 'Anthony'
date: '2019-03-09'
---


In previous versions of JavaScript, using `var` led to peculiar situations in the context of scope. Now with `let` and `const` released in ES6 there are new dynamics involved with scoping in JavaScript.

## Variable Scope

What would you expect the output of this code to be?

```
var foo = 3;

if (true) {
	var bar = 2;
}

console.log(bar);
	
```
We defined variable `foo` outside of the if statement and another variable `bar` inside of it. But we are able to get the value of `bar` outside of the if statement. This is because of [hoisting](/second-post), which is when the JavaScript Engine moves all variable and function declarations to the top of the code. So, even though we defined `bar` inside of an if statement we are able to access it outside of the if statement scope. Using `let` can fix this:

```
var foo = 3;

if (true) {
	let bar = 2;
}

console.log(bar); // ReferenceError

```

Now when we try to access `bar` outside of the if statement, we get ***Uncaught ReferenceError: bar is not defined***. This is because `let` creates a block scope context for itself. This means that it can only be used in whatever brackets {} are surrounding it. This makes our code more intuitive and easier to understand because we expect our variable declarations to only be accessible from within the scope in which they are defined. This makes for cleaner and more intuitive code.

`const` provides the same features.
```
var foo = 3;

if (true) {
	const bar = 2;
}

console.log(bar); // ReferenceError

```

Again, we get ***Uncaught ReferenceError: bar is not defined***. `const` too creates a blocking scope context for itself wherever it is defined which brings us the same expected behavior that `let` brings. 
