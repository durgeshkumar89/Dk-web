var form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    var username = document.getElementById('username').value
      console.log(username)
      document.getElementById('username').value = '';

      var email = document.getElementById('email').value
      console.log(email)
      document.getElementById('email').value = '';

      var mobile = document.getElementById('mobile').value
      console.log(mobile)

      document.getElementById('mobile').value = '';

      var comment = document.getElementById('comment').value
      console.log(comment)

      document.getElementById('comment').value = '';
    });

  