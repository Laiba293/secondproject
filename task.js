const forms= document.querySelector(".forms"),
 pwShowHide = document.querySelectorAll(".eye-icon"),
 links = document.querySelectorAll(".link");
 
pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("Click",() => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".pasword");
      
        pwFields.forEach(password =>{
            if (password.type ==="password"){
                password.type = "text";
                eyeIcon.classList.replace(fa-fa-eye-slash,fa-fa-eye);
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("fa-fa-eye,fa-fa-eye-slash")
        })
    })
})

links.forEach(link =>{
    link.addEventListener("click", e=>{
        e.preventDefault();
        forms.classList.toogle("show-signup");
    })
})