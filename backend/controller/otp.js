// const otp = Math.floor(Math.random() * 9);
// for (let i = 1; i < 6; i++) {
//   console.log(Math.floor(Math.random() * 9));
// }
// console.log(otp);

// const randomNumber = Math.floor(Math.random() * 900000 + 10000);
// console.log(randomNumber);

const randomNumber = (Math.random() * 1000000).toString().slice(0, 6);
console.log(randomNumber);
