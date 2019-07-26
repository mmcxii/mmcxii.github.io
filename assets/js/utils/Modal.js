const techBtns = document.querySelector('.tech__items');

const techModals = document.querySelectorAll('.modal');

let currentModal;
let currentModalClose;

techBtns.addEventListener('click', (e) => {
    if (!e.target.matches('.tech__btn')) {
        return;
    } else {
        const tech = e.target.dataset['tech'];

        currentModal = document.querySelector(`.modal.${tech}`);
        currentModalClose = currentModal.querySelector('.card__btn--close');

        openModal(currentModal);

        window.addEventListener('click', outsideClick);
        currentModalClose.addEventListener('click', closeModal);
    }
});

function openModal(modal) {
    modal.classList.remove('hide');
}

function closeModal() {
    techModals.forEach((modal) => modal.classList.add('hide'));
}

function outsideClick(e) {
    if (e.target.matches('.modal')) {
        closeModal();
    }
}
