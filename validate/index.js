const $ = (selector) => {
    const elements = document.querySelectorAll(selector);
    return elements.length === 1 ? elements[0] : elements;
  };
  
  const formLogin = $('.form-login2');
  const btn = $('.btn-login2');
  const err1 = $('.err1');
  const err = $('.err2');
  formLogin.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const userName = $('.email').value;
    const password = $('.password').value;
  
    if (userName === '' && password === '') {
      err.innerHTML = 'PassWord không được để trống';
      err1.innerHTML="UserName không được để trống";
    }else if(userName === '' && password !== ''){
        err1.innerHTML="UserName không được để trống";
    }else if(userName !== '' && password == ''){
        err.innerHTML="PassWord không được để trống";
    }
    else{
      err.innerHTML='';
      err1.innerHTML='';
      // submit the form
      formLogin.submit();
    }
  });
  