// card-3 js style 

console.log('welcome')
document.getElementById('btn3-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const  addMoney = document.getElementById('input3-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    console.log(addMoney);

    if(addMoney && addMoneyNumber > 0){
        const myBalanceElement = document.getElementById('my-account-balance');
        const myBalnaceNumber = parseFloat(myBalanceElement.innerText);

        // check balance 
        if(addMoneyNumber <= myBalnaceNumber){
            const newMyBalance = myBalnaceNumber - addMoneyNumber;
            myBalanceElement.innerText = newMyBalance; 
            
            const balance  =document.getElementById('account-balance3').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        document.getElementById('account-balance3').innerText = newBalance;
        
        const p =document.createElement('p')
        const currentDateTime = new Date().toLocaleDateString();        
        p.innerText = `${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh ${newBalance} 
                                    Date: ${new Date().toString()}`
        // show tag
        document.getElementById('history-container').appendChild(p) 

        // alert success
        alert('Congratulation! Donation successfull!')

        }
        else{
            alert('Your account doesn`t have enoungh money')
        }     
             
    }
    else if (addMoneyNumber <= 0) {
              alert('Invalid amount.')              
    }
    else{
        alert('please enter your valid amount')
    }

} );

// show popup 
