// т.к. нет базы данных с карточками, придётся копировать карточки с главного экрана сайта
let cardRowMain = document.querySelector('.catalog').querySelector('section');
function generateCatalog() {
    let catalog = document.querySelector(".catalog-modal-wrapper");
    if(catalog.children.length === 0) {
        for (i = 0; i < 32; i++){
            let cardRow = cardRowMain.cloneNode(true);
            for (k = cardRow.children.length - 1; k >= 0; k--) {
                catalog.appendChild(cardRow.children[Math.random() * k | 0]);
            };
        }
    }
    else{
        for (k = catalog.children.length - 1; k >= 0; k--) {
            catalog.appendChild(catalog.children[Math.random() * k | 0]);
        };
    }
    console.log(catalog.children.length);
}
generateCatalog();

// открытие/закрытие модального окна каталога
let catalogModal = document.querySelector('.catalog-modal');
function openCatalog() {
    catalogModal.classList.replace('modal', 'modal-active');
    document.body.style.overflow = 'hidden';
    console.log('balls');
}
function closeCatalog() {
    catalogModal.classList.replace('modal-active', 'modal');
    document.body.style.overflow = '';
    console.log('balls');
}

document.addEventListener('keydown', function(e) {
    e.keyCode == 27 ? closeCatalog() : '';
});

// фильтры
function listEvent(id){
    let checkList = document.getElementById(id);
    if(checkList.parentNode.classList.contains('visible')){
        checkList.parentElement.classList.remove('visible');
    }
    else{
        checkList.parentElement.classList.add('visible');
    }
}