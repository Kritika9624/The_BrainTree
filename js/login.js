function validateForm() {
    var email = document.getElementById('em');
    var password = document.getElementById('pw');

    if (email.value.trim() == '' || email.value.indexOf('.') == -1) {
        email.style.border = '3px solid #1a1c20';
        alert('Enter a valid email');
        return false;
    }
    else if (password.value.trim() == '' || password.value.trim().length < 8) {
        password.style.border = '3px solid #1a1c20';
        alert('Enter a valid password');
        return false;
    }
    else {
        return true;
    }
}