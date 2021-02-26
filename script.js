const buyBtn = document.querySelector('.header__buy');
const goToHellBtn = document.querySelector('.header__gotohell');
const popup = document.querySelector('.popup');
const popupBack = document.querySelector('.popup__back_btn');
const popupQuestionBtns = document.querySelectorAll('.popup__question_btn');
const popupQuestionMessage = document.querySelector('.popup__question_message');
const popupSubscribeBtn = document.querySelector('.popup__sub_btn');
const popupSubscribeInput = document.querySelector('.popup__sub_input');
const popupSubscribeForm = document.querySelector('.popup__sub_form');
const popupSubscribePersonal = document.querySelector('.popup__sub_personal');
const popupSubscribeMessage = document.querySelector('.popup__sub_message');

const hidePopup = () => {
    popup.classList.add('popup--hide');
    popupBack.removeEventListener('click', hidePopup);

    if (!popupQuestionMessage.classList.contains('hidden')) {
        popupQuestionMessage.classList.add('hidden');
    }

    if (popupSubscribeForm.classList.contains('hidden')) {
        hideSubscribeMessage();
    }

    popupSubscribeBtn.setAttribute('disabled', true);
    popupSubscribeInput.value = '';
}

const showSubscribeMessage = () => {
    popupSubscribeForm.classList.add('hidden');
    popupSubscribePersonal.classList.add('hidden');
    popupSubscribeMessage.classList.remove('hidden');
}

const hideSubscribeMessage = () => {
    popupSubscribeForm.classList.remove('hidden');
    popupSubscribePersonal.classList.remove('hidden');
    popupSubscribeMessage.classList.add('hidden');
}

const clickSubscribe = (evt) => {
    evt.preventDefault();
    showSubscribeMessage();
    setTimeout(hidePopup, 700);
}

const showPopup = () => {
    popup.classList.remove('popup--hide');
    
    popupSubscribeBtn.addEventListener('click', function(evt) {
        clickSubscribe(evt);
        popupSubscribeForm.classList.add('hidden');
        popupSubscribePersonal.classList.add('hidden');

    });

    popupQuestionBtns.forEach( btn => {
        btn.addEventListener('click', () => {
            popupQuestionMessage.classList.remove('hidden');
            setTimeout(hidePopup, 700);
        });
    });

    popupBack.addEventListener('click', hidePopup);
    
    popupSubscribeInput.addEventListener('change', () => {
        if (popupSubscribeInput.value != '') {
            popupSubscribeBtn.removeAttribute('disabled');
        } else {
            popupSubscribeBtn.setAttribute('disabled', true);
        }
    })
}

buyBtn.addEventListener('click', () => {
    alert('Спасибо, что купили билет');
});

goToHellBtn.addEventListener('click', () => {
    showPopup();
});