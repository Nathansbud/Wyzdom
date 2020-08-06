//Gyuri's forEach
function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

console.log(typeof forEach) 
forEach(['a', 'b', 'c'], function(elem) {
    console.log(elem)
})

function map(arr, callback) {
    let newArr = []
    forEach(arr, function(elem) {
        newArr.push(callback(elem))
    })
    return newArr
}

console.log(map([3,4,5], function(n) {
    return n - 2
}))


// // [1, 2, 3].forEach((element) => console.log(element))






















// //Gyuri's Problem: For Each needs to use for!

// function fixedForEach(arr, callback) {
//     for(let i = 0; i < arr.length; i++) {
//         callback(arr[i])
//     }
// }



// fixedMap([3, 4, 5], el => el - 2)