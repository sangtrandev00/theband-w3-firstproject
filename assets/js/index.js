
var closeBtn = document.querySelector('.js-modal-close');

var modal = document.querySelector('.modal');
var ticketBtns = document.querySelectorAll('.js-place-btn');
var modalContainer = document.querySelector('.modal__container');

for(var ticketBtn of ticketBtns) {
    ticketBtn.addEventListener('click', function() {
        modal.classList.add('js-modal');
    })
}

closeBtn.addEventListener('click', function() {
    modal.classList.remove('js-modal');
})

modal.addEventListener('click', function() {
    modal.classList.remove('js-modal');
})

modalContainer.addEventListener('click', function(e) {
    e.stopPropagation();
})
// buyTicketBtn.addEventListener('click', function() {
//     modal.style.display = 'block';
// })