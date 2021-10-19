// REgular Expressions
const regLettersAndNumbers = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
const regAddress = /^(?=.*?\d)(?=.*?[a-zA-Z\s])[a-zA-Z\d\s]+$/;
const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const errorMessages = [
    'Full Name should contain at least 6 characters',
    'Full Name should contain at least one space',
    'Invalid email format',
    'Password is not long enough',
    'Password has to include only letters and numbers',
    'Passwords do not match',
    'Only +18 to -100 can subscribe',
    'Phone number should have at least 7 digits',
    'Address should have at least 5 characters',
    'Address should contain letters and numbers',
    'Address should contain at least one space',
    'City should have at least 3 characters',
    'Postal Code should have at least 3 characters',
    'ID Number should have 7 or 8 characters'
]

// General Functions
function displayError (id, messageId) {
    var validationMsgDiv = document.getElementById(`${id}Message`);
    validationMsgDiv.innerHTML = errorMessages[messageId];
    var input = document.getElementById(id);
    input.classList.add('redInputBorder')
}

function hideError(id) {
    var validationMsgDiv = document.getElementById(`${id}Message`);
    validationMsgDiv.innerHTML = '';
    var input = document.getElementById(id);
    input.classList.remove('redInputBorder')
}

// ----------------
// Name Validation
// ----------------
function onBlurFullName (field, id) {
    if (field.value.length < 6) {
        displayError(id, 0)
        fieldsError[0].push(errorMessages[0]);

    } else if (field.value.indexOf(' ') === -1){
        displayError(id, 1)
        fieldsError[0].push(errorMessages[1]);

    } else {
        fieldsError[0] = [];
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
        displayError(id, 2);
        fieldsError[1].push(errorMessages[2]);

    } else {
        fieldsError[1] = [];
    }
}

// --------------------
// Password Validation
// --------------------
function onBlurPwd (field, id) {
    if (field.value.length < 8) {
        displayError(id, 3);
        fieldsError[2].push(errorMessages[3]);

    } else if (!regLettersAndNumbers.test(field.value)){
        displayError(id, 4);
        fieldsError[2].push(errorMessages[4]);

    } else {
        fieldsError[2] = [];
    }
}

// ---------------------------
// Repeat Password Validation
// ---------------------------
function onBlurRepeatPwd (field, id) {
    var pwd = document.getElementById('pwd');
    if (field.value !== pwd.value) {
        displayError(id, 5)
        fieldsError[3].push(errorMessages[5]);

    } else {
        fieldsError[3] = [];
    }
}

// ---------------
// Age Validation
// ---------------
var age = document.getElementById('age');
age.addEventListener('keydown', function(e){

    if (e.key === '-' || e.key === '+' || e.key === '.' || e.key === ','  || e.key === 'e'){
        e.preventDefault();
    }
});

function onBlurAge (field, id) {
    if (field.value < 18 || field.value > 100){
        displayError(id, 6);
        fieldsError[4].push(errorMessages[6]);

    } else {
        fieldsError[4] = [];
    }
}

// -----------------
// Phone Validation
// -----------------
var phone = document.getElementById('phone');
phone.addEventListener('keydown', function(e){

    if (e.key === '-' || e.key === '+' || e.key === '.' || e.key === ',' || e.key === 'e'){
        e.preventDefault();
    }
});

function onBlurPhone (field, id) {
    if(field.value.length < 7){
        displayError(id, 7);
        fieldsError[5].push(errorMessages[7]);

    } else {
        fieldsError[5] = [];
    }
}

// -------------------
// Address Validation
// -------------------
function onBlurAddress (field, id) {
    if (field.value.length < 5){
        displayError(id, 8);
        fieldsError[6].push(errorMessages[8]);

    } else if (!regAddress.test(field.value)){
        displayError(id, 9);
        fieldsError[6].push(errorMessages[9]);

    } else if (field.value.indexOf(' ') === -1){
        displayError(id, 10);
        fieldsError[6].push(errorMessages[10]);

    } else {
        fieldsError[6] = [];
    }
}

// ----------------
// City Validation
// ----------------
function onBlurCity (field, id) {
    if (field.value.length < 3){
        displayError(id, 11);
        fieldsError[7].push(errorMessages[11]);

    } else {
        fieldsError[7] = [];
    }
}

// -----------------------
// Postal Code Validation
// -----------------------
function onBlurPostalCode(field, id){
    if (field.value.length < 3){
        displayError(id, 12);
        fieldsError[8].push(errorMessages[12]);

    } else {
        fieldsError[8] = [];
    }
}

// ---------------------
// ID Number Validation
// ---------------------
var idNumber = document.getElementById('idNumber');
idNumber.addEventListener('keydown', function(e){

    if (e.key === '-' || e.key === '+' || e.key === '.' || e.key === ',' || e.key === 'e'){
        e.preventDefault();
    }
});
function onBlurIdNumber (field, id) {
    if (field.value.length < 7 ||
        field.value.length > 8){
        displayError(id, 13);
        fieldsError[9].push(errorMessages[13]);

    } else {
        fieldsError[9] = [];
    }
}

// ------------
// Fields List
// ------------
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

    fieldsError.push([]);
})

// -------
// Submit
// -------
var subscriptionForm = document.getElementById('subscriptionForm');
subscriptionForm.addEventListener('submit', function(e){

    var errorList = fieldsError.filter( errors => errors.length > 0);
    if(errorList.length > 0){
        alert(`Please notice you have the following errors:\n\n* ${errorList.flat().join('\n* ')}`);
        
    } else {
        var dataInputs = '';
        fieldsArray.forEach(function(field, index){
            var input = document.getElementById(field);
            dataInputs += "\n" + input.value;
        })
        alert('You registered the following info about yourself:\n'+ dataInputs);
    }
    e.preventDefault();
});

// ---------
// --BONUS--
// ---------

var nameInputValue = document.getElementById('fullName');

nameInputValue.addEventListener('keydown', displayHelloMsg);
nameInputValue.addEventListener('change', hideHelloMsg);


function displayHelloMsg(e) {
    document.getElementById('helloMsg').innerHTML = 'HELLO ' + (e.target.value).toUpperCase() + ' !!';
}

function hideHelloMsg(e) {

    if (nameInputValue === '') {
        document.getElementById('helloMsg').innerHTML = ''; 
    }
}