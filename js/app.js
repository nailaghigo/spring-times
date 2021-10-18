// REgular Expressions
const regLettersAndNumbers = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
const regAddress = /^(?=.*?\d)(?=.*?[a-zA-Z\s])[a-zA-Z\d\s]+$/;
const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// General Functions
function displayError (id, message) {
    var validationMsgDiv = document.getElementById(`${id}Message`);
    validationMsgDiv.innerHTML = message;
}

function hideError(id) {
    var validationMsgDiv = document.getElementById(`${id}Message`);
    validationMsgDiv.innerHTML = '';
}

// ----------------
// Name Validation
// ----------------
function onBlurFullName (field, id) {
    if (field.value.length < 6) {
        displayError(id, 'Full Name should contain at least 6 characters')
        fieldsError[0] = true;

    } else if (field.value.indexOf(' ') === -1){
        displayError(id, 'Full Name should contain at least one space')
        fieldsError[0] = true;

    } else {
        fieldsError[0] = false;
    }
}

// ------------------
//  Email Validation
// ------------------
var email = document.getElementById('email');
email.addEventListener('keyup', function(){
    email.value = email.value.toLowerCase();
});

function onBlurEmail (field, id) {
    if (!regEmail.test(String(field.value).toLowerCase())) {
        displayError(id, 'Invalid email format');
        fieldsError[1] = true;

    } else {
        fieldsError[1] = false;
    }
}

// --------------------
// Password Validation
// --------------------
function onBlurPwd (field, id) {
    if (field.value.length < 8) {
        displayError(id, 'Password is not long enough');
        fieldsError[2] = true;

    } else if (!regLettersAndNumbers.test(field.value)){
        displayError(id, 'Password has to include only letters and numbers');
        fieldsError[2] = true;

    } else {
        fieldsError[2] = false;
    }
}

// ---------------------------
// Repeat Password Validation
// ---------------------------
function onBlurRepeatPwd (field, id) {
    var pwd = document.getElementById('pwd');
    if (field.value !== pwd.value) {
        displayError(id, 'Passwords do not match')
        fieldsError[3] = true;

    } else {
        fieldsError[3] = false;
    }
}

// ---------------
// Age Validation
// ---------------
var age = document.getElementById('age');
age.addEventListener('keydown', function(e){

    if (e.key === '-' || e.key === '+' || e.key === '.' || e.key === ','){
        e.preventDefault();
    }
});

function onBlurAge (field, id) {
    if (field.value < 18 || field.value > 100){
        displayError(id, 'Only +18 to -100 can subscribe');
        fieldsError[4] = true;

    } else {
        fieldsError[4] = false;
    }
}

// -----------------
// Phone Validation
// -----------------
var phone = document.getElementById('phone');
phone.addEventListener('keydown', function(e){

    if (e.key === '-' || e.key === '+' || e.key === '.' || e.key === ',' ){
        e.preventDefault();
    }
});

function onBlurPhone (field, id) {
    if(field.value.length < 7){
        displayError(id, 'Phone number should have at least 7 digits');
        fieldsError[5] = true;

    } else {
        fieldsError[5] = false;
    }
}

// -------------------
// Address Validation
// -------------------
function onBlurAddress (field, id) {
    if (field.value.length < 5){
        displayError(id, 'Address should have at least 5 characters');
        fieldsError[6] = true;

    } else if (!regAddress.test(field.value)){
        displayError(id, 'Address should contain letters and numbers');
        fieldsError[6] = true;

    } else if (field.value.indexOf(' ') === -1){
        displayError(id, 'Address should contain at least one space');
        fieldsError[6] = true;

    } else {
        fieldsError[6] = false;
    }
}

// ----------------
// City Validation
// ----------------
function onBlurCity (field, id) {
    if (field.value.length < 3){
        displayError(id, 'City should have at least 3 characters');
        fieldsError[7] = true;

    } else {
        fieldsError[7] = false;
    }
}

// -----------------------
// Postal Code Validation
// -----------------------
function onBlurPostalCode(field, id){
    if (field.value.length < 3){
        displayError(id, 'Postal Code should have at least 3 characters');
        fieldsError[8] = true;

    } else {
        fieldsError[8] = false;
    }
}

// ---------------------
// ID Number Validation
// ---------------------
function onBlurIdNumber (field, id) {
    if (field.value.length < 7 ||
        field.value.length > 8){
        displayError(id, 'ID Number should have 7 or 8 characters');
        fieldsError[9] = true;

    } else {
        fieldsError[9] = false;
    }
}

// -----------
// Fields List
// -----------
const fieldsArray = [
    'fullName',
    'email',
    'pwd',
    'repeatPwd',
    'age',
    'phone',
    'address',
    'city',
    'postalCode',
    'idNumber'
]

const fieldsBlurActions = [
    onBlurFullName,
    onBlurEmail,
    onBlurPwd,
    onBlurRepeatPwd,
    onBlurAge,
    onBlurPhone,
    onBlurAddress,
    onBlurCity,
    onBlurPostalCode,
    onBlurIdNumber,
]

const fieldsError = [];

fieldsArray.forEach(function (fieldId, index) {
    var field = document.getElementById(fieldId);
    field.addEventListener('blur', function () {
        fieldsBlurActions[index](field, fieldId);
    });
    
    field.addEventListener('focus', function(){
        hideError(fieldId);
    });

    fieldsError.push(false);
})