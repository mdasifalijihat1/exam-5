// card-3 js style 

console.log('welcome')
document.getElementById('btn3-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const  addMoney = document.getElementById('input3-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    console.log(addMoney);

    if(addMoney && addMoneyNumber > 0){
        const balance  =document.getElementById('account-balance3').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        document.getElementById('account-balance3').innerText = newBalance;
        // show popup
        showPopup('Money added successfully!')

        
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
    const popup = document.getElementById('sussess-add3');
    popup.innerText = message;
    popup.style.display = 'block';

    setTimeout(function() {
        popup.style.display='none';
    }, 1000);
 }