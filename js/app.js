function displayError (id, message) {
    var validationMsgDiv = document.getElementById(id);
    validationMsgDiv.innerHTML = message;
}

function hideError(id) {
    var validationMsgDiv = document.getElementById(id);
    validationMsgDiv.innerHTML = '';
}
// ----------------
// Name Validation
// ----------------
var fullName = document.getElementById('fullName');
fullName.addEventListener('blur', function(){

    if (fullName.value.length < 6) {
        console.log('length error')
        displayError('fullNameMessage', 'length error')

    } else if (fullName.value.indexOf(' ') === -1){
        console.log('space error');
        displayError('fullNameMessage', 'space error')

    } else {
        hideError('fullNameMessage');
    }
})

fullName.addEventListener('focus', function(){
    hideError('fullNameMessage');
});

// ------------------
//  Email Validation
// ------------------
var email = document.getElementById('email');
email.addEventListener('keyup', function(){
    email.value = email.value.toLowerCase();
})

email.addEventListener('blur', function(){
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!re.test(String(email.value).toLowerCase())) {
        displayError('emailMessage', 'invalid email format')
    }
})

email.addEventListener('focus', function(){
    hideError('emailMessage');
});

// --------------------
// Password Validation
// --------------------
var password = document.getElementById('pwd');
password.addEventListener('blur', function(){
    const re = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
    
    if(password.value.length < 8) {
        displayError('passwordMessage', 'Password is not long enough');

    } else if(!re.test(password.value)){
        displayError('passwordMessage', 'Password has to include only letters and numbers');
    }

    password.addEventListener('focus', function(){
        hideError('passwordMessage');
    });
})

// ---------------------------
// Repeat Password Validation
// ---------------------------
var repeatPassword = document.getElementById('repeatPwd');
repeatPassword.addEventListener('blur', function(){
    
    if(repeatPassword.value !== password.value) {
        displayError('repeatPwdMessage', 'Passwords do not match')
    }
})

repeatPassword.addEventListener('focus', function(){
    hideError('repeatPwdMessage');
});

