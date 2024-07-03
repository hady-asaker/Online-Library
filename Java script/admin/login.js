
var username=document.getElementById("username");
var password=document.getElementById("password");
var button=document.getElementById("log");
let form=document.getElementById("frm")

button.addEventListener('click',(e)=>{
    e.preventDefault();
    username.style.outline="none";
    password.style.outline="none";
    if(username.value==""){
        username.style.outline="2px solid red";
    }
    if(password.value==""){
        password.style.outline="2px solid red";
    }
    if(username.value!=""&& password.value!=""){
        form.submit();
    }
})