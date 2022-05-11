const selectOne = document.getElementById('iam');
const selectTwo = document.getElementById('want');
const selectThree = document.getElementById('interest');
const modalName = document.getElementById('modalName');
const modalEmail = document.getElementById('email');
const modalPhone = document.getElementById('modalTel');
const modalMessage = document.getElementById('message');

function send(){
    console.log(selectOne.value);
    console.log(selectTwo.value);
    console.log(selectThree.value);
    console.log(modalName.value);
    console.log(modalEmail.value);
    console.log(modalPhone.value);
    console.log(modalMessage.value);
}

// const modalForm = document.getElementById('modal-form');
// modalForm.addEventListener('submit', send);
// modalForm.onsubmit = function(){
//   return send()
// };


// const submitButton = document.getElementById('modal-submit');
// submitButton.addEventListener('click', send);



// onsubmit = " return myFunction()"