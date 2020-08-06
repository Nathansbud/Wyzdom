//Gyuri's After
/*
Write a function after that takes the number of times the callback needs to be
called before being executed as the first parameter
and the callback as the second parameter.
*/
function after(num, callback) {
    let timesCalled = 0
    return function(...args) {
        timesCalled+=1
        if(timesCalled >= num) {
            return callback(...args)
        } else {
            return undefined
        }
    }
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

/*
- Take in N times to run
- Run n times
- After n + 1 times, run the callback function I want
*/


// console.log(afterCalled('world')); // -> undefined is printed
// console.log(afterCalled('world')); // -> undefined is printed
// console.log(afterCalled('world')); // -> 'hello world' is printed






























//Gyuri's Problem: Not counting number of calls, not returning function, ...
function after(num, callback) {
    let count = 0
    return function(...args) {
        count++
        if(count >= num) return callback(...args)
    }
  }

