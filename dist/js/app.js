document.addEventListener('DOMContentLoaded', function(){
    function toggleProductDay(e) {
        if(e.target.classList.contains('open')){
            e.target.classList.remove('open')
        } else {
            e.target.classList.add('open');
        }
    }
});



