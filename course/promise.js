
let promise = new Promise((resolve, reject) => {
    let a = 1 + 2
    if (a == 2) {
        resolve('Promise Fulfilled')
    } else {
        reject('Promise not Fulfilled')
    }
})

promise.then((message) => {
    console.log(message + ', promise passed')
}).catch((message) => {
    console.log(message + ', promise failed')
})
