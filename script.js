
function newDoc(theLocation) {
    window.location.assign(theLocation);
}



function submit(item) {
    var password = document.getElementById("password-bar");
    var submit = document.getElementById("submit");
    var submit2 = document.getElementById("submit2");
    
    console.log(password.value)
    if (password.value.toLowerCase() === item) {
        submit.style.display = "none";
        submit2.style.display = "block";
        
        submit2.innerHTML = "Correct :)   Click Again!!";
    } else {
        submit.style.color = "white";
        submit.style.backgroundColor = "#FF3109";
        submit.style.display = "none";
        submit.style.display = "block";
        submit.style.animation = 'none';
        submit.offsetHeight; /* trigger reflow */
        submit.style.animation = null; 
        submit.innerHTML = "Incorrect";
    }
}