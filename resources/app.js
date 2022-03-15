const formLogin = document.getElementById('formLogin');
const inputLogin = document.querySelector("input");
// *login button 으로 처리 시
//const btnLogin = document.querySelector("button");

// btnLogin.addEventListener('click', function() {
//   console.log('doLogin');
//   console.log('input::', inputLogin.value);
//   const inputValue = inputLogin.value;

// });

// *submit으로 처리 시
formLogin.addEventListener('submit', function() {
  console.log('doLogin');
  console.log('input::', inputLogin.value);
  const inputValue = inputLogin.value;

});

