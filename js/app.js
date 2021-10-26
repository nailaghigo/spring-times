// REgular Expressions
const regLettersAndNumbers = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
const regAddress = /^(?=.*?\d)(?=.*?[A-Za-zÀ-ÿ\s])[A-Za-zÀ-ÿ\d\s]+$/;
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
    const validationMsgDiv = document.getElementById(`${id}Message`);
    validationMsgDiv.innerHTML = errorMessages[messageId];
    const input = document.getElementById(id);
    input.classList.add('redInputBorder')
}

function hideError(id) {
    const validationMsgDiv = document.getElementById(`${id}Message`);
    validationMsgDiv.innerHTML = '';
    const input = document.getElementById(id);
    input.classList.remove('redInputBorder')
}

// ----------------
// Name Validation
// ----------------
function onBlurname (field, id) {
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
const email = document.getElementById('email');
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
    const pwd = document.getElementById('pwd');
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
const age = document.getElementById('age');
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
const phone = document.getElementById('phone');
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
const idNumber = document.getElementById('idNumber');
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
    'name',
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
    onBlurname,
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
    const field = document.getElementById(fieldId);
    field.addEventListener('blur', function () {
        fieldsBlurActions[index](field, fieldId);
    });
    
    field.addEventListener('focus', function(){
        hideError(fieldId);
    });

    fieldsError.push([]);
})

// ---------
// --BONUS--
// ---------

function displayHelloMsg(e) {
    if (e.target.value !== ''){
        document.getElementById('helloMsg').innerHTML = 'HELLO ' + (e.target.value).toUpperCase() + ' !!';
    }
}

function hideHelloMsg(e) {
    if (e.target.value === '') {
        document.getElementById('helloMsg').innerHTML = ''; 
    }
}

const nameInputValue = document.getElementById('name');
nameInputValue.addEventListener('keyup', displayHelloMsg);
nameInputValue.addEventListener('input', hideHelloMsg);

// -------
// Submit
// -------
const modal = document.getElementById('modalMessage');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalBttn = document.getElementById('modalBttn');
modalBttn.addEventListener('click', function(){
    modal.classList.remove('showModal');
})

// FETCH
// -Show modal

function showSuccessMsg(data) {
    modal.classList.add('showModal');
    modalTitle.innerHTML = 'Message sent succesfully!';
    modalText.innerHTML = 'You registed the following info: <br><br>';
    modalText.innerHTML += `<strong>Full Name:</strong> ${data.name} <br>`;
    modalText.innerHTML += `<strong>Email:</strong> ${data.email} <br>`;
    modalText.innerHTML += `<strong>Age:</strong> ${data.age} <br>`;
    modalText.innerHTML += `<strong>Phone:</strong> ${data.phone} <br>`;
    modalText.innerHTML += `<strong>Address:</strong> ${data.address} <br>`;
    modalText.innerHTML += `<strong>City:</strong> ${data.city} <br>`;
    modalText.innerHTML += `<strong>Postal Code:</strong> ${data.postalCode} <br>`;
    modalText.innerHTML += `<strong>ID Number:</strong> ${data.idNumber} <br>`;
    
    // save at localStorage
    for (const property in data) {
        localStorage.setItem(property, data[property]);
    }
}

function showErrorMsg(error) {
    modal.classList.add('showModal');
    modalTitle.innerHTML = 'OOPS! There was an error on your form';
    console.log(error);
    modalText.innerHTML = error;
}

function onSubmit() {
    const name = document.getElementById(fieldsArray[0]);
    const email = document.getElementById(fieldsArray[1]);
    const pwd = document.getElementById(fieldsArray[2]);
    const age = document.getElementById(fieldsArray[4]);
    const phone = document.getElementById(fieldsArray[5]);
    const address = document.getElementById(fieldsArray[6]);
    const city = document.getElementById(fieldsArray[7]);
    const postalCode = document.getElementById(fieldsArray[8]);
    const idNumber = document.getElementById(fieldsArray[9]);

    const url = `https://curso-dev-2021.herokuapp.com/newsletter?`;
    const urlValues = `name=${name.value}&email=${email.value}&pwd=${pwd.value}&age=${age.value}&phone=${phone.value}&address=${address.value}&city=${city.value}&postalCode=${postalCode.value}&idNumber=${idNumber.value}`

    fetch(`${url}${urlValues}`)
        .then(response => {
            if (response.status === 200) {
                return response.json()
            } else {
                response.text()
                .then(msg => {
                    showErrorMsg(msg);
                    console.log('Error: ' + msg);
                    // throw new Error(msg)
                })
            }
        })

        .then(data => {
            console.log(data)
            showSuccessMsg(data);
        })

        .catch(error => {
           console.error('catch', error)
        });
}

const subscriptionForm = document.getElementById('subscriptionForm');
subscriptionForm.addEventListener('submit', function(e){
    e.preventDefault();
    const errorList = fieldsError.filter( errors => errors.length > 0);
    if(errorList.length > 0){
        modal.classList.add('showModal');
        modalTitle.innerHTML = `OOPS! It seems that you have the following errors:`;
        modalText.innerHTML = `* ${errorList.join('<br>* ')}`;

    } else {
        let emptyValue = false;
        fieldsArray.forEach(function(field){
            const input = document.getElementById(field);
            if (input.value === '') {
                emptyValue = true;
            }
        });
        if (emptyValue) {
            modal.classList.add('showModal');
            modalTitle.innerHTML = `OOPS!`;
            modalText.innerHTML = `* All fields are required. Please complete them.`;
        }else {
            onSubmit();
        }
    }
});

// Getting LocalStorage Information
window.onload = function getLsInfo() {
    fieldsArray.forEach(function(field){
        if(localStorage.getItem(field) !== null){
            const input = document.getElementById(field);
            input.value = localStorage.getItem(field);
        }
    });
}