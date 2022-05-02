console.log("Working");


//method 1 - creating and assigning to an array
let names = ["Ribhu", "Lakhi", "Kiran", "riya", "Supriya"];
console.log(names);

//method 2- create on empty array and then start assigning values to them as per the index position
let name2 = [];

name2[0] = "Ruddof";
name2[1] = "Kuldeep";
name2[2] = "Mary";
name2[3] = "Mohan";
console.log(name2);

// method create an array constructor

let name3 = new Array("Raju", "Shyam","Baburao")
console.log(name3);

let name4 = [] 
name4[0] = "Riya";
name4[1] = "21";
name4[2] = "8";
name4[3] = "True";
console.log(name4);

//Push, Pop, shift, Unshift, Length, indexof, LastIndexof

//Push - adds value at the last position only

names.push("Shyam");
names.push(7);
console.log(names);

//pop helps us to remove the value from the last position

names.pop();
console.log(names);

//Shift removes from the first position and unshift adds on the first position

name2.shift();
console.log(name2);

name2.unshift("Hrithik");
console.log(name2);

//Length

console.log(names.length);

//indexof, LastIndexof, join,concat,reverse, sort, slice,splice

let num1 = [1,2,3,4,4,,5,5,8];
let num2 = [6,7,8,9,10];
console.log(num1.indexOf(5));
console.log(num1.lastIndexOf(6));

//concat/join donot cjhanges the original array
num1.concat(num2);
console.log(num1);
console.log(num2);
console.log(num1.concat(num2));
console.log(num1.join(" * "));

//reverse
//sort modifies the original array
console.log(num1.reverse());
let num3 = [5,2,3,4,8,1,4];
console.log(num3.sort());

//console.log(names.sort());
//using sort followed by reverse gives u values arranged in decending order
console.log(names.sort().reverse());

//splice , slice
//first val gives the index and second val gives the num of values to be removed
num3.splice(2,2,3,8,9);
console.log(num3);

//slice

//slice - starting index is inclusive and end index is exclusive i.e not included

num3.slice(2,6);
console.log(num3.slice(2,6));






 
