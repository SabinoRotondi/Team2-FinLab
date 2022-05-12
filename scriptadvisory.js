const selectOneAd = document.querySelector('#ad-iam');
const selectTwoAd = document.querySelector('#ad-iwant');
const selectThreeAd = document.querySelector('#ad-interest');
const modalNameAd = document.querySelector('#adName');
const modalEmailAd = document.querySelector('#adEmail');
const modalPhoneAd = document.querySelector('#adTel');
const modalMessageAd = document.querySelector('#adMessage');
const modalCheckAd = document.querySelector('#adSignup');

const submitFormAd = document.querySelector('#ad-submit');


function sendAd() {

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
