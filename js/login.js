// console.log('button clicking file added')
// this is structure of event listener
// document.getElementById('btn-login').addEventListener('click', function(){
      
// })
// step-1: add event handler with the login button
// document.getElementById('btn-login').addEventListener('click', function(event){
//       // step-2: prevent default behavior (prevent reloading browser)
//       event.preventDefault();

//       // step-3: get the phon number inside the pon input field
//       const phonNumber = document.getElementById('phon-number');
//       const pinNumber = document.getElementById('pin-number');

//       console.log(phonNumber.value, pinNumber.value)

//       // step - 4: validate phon and pin number
//       // this is temporary login validation
//       if(phonNumber=== '017' && pinNumber=== '1234'){
//             console.log('You are logged in')
//       }
//       else{
//             alert('wrong phon number or pin')
//       }

// })

document.getElementById('btn-login').addEventListener('click', function(event){
      event.preventDefault();

      // get phon number and pin number
      const phonNumber = document.getElementById('phon-number').value
      const pinNumber = document.getElementById('pin-number').value
      // console.log(phonNumber, pinNumber);
      // bad way to validate
      if (phonNumber === '017' && pinNumber === '1234'){
            console.log('You are logged in')
            window.location.href = './home.html'
      }
      else{
            alert('wrong phon number or pin')
      }
})

