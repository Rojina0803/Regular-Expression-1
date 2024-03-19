//Regular Expression

const regex=/~/g
const text="I am in ~."
console.log(text.replace(regex,"despair"))

const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
console.log(myArray);

const myRel = new RegExp("d(b+)d", "g");
const myArrayy = myRel.exec("cdbbdbsbz");
console.log(myArrayy);

const myReg = /d(b+)d/g;
const myArr = myReg.exec("cdbbdbsbz");
console.log(`The value of lastIndex is ${myReg.lastIndex}`);

const regx=/\w/g;
const txt= "sfdgcjhdsgjcuaegvdshcjqavdfcjhavsdcjhadsvcn";
const arri= regx.exec("yrfdgjhc");
console.log(arri);


let regec =/dog/g;
console.log(regec);
console.log(regec.source);

//Function to Match the Expression
let s="This is a cute dog and a siberian husky dog."
let result= regec.exec(s)
console.log(result);
 result= regec.exec(s)
console.log(result);
 result= regec.exec(s)
console.log(result);

let regular=/aunty/i;
let str="I have one Aunty who is cute and another AUnty who is a teacher and also another auNty who is very homely."
let rewsult= regular.exec(str); // returns array
console.log(rewsult);
console.log(rewsult.index);// gives index of match
console.log(rewsult.input);

rewsult= regular.exec(str)
console.log(rewsult);

rewsult= regular.exec(str)
console.log(rewsult);

rewsult= regular.exec(str)
console.log(rewsult);

let rex= regular.test(str)
console.log(rex)