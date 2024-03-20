//Menu responsive

const menu = document.querySelector('.mobile__menu'),
      menuBtn = document.querySelector('.mobile__menu .mobile__menu_icon'),
      menuCloseBtn = document.querySelector('.mobile__menu .mobile__menu_content .mobile__menu_close');

menuBtn.onclick = () => {
    toggleActive(menu);
}
menuCloseBtn.onclick = () => {
    toggleActive(menu);
}

function removeActive(elements) {
    elements.forEach((element) => {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
    })
}
function toggleActive(element) {
    element.classList.toggle('active');
}


//Iteracion de Features

const tabLinks = document.querySelectorAll('.features__container .tab__menu .tab__link'),
      tabContents = document.querySelectorAll('.features__container .tab__content');

tabLinks.forEach((tabLink, index) => {
    tabLink.addEventListener('click', function() {
        removeActive(tabLinks);
        removeActive(tabContents);
        toggleActive(tabLink);
        toggleActive(tabContents[index]);
    });
});

// Funcionamiento de preguntas

const faqTabs = document.querySelectorAll('.questions__container .questions .question');

faqTabs.forEach((faqTab) => {
    faqTab.addEventListener('click', function() {
        if (faqTab.classList.contains('active')) {
            toggleActive(faqTab);
        } else {
            removeActive(faqTabs);
            toggleActive(faqTab);
        }
    });
});

// Validacion del Email

const formElement = document.querySelector('.form__container form'),
      inputElement = document.querySelector('.form__container form input'),
      submitBtn = document.querySelector('.form__container form button');

submitBtn.onclick = (e) => {
    e.preventDefault();

    const email = inputElement.value;
    if (! validateEmail(email)) {
        formElement.classList.add('form__error');
    } else {
        formElement.classList.remove('form__error');
    }
}

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateEmail(email) {
    return String(email).toLowerCase().match(re);
};


