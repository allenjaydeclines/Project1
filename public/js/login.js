let showPass = () => {
    var pass = document.getElementById('password-input')
    if (pass.type === 'password') {
        pass.type = 'text';
    }
    else {
        pass.type = 'password';
    }
}