const email = document.getElementById('email1');
const password = document.getElementById('Password1');
const form = document.getElementById('form1');

form.addEventListener('submit', (e) =>{
  let message=[]
  if(password.length <= 6 ){
    message.push('Need longer password')
  }
})