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
        const balance  =document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        document.getElementById('account-balance').innerText = newBalance;

         // show popup
         showPopup('Money added successfully!');
      
        // add to doanation hostory
        const p =document.createElement('p')
        const currentDateTime = new Date().toLocaleDateString();        
        p.innerText = `${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh ${newBalance} 
                                    Date: ${currentDateTime}`
        // show tag
        document.getElementById('history-container').appendChild(p)

         
        
    }
    else if (addMoneyNumber <= 0) {
              alert('Negative amount is not allowed.')              
    }
    else{
        alert('please enter your valid amount')
    }

} );

// show popup 

 function showPopup(message){
    const popup = document.getElementById('sussess-add');
    popup.innerText = message;
    popup.style.display = 'block';

    setTimeout(function() {
        popup.style.display='none';
    }, 1000);
 }



