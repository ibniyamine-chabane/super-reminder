/*-----  MENU BURGER HEADER  -----*/

const burgerMenuButton = document.querySelector('.burger-menu-button');
const burgerMenuButtonIcon = document.querySelector('.burger-menu-button i');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenuButton.onclick = function() {
    burgerMenu.classList.toggle('open');
    const isOpen = burgerMenu.classList.contains('open');
    burgerMenuButtonIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

/* ------- formulaire Register  --------- */
// const registerForm = document.getElementById("registerForm");
// const passwordRegister = document.getElementById("password");
// const message = document.getElementById("subtitle");

// registerForm.addEventListener("submit", () => {


//     const password = passwordRegister.value;
        
//         if(password.length < 8) {
//             alert("Le mot de passe doit contenir au moins 8 caractères.");
           
//         } else if (!/[A-Z]/.test(password)) {
//             alert("Le mot de passe doit contenir au moins 1 majuscule");
//             return;
//         } else if (!/[0-9]/.test(password)) {
//             alert("Le mot de passe doit contenir au moins 1 chiffre");
//             return;
//         } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
//             alert("Le mot de passe doit contenir au moins un caractère spécial.");
//             return;
//         } else {
//             registerForm.submit();
//         }
    
// })

let submit = formInfo.submit-info
submit.addEventListener("click", ()=>{
    
    let formInfo = document.getElementById("form-info");
    let nameLogin = formInfo.login.value;
    let nameFirstname = formInfo.firstname.value;
    let nameLastname = formInfo.lastname.value;
    let namePassword = formInfo.password-valid-login.value;

    const formData = new FormData();
    formData.append("login", nameLogin)
    formData.append("firstname", nameFirstname)
    formData.append("lastname", nameLastname)
    formData.append("password-valid-login", namePassword)
})

async function updateProfil(user) {
    
    let response = await fetch('');
}
