document.getElementById('subscribeForm').addEventListener('submit', function (event) {
               var emailInput = document.getElementById('emailInput').value;
               var errorMessage = document.getElementById('error-message');
               var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           
               if (!emailPattern.test(emailInput)) {
                   event.preventDefault();
                   errorMessage.style.display = 'block';
               } else {
                   errorMessage.style.display = 'none';
               }
           });
