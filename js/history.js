
// show the history 
document.getElementById('show-history')
.addEventListener('click', function(){
    showSectionById('history')
});

function showSectionById (id){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    // show the history
    document.getElementById(id).classList.remove('hidden')
}


// show donation button 

document.getElementById('show-donation')
.addEventListener('click', function(){
    showSectionById('donation')
});

function showSectionById (id){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    // show the history
    document.getElementById(id).classList.remove('hidden')
}

