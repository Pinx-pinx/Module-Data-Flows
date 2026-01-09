# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    f1();
8    console.log(x);
```

Explain why line 5 and line 8 output different numbers.
Answer : Line 5 logs 2 because inside the function f1(), there's a local x with a value of 2. Line 8 logs 1 because the x outside the function is still 1. The two x variables are separate, one inside the function and one outside.

## Question 2

Take a look at the following code:

```js
let x = 10;

function f1() {
  console.log(x);
  let y = 20;
}

console.log(f1());
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
Answer : f1() logs x, which is 10. The y inside f1() is local to the function, so console.log(y) outside the function will throw an error because y is not defined outside the function.
## Question 3

Take a look at the following code:

```js
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
Answer : f1(x) does not change x because x is a primitive value (number). In f2(y), y is an object, and the function modifies its x property directly. So y.x becomes 10, but x remains 9 because it’s not modified.