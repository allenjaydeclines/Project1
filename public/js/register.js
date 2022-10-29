let showPass = () => {
    var pass = document.getElementById('reg-password1')
    if (pass.type === 'password') {
        pass.type = 'text';
    }
    else {
        pass.type = 'password';
    }

    var pass2 = document.getElementById('reg-password2')
    if (pass2.type === 'password') {
        pass2.type = 'text';
    }
    else {
        pass2.type = 'password';
    }
}