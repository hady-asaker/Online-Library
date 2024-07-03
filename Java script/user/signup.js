var username=document.getElementById("username");
var password=document.getElementById("password");
var email=document.getElementById("email");
var name1=document.getElementById("name1");
var button=document.getElementById("log");
let form=document.getElementById("frm")

button.addEventListener('click',(e)=>{
    e.preventDefault();
    username.style.outline="none";
    password.style.outline="none";
    email.style.outline="none";
    name1.style.outline="none";
    if(username.value==""){
        username.style.outline="2px solid red";
    }
    if(password.value==""){
        password.style.outline="2px solid red";
    }
    if(email.value==""){
        email.style.outline="2px solid red";
    }
    if(name1.value==""){
        name1.style.outline="2px solid red";
    }
    if(username.value!=""&& password.value!="" && email.value!=""&& name1.value!=""){
        form.submit();
    }
})