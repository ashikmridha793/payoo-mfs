// add money to the account

// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
      // prevent page reload after form submission
      event.preventDefault();
      
      // step-2:
      const addMonyInput = document.getElementById('input-add-money').value
      console.log(addMonyInput);

      // get the pin number
      const pinNumber = document.getElementById('input-pin-number').value
      console.log(typeof pinNumber);

      // step -3: validate pin number
      if (pinNumber === '1234'){
            console.log('adding money to your account')

            // step-4: get the current balance
            const balance  = document.getElementById('account-balance').innerText
            console.log(typeof balance);

            // step-5: add addMonyInput to the current balance
            const addMonyNumber = parseFloat(addMonyInput)
            const balanceNumber = parseFloat(balance)
            const newbalance = addMonyNumber + balanceNumber
            console.log(newbalance);
            
            // step-6: update the balance in the UI/DOM
            document.getElementById('account-balance').innerText = newbalance
      }
      else{
            alert('failed to add money')
      }

})