function getList() {
   let textList = document.getElementById("inputAc").Value;
   let addText = document.createTextNode(textlist);
   let list = document.createElement("li")
   list.appendChild(addText);
   document.getElementById(lis).appendChild(list);
}
