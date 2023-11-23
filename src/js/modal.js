const itemEls = document.querySelectorAll('.products__item');
const modal = document.querySelector('.modal');


modal.addEventListener('click', onCloseModal);
itemEls.forEach(itemEl => {
    itemEl.addEventListener('click', onModalOpen)
});

// console.log(itemEls);

function onCloseModal(e) { 
    if (e.code === 'Escape' || e.target === modal || e.target.closest('.modal__close')) {
        modal.classList.remove('open');
        window.removeEventListener('keydown', onDocumentKeyPress)
    }

};

function onModalOpen(e) {
    e.preventDefault();
    modal.classList.add('open');

    window.addEventListener('keydown', onDocumentKeyPress);
};

const onDocumentKeyPress = ({code}) => {
    if (code === 'Escape') {
        onCloseModal({ code: 'Escape'});
    }
};

