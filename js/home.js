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
      console.log(pinNumber);

})