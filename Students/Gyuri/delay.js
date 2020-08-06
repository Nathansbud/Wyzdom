//Gyuri's Delay:

/*
Write a function delay that accepts two arguments, a callback and the wait time in milliseconds. 
Delay should return a function that, when invoked waits for the specified amount of time before executing. 
HINT - research setTimeout();
*/

//setTimeout()

setTimeout(function() {
  console.log("adad")
}, time)

function delay(callback, waitMS) {
  setTimeout(callback, waitMS)
  return function() {
    setTimeout(callback, waitMS)
  }
}








































//Gyuri's Problem: Not using setTimeout, not returning the delay function
function fixedDelay(callback, waitMS) {
    return function() {
      setTimeout(callback, waitMS)
    }
}

let delayFn = fixedDelay(() => console.log("HELLO"), 1000)
delayFn()