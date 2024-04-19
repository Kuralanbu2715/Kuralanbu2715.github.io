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

//dark theme
const toggle = document.getElementById('toggle-dark');
const about =document.querySelector('.Aboutme');
const edu =document.querySelector('.Edu');
const skills =document.querySelector('.Skills');
const contact =document.querySelector('.contact');



toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon-fill');
    if(this.classList.toggle('bi-brightness-high-fill')){
        about.style.backgroundColor = 'rgb(246, 255, 196)';
        edu.style.backgroundColor = 'rgb(196, 238, 255)';
        skills.style.backgroundColor = 'rgb(246, 255, 196)';
        contact.style.backgroundColor = 'white';
    }
    else{
        
        about.style.backgroundColor = 'rgb(166, 179, 91)';
        edu.style.backgroundColor = 'rgb(73, 124, 144)';
        skills.style.backgroundColor = 'rgb(166, 179, 91)';
        contact.style.backgroundColor = 'black';
        
    }
});


