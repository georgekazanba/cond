var order = document.querySelector('.order');

function openOrder() {
    order.classList.replace('modal', 'modal-active');
    document.body.style.overflow = 'hidden';
    console.log('тест');
}
function closeOrder() {
    order.classList.replace('modal-active', 'modal');
    document.body.style.overflow = '';
    console.log('о');
}
document.addEventListener('keydown', function(e) {
    e.keyCode == 27 ? closeOrder() : '';
});

// счётчик
var count = document.getElementById('count');
var sum = document.getElementById('sum');
var price = document.getElementById('price');
sum.innerText = price.innerText.replace(/[^0-9]/g, '') + ' ₽';
function minusItem(){
    if (count.innerText > 1){
        count.innerText--;
        sum.innerText = price.innerText.replace(/[^0-9]/g, '')*count.innerText + ' ₽';
    }
}
function plusItem(){
    if (count.innerText < 100){
        count.innerText++;
        sum.innerText = price.innerText.replace(/[^0-9]/g, '')*count.innerText + ' ₽';
    }
    else{alert("а куда столько?")};
}