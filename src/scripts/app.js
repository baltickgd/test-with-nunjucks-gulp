document.addEventListener('DOMContentLoaded', function(){
    function toggleProductDay(e) {
        if(e.target.classList.contains('open')){
            e.target.classList.remove('open')
        } else {
            e.target.classList.add('open');
        }
    }

    var productsContainer = document.querySelector('.products-container');
    productsContainer.addEventListener('click', toggleProductDay);

    var images = document.getElementsByTagName("img");

    function failImg(img) {
        console.log(img);
    }
});



