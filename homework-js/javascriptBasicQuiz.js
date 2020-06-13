// Slide-BasicJavaScript-Part1
// 3.4:slide43-44
// Lab1
let human,
name
name = "Pack";
human = name;
console.log(human)
// Lab2
let moneyInPocket = 100;
let nameParent = "fatherName"+"motherName";
let address = "address";
let universeAge = number(100000);
//Slide:63
hello 1
hello name
hello Codecamp
//Slide:64
let name = "Pack";
let age = 26;
let address = "address";
let history = name+age+address+"My history";
//Slide:94
"" + 1 + 0 //1
 "" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 //Infinity
"  -9  " + 5 // -9 5
"  -9  " - 5 //-14
null + 1 //1
undefined + 1 //NaN
" \t \n" - 2 //NaN
//Slide 132-133

let question = prompt("Who am I?");
let ans=(question=="Pack")? "You're awesome.":"You don't know you are.";
alert(ans);

let input = prompt("How much your score?");
let ans;
if(input >= 80){
    alert(ans = "A");
}
else if(input >= 70){
    alert(ans = "B");
}
else if(input >= 60){
    alert(ans = "C");
}
else if(input >= 50){
    alert(ans = "D");
}
else{
    alert(ans = "F");
}

let age = prompt("How old are you?");
let price;
let ans = (age <= 18)? price=2000:price=3500;
alert(price)
//ไม่ได้แก้บัคถ้าพิมพ์ประเภทข้อมูลคือนอกจาก Number เข้าไป

// 1. จงคำนวณค่าด้านล่างต่อไปนี้ และ คอมเม้นตอบหลังคำถาม
5 + "34"            // 534
5 ** 4              // 625
5 - "4"             // 1
10 % 5              //0
5 % 10;             //5
(2 ** 5) % 2        //0
"Java" + "Script"   //JavaScript    
" " + " "           //
" " + 0             //0
20 + 4 + "15"       //2415
true + true         //2
true + false        //1
false + true        //1
false - true        //-1
false - true + false - true + false;    //-2
(true + true) ** 4  //16
19 + true + "20"    //2020
3 - 4               //-1
"Bob" - "bill"      //NaN
"Code" + "Camp" + true + false + null + undefined //CodeCamptruefalsenullundefined


// 2. จงคำนวณค่าเปรียบเทียบต่อไปนี้ และ คอมเม้นตอบด้านหลังเหมือนข้างบน
5 >= 1  //true
0 === 1 //false
4 <= 1  //false
1 != 1  //false
1 == "1"    //true
1 === "1"   //false
"2" == "2"  //true
"2" === "2" //true
"12" !== 12 //true
"15" != 15  //false
"A" > "B"   //false
"B" < "C"   //true
"a" > "A"   //true
"b" < "A"   //false
"bee" > "bbe"   //true
"BeE" < "Bee"   //true
"SonTer" > "Soncom" //false
"circle" > "circles"    //false
"NaRuTo" < "nArUtO" //true
true === false //false
true != true    //false


// 3. สร้าง String ที่มีค่า "Hello, It's me. "Mario"."
let str = '"Hello, It\'s me. "\Mario".\"'











//
function draw(n) {
    let dok = "";
    for (i = 0; i < n; i++) {
        dok += "*";
    }
    console.log(dok)
}
draw(1)

function draw(n) {
    let dok = "";
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            dok += "*";
        }
        dok += "\n";
    }
    console.log(dok)
}
draw(3)

function draw(n) {
    let con = "";
    for (j = 0; j < n; j++) {
        for (i = 0; i < n; i++) {
            con += i + 1
        }
        con += "\n"
    }
    console.log(con)
}
draw(3)

function draw(n) {
    let con = "";
    for (j = 0; j < n; j++) {
        con += j + 1
        con += "\n"
        console.log(con)
    }
}
draw(5)

function draw(n) {
    let con = "";
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            con += n - i;
        }
        con += "\n";
    }
    console.log(con)
}
draw(5)

function draw(n) {
    let con = "";
    for (j = 0; j % n == 0 < n; j++) {
        for (i = 0; i < n; i++) { con += i + 1; }
        con += "\n";
        console.log(con)
    }
}
draw(4)

function draw(n) {
    let con = ""
    let num = 1
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            con += num
            num++
        }
        con += "\n"
    }

    console.log(con)
}
draw(2)

function draw(n) {
    let con = "";
    let num = n ** 2;
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            con += num;
            num--
        }
        con += "\n"
    }
    console.log(con)
}
draw(5)

function draw(n) {
    let con = ""
    for (i = 0; i < n; i++) {
        con += i * 2;
        con += "\n"
    }
    console.log(con)
}
draw(4)

function draw() {
    let con = ""
    for (i = 1; i < n; i++) {
        con += i * 2;
        con += "\n"
    }
    console.log(con)
}
draw(4)














//..................................
// mapFunction
// let array = [1, 2, 3, 4]
// function map(array, transfromFn) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         let transfromFn = transfromFn(array[i]);
//         result.push(transfromFn);
//     }
//     return result;
// }


