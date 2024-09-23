// add money 

// first card add money design 

console.log('welcome')
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const  addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    console.log(addMoney);

    if(addMoney && addMoneyNumber > 0){
         const myBalanceElement = document.getElementById('my-account-balance');
         const myBalnaceNumber = parseFloat(myBalanceElement.innerText);
 
         // check balance 
         if(addMoneyNumber <= myBalnaceNumber){
             const newMyBalance = myBalnaceNumber - addMoneyNumber;
             myBalanceElement.innerText = newMyBalance; 
             
             
        const balance  =document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        document.getElementById('account-balance').innerText = newBalance;

         
      
        // add to doanation hostory
        const p =document.createElement('p')
        const currentDateTime = new Date().toLocaleDateString();        
        p.innerHTML = `${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh ${newBalance} 
                                    Date: ${currentDateTime}`
        // show tag
        document.getElementById('history-container').appendChild(p)       

        // alert success
        alert('Congratulation! Donation successfull!')

         } else{
            alert('Your account doesn`t have enoungh money ')
         }
        
        
    }
    
    else if (addMoneyNumber <= 0) {
              alert('Negative amount is not allowed.')              
    }
    else{
        alert('please enter your amount')
    }

} );

// show popup 





