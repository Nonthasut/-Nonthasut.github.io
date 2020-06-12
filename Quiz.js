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
let array = [1, 2, 3, 4]
function map(array, transfromFn) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let transfromFn = transfromFn(array[i]);
        result.push(transfromFn);
    }
    return result;
}


// .................
let arr = [1, 2, 3, 4, 5, 6, 7];
let condi = (arr, item => {
    return item % 2 == 0;
})

function fill(arr,condi) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (condi(arr[i]))
        {
            result.push(arr);
    }
    return result
}
console.log(fillter(arr,condi))
...................................

let arr = [1,2,3,4,5,6,7,8,9]
let findCon

function fin(arr,findCon){
let result = [];
for(i=0;i<arr.length;i++)

}




