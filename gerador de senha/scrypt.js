let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#pass");

let containerPass = document.querySelector("#container-pass");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function (){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pa = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i ){
        pa += charset.charAt(Math.floor(Math.random() *n));
    }
password.innerHTML = pa;
containerPass.classList.remove("hide")
novaSenha = pa;
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}