//Gyuri's Once
/*
Write a function once that accepts a callback as input and returns a function. 
When the returned function is called the first time, it should call the callback and 
return that output.
 If it is called any additional times, instead of calling the callback again it will simply 
 return the output value from the first time it was called.


*/
function once(callback) {
    let hasBeenCalled = false
    let storedResult;
    return function(...args) {
        if(!hasBeenCalled) {
            storedResults = callback(...args)
            hasBeenCalled = true
        }
        return storedResults
    }
}

/*
Take a function that runs only one time, every other time it returns the result of the first run
- We need something that tracks if it has run -> boolean
- We need something that is running -> callback, we pass that in
- We need to store our result 

*/



































//Gyuri's Problem: Not caching the result anywhere!
function fixedOnce(callback) {
    let hasCalled = false
    let result = null
    function singleCall(...args) {
        if(!hasCalled) result = callback(args)
    }
    
    if(!hasCalled) singleCall()
    return result
} 