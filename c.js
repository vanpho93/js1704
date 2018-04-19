function getRandom(n) {
    return Math.round(Math.random() * n);
}

console.log(getRandom(3));

// console.log(Math.random());
// console.log(Math.round(1.4));
// console.log(Math.ceil(1.1));
// console.log(Math.floor(1.9));

/*

*****
 ****
  ***
   **
    *

*/
for(let i = 1; i <= 5; i++) {
    let str = '';
    for(let j = 1; j <= 5; j++) {
        const dk = i <= j;
        str += (dk ? '*' : ' ');
    }
    console.log(str);
}
