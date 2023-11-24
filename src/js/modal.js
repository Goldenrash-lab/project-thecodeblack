const modal = document.querySelector('.modal');
const productList = document.querySelector('.products__list');

// productList.addEventListener('click', e => {
//     const targetEl = e.target.closest('.products__item')
//     if (targetEl) {
//         onModalOpen();
//     }

// });

function onCloseModal(e) { 
        modal.classList.remove('open');
        window.removeEventListener('keydown', onDocumentKeyPress)
};

function onModalOpen(e) {
    // e.preventDefault();
    modal.classList.add('open');
    window.addEventListener('keydown', onDocumentKeyPress);
};

function onDocumentKeyPress(e) {
    if (e.code === 'Escape') {
        onCloseModal();
    }
}

modal.addEventListener('click', e => {
    if (e.target === modal || e.target.closest('.modal__close')) {
        onCloseModal()
    }
});

