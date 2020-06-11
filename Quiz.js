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
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            con += i + 1
        }
        con += "\n"
    }
    console.log(con)
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
    con = "";
    for (i = 0; i < n**2; i++) {
        for (j = 0; j < n; j++) {
        con+= j;
        }
        con += "\n";
    }
    console.log(con)
}
draw(4)

function draw(n){
    
}