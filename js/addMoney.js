/**
 * 
 * 1. add event listener to the add money button (form submit)
 * make sure to preventDefault so that page doesn't reloads
 * 2. get the money user wants to add
 * also, get the pin number provided 
 * 3. verify the pin number. for, wrong pin number ==> failed to add 
 * for, right pin number, allow to add the number to the account balance
 * 
 * 4. get the current ballance 
 * 
 * 5. add the money to be added with the current balance
 * 
 * 6. display/update the balance in the DOM/UI
 * 7. clear the input field
 * 
 */



document.getElementById('btn-add-money').addEventListener('click', function(event){
      event.preventDefault();
      console.log('added the event handler');

      // get the money and the pin number
      const addMoney = document.getElementById('input-add-money').value;
      const addMoneyNumber = parseFloat(addMoney);
      const pinNumber = document.getElementById('input-pin-number').value;

      // console.log(addMoney, pinNumber);
      if (pinNumber === '1234'){
            // add money to the account
            const balance = document.getElementById('account-balance').innerText;
            console.log(balance);
            const balanceNumber = parseFloat(balance);

            // new balance
            const newbalance = balanceNumber + addMoneyNumber;

            // update the DOM with updated balance
            document.getElementById('account-balance').innerText = newbalance;
            

      }
      else{
            alert('!Failed to add money!');
      }
})