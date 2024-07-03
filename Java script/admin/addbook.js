var bookid=document.getElementById("book-id");
var bookname=document.getElementById("book-name");
var author=document.getElementById("author");
var category=document.getElementById("category");
var description=document.getElementById("description");
let form=document.getElementById("frm");
let button=document.getElementById("btn");

button.addEventListener('click',(e)=>{
    e.preventDefault();
    bookid.style.outline="none";
    bookname.style.outline="none";
    author.style.outline="none";
    category.style.outline="none";
    description.style.outline="none";
    if(bookid.value==""){
        bookid.style.outline="2px solid red";
    }
    if(bookname.value==""){
        bookname.style.outline="2px solid red";
    }
    if(author.value==""){
        author.style.outline="2px solid red";
    }
    if(category.value==""){
        category.style.outline="2px solid red";
    }
    if(description.value==""){
        description.style.outline="2px solid red";
    }
    if(bookid.value!=""&& bookname.value!=""&& author.value!="" && category.value!="" && description.value!=""){
        localStorage.clear();
        localStorage.setItem("bookname",bookname.value);
        localStorage.setItem("bookid",bookid.value);
        localStorage.setItem("author",author.value);
        localStorage.setItem("category",category.value);
        localStorage.setItem("description",description.value);
        localStorage.setItem("avalible",10);
        localStorage.setItem("not avalible",0);
        form.submit();
    }
})

