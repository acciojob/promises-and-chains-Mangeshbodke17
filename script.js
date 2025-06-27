//your JS code here. If required.



let age=document.querySelector("#age");

let name=document.querySelector("#name");

let btn=document.querySelector("button");


btn.addEventListener("click",(e)=>{

    e.preventDefault();

    
    if((age.value=="") || (name.value=="")){
        alert("Please enter valid details.")
    }

else if(age.value>18){


 
   setTimeout(() => {
    alert("Welcome, . You can vote.");
}, 4000);

    }

    else{
        setTimeout(() => {
    alert("Oh sorry . You aren't old enough.");
}, 4000);

    }


})

