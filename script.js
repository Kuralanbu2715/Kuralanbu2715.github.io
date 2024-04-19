//Form validation
const formElement = document.getElementById('form');
const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const msgElement = document.getElementById('message');
let errorElement = document.getElementsByClassName("error");
var correctEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


formElement.addEventListener('submit', (e) =>{
    e.preventDefault();
    
   
    validation();

});

function validation(){
    if(nameElement.value === '' | nameElement.value == null){
        nameElement.style.borderColor = 'red';
        errorElement[0].innerHTML = "*Name is required";
    }
    else{
        nameElement.style.borderColor = '#ccc';
        errorElement[0].innerHTML = "";
    }
    if(msgElement.value === '' | msgElement.value == null){
        msgElement.style.borderColor = 'red';
        errorElement[2].innerHTML = "*Please fill out this field";
    }
    else{
        msgElement.style.borderColor = '#ccc';
        errorElement[2].innerHTML = "";
    }
    if (emailElement.value === '' | emailElement.value == null){
        console.log(emailElement.value)
        emailElement.style.borderColor = 'red';
        errorElement[1].innerHTML = "*Email ID is required";
    }
    else{
        if (!emailElement.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
            emailElement.style.borderColor = 'red';
            errorElement[1].innerHTML = "*Please provide a valid Email ID";
        }
        else{
            emailElement.style.borderColor = '#ccc';
            errorElement[1].innerHTML = "";
        }   
    }
}

//Go to top button
const topButton = document.querySelector(".to_top");
window.addEventListener('scroll', () =>{
    if (window.scrollY > 500 ){
        topButton.classList.add("active");
    }
    else{
        topButton.classList.remove("active");
    }
});


