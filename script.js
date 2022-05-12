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


const selectOneAd = document.querySelector('#ad-iam');
const selectTwoAd = document.querySelector('#ad-iwant');
const selectThreeAd = document.querySelector('#ad-interest');
const modalNameAd = document.querySelector('#adName');
const modalEmailAd = document.querySelector('#adEmail');
const modalPhoneAd = document.querySelector('#adTel');
const modalMessageAd = document.querySelector('#adMessage');
const modalCheckAd = document.querySelector('#adSignup');

const submitFormAd = document.querySelector('#ad-submit');


function sendAd(){

    console.log(selectOneAd.value);
    console.log(selectTwoAd.value);
    console.log(selectThreeAd.value);
    console.log(modalNameAd.value);
    console.log(modalEmailAd.value);
    console.log(modalPhoneAd.value);
    console.log(modalMessageAd.value);
    console.log(modalCheckAd.value);
}

submitFormAd.addEventListener('click', sendAd);