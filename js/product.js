var x = 0;

let output = document.getElementById('output'); 

function btn1() {
    document.getElementById('output').innerHTML = ++x; 
}

function btn2() {
  document.getElementById('output').innerHTML = --x;
}


const emailInput = document.getElementById('email-input');
const subscribeBtn = document.getElementById('subscribe-btn');

subscribeBtn.addEventListener('click', function() {
  const emailValue = emailInput.value;

  console.log('User submitted email: ' + emailValue);


  document.getElementById('email-input').value = '';

});
