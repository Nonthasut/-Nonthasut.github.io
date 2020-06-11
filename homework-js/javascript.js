// function abc(a,b){
//     console.log(b/a);
//     return b/a
// }
// let result = abc(2,10)

// console.log('value of result'+ result);

function random(min, max) {
    return (Math.random());
}
random(0, 1)


function ucFirst(word) {
    let str = word
    let fnt = str.slice(0, 1)
    let bck = str.slice(1)
    return fnt.toUpperCase() + bck;
}
ucFirst("")


function checkSpam(sentence) {
    let x = sentence.includes("xxx");
    let y = sentence.includes("viagra");
    z = [x, y]
    return z;
}
checkSpam("xxxviagra")





let style = ["Jazz", "Blues"];
style.push("Rock-n-Roll");
style[1] = "Classic";
style.shift;
style.unshift("Pap", "Reggae")



function sumInput(fill) {
    let arr = [];
    let pr = Number(prompt())

}
sumInput()



let array1 = [1, 2, 30, 400];
let array2 = array1.map(function (x) {
    return x * 2
})

let array1 = [1, 2, 3, 4];
let x = array1.join();
let array2 = x.split(',');

let array1 = [1, "1", 2, {}];
let sel = array1.splice(0);
let array2 = array1.concat("number", "string", "number", "object");


let array1 = ["apple", "banana", "orange"];
let array2 = array1.map(item=>item.toUpperCase());


let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 }
];
let array2 = array1.map(item => item.name);


let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 }
];
let array2 = array1.map(item => item.age);

let array1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" }
];
let array2 = array1.map(item => item.name + " " + item.surname);

let array1 = [1, 3, 4, 5, 6, 7, 8];
let array2 = array1.map(item=>{item%2
if(item% 2 == 0) 
{return "even";}
else 
{return "ood";}
}
)


let array1=[1,-3,2,8,-4,5]
let array2 = array1.map(item=>{
item
if(item<=0)
{return item*-1;}
else
{return item*1;}
})

let array1=[100,200.25,300.84,400.3]
let array2 = array1.map(item=>item.toFixed(2));

let array1 = [
    {name: "apple", birth:"2000-01-01"},
    {name: "banana", birth:"1990-10-01"},
    {name: "watermelon", birth:"1985-12-01"}
]
let ap = array1.map(function(item){
    let numYear = new Date().getFullYear() - new Date(item.birth).getFullYear();
    item.age= numYear;
    return item
})
console.log(ap)



// 12


let array1 = [
    {name: "apple", birth:"2000-01-01"},
    {name: "banana", birth:"1990-10-10"},
    {name: "watermelon", birth:"1985-12-30"}
]
let array2 = array1.map(function(item)
{

let na = item.name
let day = new Date(item.birth).getDate();


let mth = new Date(item.birth).getMonth();
let nmth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

let year = new Date(item.birth).getFullYear();
let pat = '"<tr>\n'+'<td>'+na+'</td>\n'+'<td>'+day+' '+nmth[mth]+' '+year+'</td>\n'+'</tr>"';
return pat
}
)
console.log(array2)

array1 = [1,2,30,400]
console.log(array1.filter(item=>item>10));

array1=[1,2,3,4]
console.log(array1.filter(item=>item%2!=0));

array1=[1,"1",2,{}]
let fil = array1.filter(function(item){
    return typeof item==="number"
})
console.log(fil)

array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
console.log(array1.filter(item=>item.length>6));


let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
  ];
console.log(array1.filter(item=>item.age<18));

let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
  ];
  console.log(array1.filter(item=>item.age!=32));

let array1 = [1, -3, 2, 8, -4, 5]
console.log(array1.filter(item=>item>=0));

let array1 = [1,3,4,5,6,7,8]
console.log(array1.filter(item=>item%3==0));


array1 = ["peach", 1, -3, "2", {}, []]
console.log(array1.filter(item=>item.typeof==="string"));

array1 = ["peach", 1, -3, "2", {}, []]
let array2 = array1.filter(function (item){
    return typeof item==="string"
})
console.log(array2);

array1 = ["APPLE", "appLE", "PEACH", "PEach"]
let array2 = array1.forEach(fill)
3.

console.log(array2);







