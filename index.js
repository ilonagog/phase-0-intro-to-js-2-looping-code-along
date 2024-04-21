// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const newArr = [];
function writeCards(names, birthday) {
  for (let i = 0; i < names.length; i++) {
    return newArr.push(
      `Thank you ${names[i]}, for the wonderful ${birthday} gift!`
    );
  }
  return newArr;
}
function countDown() {
  let countDown = 10;
  while (countDown >= 0) {
    console.log(countDown--);
  }
}
