function validarForm() {
    var emailField = document.getElementById('emailForm');
    var senhaField = document.getElementById('senhaForm');

    function validarEmail(emailField) {
        var inputEmail = emailField.value;
        var emailError = document.getElementById('emailError');
        var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailRegex.test(inputEmail)) {
            emailField.style.border = "none"
            emailError.textContent = "";
            return true;
        }else {
            emailField.style.border = "1px solid red"
            emailError.textContent = "Por favor, insira um e-mail válido.";
            return false
        }
    }
    function validarSenha(passField) {
        var senhaInput = passField.value
        var senhaError = document.getElementById('senhaError');
        var PasswordRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}/;

        if(!PasswordRegex.test(senhaInput)) {
            passField.style.border = "1px solid red"
            senhaError.textContent = "Deve conter letra maiuscula, minusculas, numeros e caracteres especiais '!@#$*' " ;
            return false
        }else {
            passField.style.border = "none"
            senhaError.textContent = ""
            return true
        }
    }
    return validarEmail(emailField) && validarSenha(senhaField)  ;
}