// // .................
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let condi = (arr, item => {
//     return item % 2 == 0;
// })

// function fill(arr,condi) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (condi(arr[i]))
//         {
//             result.push(arr);
//     }
//     return result
// }
// console.log(fillter(arr,condi))
// ...................................

// let arr = [1,2,3,4,5,6,7,8,9]
// let findCon

// function fin(arr,findCon){
// let result = [];
// for(i=0;i<arr.length;i++)

// }







//




// function abc(a,b){
//     console.log(b/a);
//     return b/a
// }
// let result = abc(2,10)

// console.log('value of result'+ result);

// function random(min, max) {
//     return (Math.random());
// }
// random(0, 1)


// function ucFirst(word) {
//     let str = word
//     let fnt = str.slice(0, 1)
//     let bck = str.slice(1)
//     return fnt.toUpperCase() + bck;
// }
// ucFirst("")


// function checkSpam(sentence) {
//     let x = sentence.includes("xxx");
//     let y = sentence.includes("viagra");
//     z = [x, y]
//     return z;
// }
// checkSpam("xxxviagra")





// let style = ["Jazz", "Blues"];
// style.push("Rock-n-Roll");
// style[1] = "Classic";
// style.shift;
// style.unshift("Pap", "Reggae")



// function sumInput(fill) {
//     let arr = [];
//     let pr = Number(prompt())

// }
// sumInput()



// let array1 = [1, 2, 30, 400];
// let array2 = array1.map(function (x) {
//     return x * 2
// })

// let array1 = [1, 2, 3, 4];
// let x = array1.join();
// let array2 = x.split(',');

// let array1 = [1, "1", 2, {}];
// let sel = array1.splice(0);
// let array2 = array1.concat("number", "string", "number", "object");


// let array1 = ["apple", "banana", "orange"];
// let array2 = array1.map(item=>item.toUpperCase());


// let array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 }
// ];
// let array2 = array1.map(item => item.name);


// let array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 }
// ];
// let array2 = array1.map(item => item.age);

// let array1 = [
//     { name: "apple", surname: "London" },
//     { name: "banana", surname: "Bangkok" },
//     { name: "watermelon", surname: "Singapore" }
// ];
// let array2 = array1.map(item => item.name + " " + item.surname);

// let array1 = [1, 3, 4, 5, 6, 7, 8];
// let array2 = array1.map(item=>{item%2
// if(item% 2 == 0) 
// {return "even";}
// else 
// {return "ood";}
// }
// )


// let array1=[1,-3,2,8,-4,5]
// let array2 = array1.map(item=>{
// item
// if(item<=0)
// {return item*-1;}
// else
// {return item*1;}
// })

// let array1=[100,200.25,300.84,400.3]
// let array2 = array1.map(item=>item.toFixed(2));

// let array1 = [
//     {name: "apple", birth:"2000-01-01"},
//     {name: "banana", birth:"1990-10-01"},
//     {name: "watermelon", birth:"1985-12-01"}
// ]
// let ap = array1.map(function(item){
//     let numYear = new Date().getFullYear() - new Date(item.birth).getFullYear();
//     item.age= numYear;
//     return item
// })
// console.log(ap)



// // 12


// let array1 = [
//     {name: "apple", birth:"2000-01-01"},
//     {name: "banana", birth:"1990-10-10"},
//     {name: "watermelon", birth:"1985-12-30"}
// ]
// let array2 = array1.map(function(item)
// {

// let na = item.name
// let day = new Date(item.birth).getDate();


// let mth = new Date(item.birth).getMonth();
// let nmth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
// "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
// ];

// let year = new Date(item.birth).getFullYear();
// let pat = '"<tr>\n'+'<td>'+na+'</td>\n'+'<td>'+day+' '+nmth[mth]+' '+year+'</td>\n'+'</tr>"';
// return pat
// }
// )
// console.log(array2)

// array1 = [1,2,30,400]
// console.log(array1.filter(item=>item>10));

// array1=[1,2,3,4]
// console.log(array1.filter(item=>item%2!=0));

// array1=[1,"1",2,{}]
// let fil = array1.filter(function(item){
//     return typeof item==="number"
// })
// console.log(fil)

// array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
// console.log(array1.filter(item=>item.length>6));


// let array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
//   ];
// console.log(array1.filter(item=>item.age<18));

// let array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
//   ];
//   console.log(array1.filter(item=>item.age!=32));

// let array1 = [1, -3, 2, 8, -4, 5]
// console.log(array1.filter(item=>item>=0));

// let array1 = [1,3,4,5,6,7,8]
// console.log(array1.filter(item=>item%3==0));


// array1 = ["peach", 1, -3, "2", {}, []]
// console.log(array1.filter(item=>item.typeof==="string"));

// array1 = ["peach", 1, -3, "2", {}, []]
// let array2 = array1.filter(function (item){
//     return typeof item==="string"
// })
// console.log(array2);

// array1 = ["APPLE", "appLE", "PEACH", "PEach"]
// let array2 = array1.forEach(fill)
// 3.

// console.log(array2);







