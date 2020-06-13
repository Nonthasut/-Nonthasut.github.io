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

