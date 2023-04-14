var form = document.getElementById('form');


 function btn(){
   
    var subscribe = document.getElementById('subscribe').value
      console.log(subscribe)

      document.getElementById('subscribe').value = '';
      
    }
  

const emailInput = document.getElementById('email-input');
const subscribeBtn = document.getElementById('subscribe-btn');

subscribeBtn.addEventListener('click', function() {
  const emailValue = emailInput.value;

  console.log('User submitted email: ' + emailValue);


  document.getElementById('email-input').value = '';

});

