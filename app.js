// //Async
// let returnedNum = getNum(2);

// function getNum (num) {
//     console.log(`Number obtained!`);
//     return num;
// };

// function multiplyretNum (returnedNum) {
//     let result = returnedNum * 4;
//     console.log(result);
// };

// setTimeout(() => {
//     multiplyretNum(returnedNum);
// }, 2000);

// //Callbacks
// function getWords() {
//     console.log('Blake');
//     setTimeout(() => {
//         console.log('Robin');
//     }, 3000);
//     setTimeout(() => {
//         console.log('Kyle');
//     }, 2000);
//     setTimeout(() => {
//         console.log('Tim');
//     }, 1000);
// };

// getWords();

// function countdown(num, callback) {
//     for (let i = num; i >= 1; i--) {
//         setTimeout(() => {
//             if (i === 1) {
//                 return callback();
//             }
//         }, num * 1000);
//     }
// };

// function done() {
//     console.log('Countdown complete!');
// };

// countdown(3, done);

//Promises

let globalVar = true;

let orderingChickenSandwhich = new Promise(function (resolve, reject) {

    if(globalVar != true) {
        let food = {
            sandwhich: 'chicken',
            veggies: 'lettuce'
        };
        resolve(food);
    } else {
        let err = new Error('An error has occurred!');
        reject(err);
    }

});

function orderFood() {
    orderingChickenSandwhich
    .then(food => {
        console.log(food);
    }).catch(err => {
        console.log(err);
    });
}

orderFood();

//Chaining Promises

// let multiplyNum = new Promise(function (resolve, reject) {

//     setTimeout(() => {
//         let num = 1
//         resolve(num);
//     }, 2000);
// })
//     .then((num) => {
//         console.log(num);
//         let num2 = num * 2;
//         return num2;
//     })
//     .then((num2) => {
//         console.log(num2);
//         let num3 = num2 * 4;
//         return num3;
//     })
//     .then((num3) => {
//         console.log(num3)
//         let num4 = num3 * 6;
//         console.log(num4);
//     });

