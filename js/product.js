// переключение вкладок описания товара
var descTitles = document.querySelector('.product-desc-titles').querySelectorAll('p');
for (let title of descTitles){
    console.log(title);
}
var descContent = document.querySelector('.product-desc-content').querySelectorAll('p');
for (let content of descContent){
    console.log(content);
}

descTitles[0].classList.add('active');
descContent[0].classList.add('active');

function changeDesc (id){
    for (let i = 0; i < descTitles.length; i++){
        if (descTitles[i].classList.contains('active')){
            descTitles[i].classList.remove('active');
            descContent[i].classList.remove('active');
            break;
        }
    }
    descTitles[id].classList.add('active');
    descContent[id].classList.add('active');
}

// открытие/закрытие модального окна товара
var productCard = document.querySelector('.product');
function openProduct() {
    productCard.classList.replace('modal', 'modal-active');
    document.body.style.overflow = 'hidden';
    console.log('balls');
}
function closeProduct() {
    productCard.classList.replace('modal-active', 'modal');
    document.body.style.overflow = '';
    console.log('balls');
}

document.addEventListener('keydown', function(e) {
    e.keyCode == 27 ? closeProduct() : '';
});