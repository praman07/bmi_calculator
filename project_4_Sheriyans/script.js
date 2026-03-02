const prompt = require('prompt-sync')();
num=prompt("Enter number to check its factorials");
let fact=1;
let final=[];
for (let i=1;i<=num;i++){
    // console.log(i);
    fact*=i;
    final=fact;
    for(let i=1; i<=final;i++){
        let sum=0;
        console.log(final);
    }
}
