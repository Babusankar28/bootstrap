let modalBtn = document.querySelectorAll('.modal-footer button');
let agree = document.querySelector('#agree');

modalBtn[0].addEventListener('click', () => {
    agree.checked = true;
});
modalBtn[1].addEventListener('click', () => {
    agree.checked = false;
});

//Form
let form = document.forms.create;
let formEL = [...form.elements];
// console.log(formEL);
form.addEventListener('submit', (event) => {
    if (valdation(event)){
        event.preventDefault();
        formdata=new FormData(form);
    }
});

document.addEventListener('formdata',(e)=>{
    console.log(e);
    log
})
// Validation
function valdation(event) {
    let password
    let count = 0;
    // event.preventDefault();
    formEL.forEach(
        element => {
            // console.log(element);
            let name = element.name;
            setInterval(() => {
                if (name == 'fullname') {
                    element.classList.add(element.value.length < 4 ? notValid(element) : isValid(element));
                }
                else if (name == 'email') {
                    element.classList.add(email(element) ? isValid(element) : notValid(element));
                }
                else if (name == 'mobile') {
                    element.classList.add(element.value.length == 10 ? isValid(element) : notValid(element));
                }
                else if (name == 'password') {
                    password = element.value;
                    element.classList.add(element.value.length < 6 ? notValid(element) : isValid(element));
                }
                else if (name == 'confirm_password') {
                    element.classList.add(match(password, element) ? isValid(element) : notValid(element));
                }
            })
        }
    );

    formEL.forEach(element => {
        if (element.classList.contains('is-valid')) {
            count++;
        }
    });

    if (count < 5) {
        event.preventDefault();
    }
    else{
        return true;
    }
}
function email(element) {
    let eamilValue = element.value.toString();
    if (eamilValue.endsWith('.com') && eamilValue.includes('@')) {
        return true;
    }
    else {
        return false;
    }
}
function match(password, element) {
    if (password != "" && password === element.value) {
        return true;
    }
    else {
        return false;
    }
}
function isValid(element) {
    element.classList.remove('is-invalid');
    return 'is-valid';
}
function notValid(element) {
    element.classList.remove('is-valid');
    return 'is-invalid';
}
