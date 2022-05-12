const selectOneCo = document.querySelector('#foIam');
const selectTwoCo = document.querySelector('#foIwant');
const selectThreeCo = document.querySelector('#foInterest');
const contactusName = document.querySelector('#formName');
const contactusEmail = document.querySelector('#foEmail');
const contactusPhone = document.querySelector('#formTel');
const contactusMessage = document.querySelector('#foMessage');
const contactusCheck = document.querySelector('#foSignup');

const submitFormCo = document.querySelector('#form-submit');

function sendContactus() {
    console.log(selectOneCo.value);
    console.log(selectTwoCo.value);
    console.log(selectThreeCo.value);
    console.log(contactusName.value);
    console.log(contactusEmail.value);
    console.log(contactusPhone.value);
    console.log(contactusMessage.value);
    console.log(contactusCheck.value);
}

submitFormCo.addEventListener('click', sendContactus);
