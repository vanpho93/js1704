function getRandom(n) {
    return Math.round(Math.random() * n);
}

console.log(getRandom(3));

// console.log(Math.random());
// console.log(Math.round(1.4));
// console.log(Math.ceil(1.1));
// console.log(Math.floor(1.9));

/*

     *
    ***
   *****
  *******
 *********
***********
 *********
  *******
   *****
    ***
     *
*/
for(let i = 1; i <= 11; i++) {
    let str = '';
    for(let j = 1; j <= 11; j++) {
        const soBuocNgang = Math.abs(j - 6);
        const soBuocDoc = Math.abs(i - 6);
        const dk = soBuocDoc + soBuocNgang <= 5;
        str += (dk ? '*' : ' ');
    }
    console.log(str);
}
//https://github.com/vanpho93/docs/blob/master/BaiTap_JavaScript_NodeJS.pdf