const selectOne = document.querySelector('#iam');
const selectTwo = document.querySelector('#iwant');
const selectThree = document.querySelector('#interest');
const modalName = document.querySelector('#modalName');
const modalEmail = document.querySelector('#email');
const modalPhone = document.querySelector('#modalTel');
const modalMessage = document.querySelector('#message');
const modalCheck = document.querySelector('#signup');

// const formEntries = {
//     "I'm a/an": selectOne.value,
//     "I want": selectTwo.value,
//     "I'm interested in": selectThree.value,
//     "Your Name": modalName.value,
//     "Your Email": modalEmail.value,
//     "Phone Number": modalPhone.value,
//     "Message": modalMessage.value,
//     "Signed up": modalCheck.value,
// }

const submitForm = document.querySelector('#modal-submit');

function send(){
    // console.log(formEntries);

    console.log(selectOne.value);
    console.log(selectTwo.value);
    console.log(selectThree.value);
    console.log(modalName.value);
    console.log(modalEmail.value);
    console.log(modalPhone.value);
    console.log(modalMessage.value);
    console.log(modalCheck.value);
}

submitForm.addEventListener('click', send);