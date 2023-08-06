const form = document.forms.form;
const name = document.getElementById('Name');
const email = document.getElementById('Email');
const age = document.getElementById('Age');
const gender = document.forms.form.gender;
const job = document.getElementById('formJob');
const pass = document.getElementById('formPassword');
const secondPass = document.getElementById('formSecondPassword');
const checkbox = document.getElementById('checkbox');


const inputs = form.querySelectorAll('.form__field');



function validationMessage(text) {
    let error = document.createElement('div');
    error.className = 'error'
    error.style.color = 'red'
    error.innerHTML = text;
    return error;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let errors = form.querySelectorAll('.error');

    for (let i = 0; i < errors.length; i++) {
        inputs[i].classList.remove('error-style');
        errors[i].remove()
    }

    for (let i = 0; i < inputs.length; i += 1) {
        if (!inputs[i].value) {
            let error = validationMessage('Please fill the field!');
            inputs[i].classList.add('error-style');
            form[i].parentElement.insertBefore(error, inputs[i])

        }
    }
    if (checkbox.checked) {
        let error = validationMessage('');
        checkbox.parentElement.insertBefore(error, checkbox);

    } else {
        let error = validationMessage('Please confirm the changes.');
        checkbox.parentElement.insertBefore(error, checkbox);

    }

    if (gender.checked) {
        let error = validationMessage('');
        const errorCheckbox = document.getElementById("check-error");
        errorCheckbox.remove(error);
    }
    else {
        let error = validationMessage('Please select a gender.');
        const errorCheckbox = document.getElementById("check-error");
        errorCheckbox.append(error);;
    }

    if (pass.value !== secondPass.value) {
        let error = validationMessage('The password and confirm password fields do not match.');
        pass.parentElement.insertBefore(error, pass)
    }

    console.log('name: ', name.value)
    console.log('email: ', email.value)
    console.log('age: ', age.value)
    console.log('gender: ', gender.value)
    console.log('profession: ', job.value)
    console.log('password: ', pass.value)
    console.log('passwordConfirmation: ', secondPass.value)
    console.log('confirmation: ', checkbox.value)

})

