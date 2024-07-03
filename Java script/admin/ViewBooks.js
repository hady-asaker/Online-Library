
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
td6.innerHTML="<button id='del' onclick='DeleteAction()'>مسح</button> <button><a href='EditBooks.html'>تعديل</a></button>";
tr.appendChild(td6);

tbody.appendChild(tr);

function DeleteAction(){
    localStorage.clear();
    localStorage.setItem("bookname","");
    localStorage.setItem("bookid","");
    localStorage.setItem("author","");
    localStorage.setItem("category","");
    localStorage.setItem("description","");
    localStorage.setItem("avalible","");
    localStorage.setItem("not avalible","");
    window.location.reload();
    td6.innerHTML="<button>مسح</button> ";
    td6.innerHTML = ""; // Clear the content of td6
    let newDeleteButton = document.createElement("button"); // Create a new button
    newDeleteButton.textContent = "مسح"; // Set its text content
    td6.appendChild(newDeleteButton); // Append the new button to td6
    tbody.appendChild(tr);
}


