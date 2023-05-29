const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};

const nameInput = $('.name');
const usernameInput = $('.user');
const emailInput = $('.email');
const userInput = $('.user');
const passwordInput = $('.password');
const rePasswordInput = $('.re-password');
const form = $('.onSubmit');
const err0 = $('.err0');
const err1 = $('.err1');
const err8 = $('.err8');
const err9= $('.err9');
const err4 = $('.err4');
const err5= $('.err5');
const err10= $('.err10');
const err6 = $('.err6');
const err7= $('.err7');
const err2 = $('.err2');
const err3= $('.err3');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const regexName = /^[a-zA-Z]{8,}$/i;
  const regexEmail = /^[a-z0-9A-Z]+[@][a-z]+[.][a-z]{3}$/i;
  const regexPassword = /^[a-zA-Z0-9]{8,}$/i;

  const name = nameInput.value;
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const rePassword = rePasswordInput.value;


  if (name.trim() === '') {
    err0.innerHTML = 'Name Không được để trống';
  } else if (!regexName.test(name)) {
    err1.innerHTML = 'Tên phải có trên 8 kí tự và chỉ chứa chữ cái';
  } else {
    err0.innerHTML = '';
    err1.innerHTML = '';
  }
  if(email.trim() === '') {
    err8.innerHTML = 'Email Không được để trống';
  } else if (!regexEmail.test(email)) {
    err9.innerHTML = 'Email phải có ký tự số ,chữ ,@';
  } else {
    err8.innerHTML = '';
    err9.innerHTML = '';
  }
  if (username.trim() === '') {
    err2.innerHTML = 'Username Không được để trống';
  } else if (!regexName.test(username)) {
    err3.innerHTML = 'Tên phải có trên 8 kí tự và chỉ chứa chữ cái';
  } else {
    err2.innerHTML = '';
    err3.innerHTML = '';
  }
  if(password.trim() === '') {
    err4.innerHTML = 'Password Không được để trống';
  } else if (!regexPassword.test(password)) {
    err5.innerHTML = 'Passwword phải gồm ít nhất 8 chữ cái';
  } else {
    err4.innerHTML = '';
    err5.innerHTML = '';
  }
  if(rePassword.trim() === '') {
    err6.innerHTML = 'rePassword Không được để trống';
  } else if (!regexPassword.test(password)) {
    err7.innerHTML = 'Passwword phải gồm  ít nhất 8 chữ cái';
  } else if (password!=rePassword) {
    err10.innerHTML = 'Phải nhập đúng lại password';
  } else{
    err6.innerHTML = '';
    err7.innerHTML = '';
    err10.innerHTML = '';
  }

});
