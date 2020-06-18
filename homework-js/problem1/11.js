let a;
let b = Infinity;
let c = Infinity;
let d = Infinity;
while (true) {
a = prompt("Add data");
if (Number(a) < b&&b!=Number(c)&&b!=Number(d)) {
    b = Number(a)
}else if(Number(a)<c&&c!=b&&c!=Number(d)){
    c = Number(a)

}else if(Number(a)<d&&d!=c&&d!=b){
      d = Number(a)
  
}else if (a === "stop") {
      alert("(1)"+b+" (2)"+c+" (3)"+d)
      break;
    }
  }