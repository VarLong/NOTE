// let promise = new Promise(function (resolve, reject) {
//     // if (Math.random * 10 > -1) {
//         resolve(value = "success");
//     // } else {
//     //     reject(error = "error");
//     // }

// });
// promise.then(function (value) {
//     console.log(value);
// }, function (error) {
//     console.log(error);
// });
// -------------------------------------------------------------------->
// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//     setTimeout(reject, 5000, 'error');
    
//   });
// }

// timeout(6000).then((value) => {
//   console.log(value);
// },(error) => {
//     console.log(error);
// });

// -------------------------------------------------------------------->
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('Resolved.');
});

console.log('Hi!');