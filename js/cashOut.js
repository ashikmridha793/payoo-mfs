document.getElementById('btn-cash-out').addEventListener('click', function(event){
      event.preventDefault();
      console.log('cash out button clicked');

      const cashOut = document.getElementById('input-cash-out').value;
      const cashOutNumber = parseFloat(cashOut);
      const pinNumber = document.getElementById('input-cash-out-pin').value;

      console.log(cashOut, pinNumber);

      // wrong way to verify pin number
      if (pinNumber === '1234'){
            const balanec = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balanec);

            // reduce the balance
            const newBalence = balanceNumber - cashOutNumber
            
            // update the UI
            document.getElementById('account-balance').innerText = newBalence;
      }
      else{
            alert('!Failed to cash out. try again later!');
      }
})