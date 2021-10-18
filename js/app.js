// REgular Expressions
const regLettersAndNumbers = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
const regAddress = /^(?=.*?\d)(?=.*?[a-zA-Z\s])[a-zA-Z\d\s]+$/;
const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// General Functions
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
});

fullName.addEventListener('focus', function(){
    hideError('fullNameMessage');
});

// ------------------
//  Email Validation
// ------------------
var email = document.getElementById('email');
email.addEventListener('keyup', function(){
    email.value = email.value.toLowerCase();
});

email.addEventListener('blur', function(){
    
    if (!regEmail.test(String(email.value).toLowerCase())) {
        displayError('emailMessage', 'invalid email format')
    }
});

email.addEventListener('focus', function(){
    hideError('emailMessage');
});

// --------------------
// Password Validation
// --------------------
var password = document.getElementById('pwd');
password.addEventListener('blur', function(){
    
    if (password.value.length < 8) {
        displayError('passwordMessage', 'Password is not long enough');

    } else if (!regLettersAndNumbers.test(password.value)){
        displayError('passwordMessage', 'Password has to include only letters and numbers');
    }

    password.addEventListener('focus', function(){
        hideError('passwordMessage');
    });
});

// ---------------------------
// Repeat Password Validation
// ---------------------------
var repeatPassword = document.getElementById('repeatPwd');
repeatPassword.addEventListener('blur', function(){
    
    if (repeatPassword.value !== password.value) {
        displayError('repeatPwdMessage', 'Passwords do not match')
    }
});

repeatPassword.addEventListener('focus', function(){
    hideError('repeatPwdMessage');
});

// ---------------
// Age Validation
// ---------------
var age = document.getElementById('age');
age.addEventListener('keydown', function(e){

    if (e.key === '-' || e.key === '+' || e.key === '.' || e.key === ','){
        e.preventDefault();
    }
});

age.addEventListener('blur', function(){

    if (age.value < 18 || age.value > 100){
        displayError('ageMessage', 'Only +18 to -100 can subscribe');
    }
});

age.addEventListener('focus', function(){
    hideError('ageMessage');
});

// -----------------
// Phone Validation
// -----------------
var phone = document.getElementById('phone');
phone.addEventListener('keydown', function(e){

    if (e.key === '-' || e.key === '+' || e.key === '.' || e.key === ',' ){
        e.preventDefault();
    }
});

phone.addEventListener('blur', function(){

    if(phone.value.length < 7){
        displayError('phoneMessage', 'Phone number should have at least 7 digits');
    }
});

phone.addEventListener('focus', function(){
    hideError('phoneMessage');
});

// -------------------
// Address Validation
// -------------------
var address = document.getElementById('address');
address.addEventListener('blur', function(){

    if (address.value.length < 5){
        displayError('addressMessage', 'Address should have at least 5 characters');
    } else if (!regAddress.test(address.value)){
        displayError('addressMessage', 'Address should contain letters and numbers');
    } else if (address.value.indexOf(' ') === -1){
        displayError('addressMessage', 'Address should contain at least one space');
    }
});

address.addEventListener('focus', function(){
    hideError('addressMessage');
});

// ----------------
// City Validation
// ----------------
var city = document.getElementById('city');
city.addEventListener('blur', function(){

    if (city.value.length < 3){
        displayError('cityMessage', 'City should have at least 3 characters');
    }
});

city.addEventListener('focus', function(){
    hideError('cityMessage');
});

// -----------------------
// Postal Code Validation
// -----------------------
var postalCode = document.getElementById('postalCode');

postalCode.addEventListener('blur', function(){

    if (postalCode.value.length < 3){
        displayError('postalCodeMessage', 'Postal Code should have at least 3 characters');
    }
});

postalCode.addEventListener('focus', function(){
    hideError('postalCodeMessage');
});

// ---------------------
// ID Number Validation
// ---------------------
var idNumber = document.getElementById('idNumber');

idNumber.addEventListener('blur', function(){

    if (idNumber.value.length < 7 ||
        idNumber.value.length > 8){
        displayError('idNumberMessage', 'ID Number should have 7 or 8 characters');
    }
});

idNumber.addEventListener('focus', function(){
    hideError('idNumberMessage');
});