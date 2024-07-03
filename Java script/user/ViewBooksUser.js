
let tbody=document.getElementById("tby");
let tr=document.createElement("tr");

let td1=document.createElement("td");
let txt=document.createTextNode(localStorage.getItem("bookname"));
td1.appendChild(txt);
tr.appendChild(td1);

let td2=document.createElement("td");
txt=document.createTextNode(localStorage.getItem("avalible"));
td2.appendChild(txt);
tr.appendChild(td2);

let td3=document.createElement("td");
txt=document.createTextNode(localStorage.getItem("author"));
td3.appendChild(txt);
tr.appendChild(td3);

let td4=document.createElement("td");
txt=document.createTextNode(localStorage.getItem("avalible"));
td4.appendChild(txt);
tr.appendChild(td4);

let td5=document.createElement("td");
txt=document.createTextNode(localStorage.getItem("not avalible"));
td5.appendChild(txt);
tr.appendChild(td5);

let td6=document.createElement("td");
td6.innerHTML=" <button><a href='Borrow.html'>استعارة</a></button>";
tr.appendChild(td6);

tbody.appendChild(tr);