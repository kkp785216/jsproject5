const username = document.getElementById('username');
const email = document.getElementById('email');
const car = document.getElementById('car');
const phone = document.getElementById('phone');
const address = document.getElementById('address');

let validUsername = false;
let validEmail = false;
let validCar = false;
let validPhone = false;
let validAddress = false;

username.addEventListener('blur', () => {
    // Validate username here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,14}$/
    if (regex.test(username.value)) {
        username.classList.remove('is-invalid');
        validUsername = true;
    }
    else {
        username.classList.add('is-invalid');
        validUsername = false;
    }
});

email.addEventListener('blur', () => {
    // Validate email here
    let regex = /^[a-zA-Z]([a-zA-Z0-9\_\-\.])+@([a-zA-Z0-9])([a-zA-Z0-9\_\-\.])+\.([a-zA-Z]){2,7}$/
    if (regex.test(email.value)) {
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        email.classList.add('is-invalid');
        validEmail = false;
    }
});

car.addEventListener('blur', () => {
    // VAlidate Car
    if (car.value !== 'Select Your Car') {
        validCar = true;
        car.classList.remove('is-invalid');
    }
    else {
        car.classList.add('is-invalid');
        validCar = false;
    }
});

phone.addEventListener('blur', () => {
    // Validate phone here
    let regex = /^(\+91)?0?([0-9]){10}$/
    if (regex.test(phone.value)) {
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        phone.classList.add('is-invalid');
        validPhone = false;
    }
});

address.addEventListener('blur', () => {
    // Validate Address
    regex = /.{5,150}/
    if (regex.test(address.value)) {
        address.classList.remove('is-invalid');
        validAddress = true;
    }
    else {
        address.classList.add('is-invalid');
        validAddress = false;
    }
});

let form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // submite your form here
    if (validUsername && validEmail && validCar && validPhone && validAddress) {
        let alert = document.querySelector('.alertBox');
        alert.innerHTML = `<div id="success" class="alert alert-success alert-dismissible fade show" role="alert"><strong>Success!</strong> Your travell request submitted succussfully.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
        form.reset();
        validUsername = false;
        validEmail = false;
        validCar = false;
        validPhone = false;
        validAddress = false;
        setTimeout(() => { alert.innerHTML = '' }, 5000);
    }
    else {
        if (!validUsername) {
            username.classList.add('is-invalid');
        }
        if (!validEmail) {
            email.classList.add('is-invalid');
        }
        if (!validCar) {
            car.classList.add('is-invalid');
        }
        if (!validPhone) {
            phone.classList.add('is-invalid');
        }
        if (!validAddress) {
            address.classList.add('is-invalid');
        }
    }
});