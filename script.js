const selectOne = document.querySelector('#iam');
const selectTwo = document.querySelector('#iwant');
const selectThree = document.querySelector('#interest');
const modalName = document.querySelector('#modalName');
const modalEmail = document.querySelector('#email');
const modalPhone = document.querySelector('#modalTel');
const modalMessage = document.querySelector('#message');
const modalCheck = document.querySelector('#signup');



const submitForm = document.querySelector('#modal-submit');

function sendModal(){


    console.log(selectOne.value);
    console.log(selectTwo.value);
    console.log(selectThree.value);
    console.log(modalName.value);
    console.log(modalEmail.value);
    console.log(modalPhone.value);
    console.log(modalMessage.value);
    console.log(modalCheck.value);
}

submitForm.addEventListener('click', sendModal);

const offName = document.querySelector('#offName');
const offTel = document.querySelector('#offTel');
const offSubmit = document.querySelector('#offSubmit');

function sendOffCanvas(){

    console.log(offName.value);
    console.log(offTel.value);


}

offSubmit.addEventListener('click', sendOffCanvas)