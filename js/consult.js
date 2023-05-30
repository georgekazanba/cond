let consult = document.querySelector('.consult');

function openConsult() {
    consult.classList.replace('modal', 'modal-active');
    document.body.style.overflow = 'hidden';
    console.log('а');
}
function closeConsult() {
    consult.classList.replace('modal-active', 'modal');
    document.body.style.overflow = '';
    console.log('б');
}
document.addEventListener('keydown', function(e) {
    e.keyCode == 27 ? closeConsult() : '';
});