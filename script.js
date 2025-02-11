
// Synkron kode:
/* let x = 1
console.log(x)
x++
console.log(x)
x++
console.log(x)
x++
console.log(x)
x++
console.log(x)
x++
 */
/* setTimeout(function() {
    
}, 1000) */


/*
Hi (vent.. 1sek)
How are you (vent 1sec)
Today?

*/
let delay = 1000
/* 
// callback hell example:
setTimeout(() => {
    // forsinket kode:
    console.log("Hi")
    setTimeout(() => {
        // forsinket kode:
        console.log("How are you")
        setTimeout(() => {
            // forsinket kode:
            console.log("Today?")
            setTimeout(() => {
                // forsinket kode:
                console.log("Hi")
                setTimeout(() => {
                    // forsinket kode:
                    console.log("How are you")
                    setTimeout(() => {
                        // forsinket kode:
                        console.log("Today?")
                    }, delay)
                }, delay)
            }, delay)
        }, delay)
    }, delay)
}, delay)

 */



/* for (let index = 0; index < 5; index++) {
    setTimeout(() => {
        // forsinket kode:
        console.log("Hi" + index)
    }, 1000)
    
} */


// set timeout promise handler function:
function setTimeoutPromise(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration))
}


















async function something() {
    // kode

    console.log("Hi")
    await setTimeoutPromise(1000)
    console.log("How are you...")
    await setTimeoutPromise(1000)
    console.log("today?")
}

something()