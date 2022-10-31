"use strict";
//// Nodos del formulario
let sectionForm = document.querySelector('#form');
// Nombre Card
let containerCardName = document.querySelector('#containerCardName');
let cardName = document.querySelector('#cardName');
let requireCardName = document.querySelector('#requireCardName');
// Numero Card
let cardNumber = document.querySelector('#cardNumber');
let requireCardNumber = document.querySelector('#requireCardNumber');
let requireMax16Characters = document.querySelector('#requireMax16Characters');
let requireMin16Characters = document.querySelector('#requireMin16Characters');
// Month Year Card
let monthCard = document.querySelector('#monthCard');
let requireMonth1to12 = document.querySelector('#requireMonth1to12');
let yearCard = document.querySelector('#yearCard');
let requireYear22to28 = document.querySelector('#requireYear22to28');
let requireMonthYear = document.querySelector('#requireMonthYear');
// Cvc NumberCard
let cvcNumberCard = document.querySelector('#cvcCardNumber');
let requireCvcNumber = document.querySelector('#requireCvcNumber');
let requireMax3Numbers = document.querySelector('#requireMax3Numbers');
let requireMin3Numbers = document.querySelector('#requireMin3Numbers');
// Button submit
let submitButton = document.querySelector('#submitButton');
// Nodos de la tarjeta (imagenes)
// Frente
let cardFrontNumber = document.querySelector('#cardFrontNumber');
let nameCardFront = document.querySelector('#cardFrontName');
let monthCardFront = document.querySelector('#cardFrontMonth');
let yearCardFront = document.querySelector('#cardFrontYear');
// Reverso
let cvcCardReverse = document.querySelector('#cvcNumberCardReverse');
//// Nodos al enviar el formulario
let sectionFormSended = document.querySelector('#sectionFormSended');
let continueButton = document.querySelector('#continueButton');
// -----------
function typingDataCard() {
    cvcCardReverse.textContent = '000';
    cardFrontNumber.textContent = '0000000000000000';
    nameCardFront.textContent = 'Your Name';
    monthCardFront.textContent = '00';
    yearCardFront.textContent = '00';
}
typingDataCard();
// Nombre en la tarjeta
cardName.addEventListener('keyup', () => {
    nameCardFront.textContent = '';
    if (cardName.value)
        nameCardFront.textContent = cardName.value;
    if (cardName.value == '') {
        nameCardFront.textContent = 'Your Name';
    }
    else if (cardName.value.length >= 1) {
        requireCardName.classList.add('inactive');
        cardName.classList.remove('borderErrors');
    }
});
// Numero en la tarjeta
cardNumber.addEventListener('keyup', () => {
    cardFrontNumber.textContent = '';
    cardFrontNumber.textContent = cardNumber.value;
    if (cardNumber.value.length > 16) {
        requireMax16Characters.classList.remove('inactive');
    }
    else if (cardNumber.value.length < 16) {
        requireMin16Characters.classList.remove('inactive');
    }
    else {
        requireMax16Characters.classList.add('inactive');
        requireMin16Characters.classList.add('inactive');
    }
    if (cardNumber.value == '') {
        cardFrontNumber.textContent = '0000000000000000';
        requireMin16Characters.classList.add('inactive');
    }
    else {
        requireCardNumber.classList.add('inactive');
        cardNumber.classList.remove('borderErrors');
    }
});
//Mes en la tarjeta
monthCard.addEventListener('keyup', () => {
    monthCardFront.textContent = '';
    monthCardFront.textContent = monthCard.value;
    let valueMonth = Number(monthCardFront.textContent);
    if (valueMonth <= 0 || valueMonth > 12) {
        requireMonth1to12.classList.remove('inactive');
    }
    else {
        requireMonth1to12.classList.add('inactive');
    }
    if (monthCard.value == '') {
        monthCardFront.textContent = '00';
        requireMonth1to12.classList.add('inactive');
    }
    else {
        requireMonthYear.classList.add('inactive');
        monthCard.classList.remove('borderErrors');
        yearCard.classList.remove('borderErrors');
    }
});
// Año en la tarjeta
yearCard.addEventListener('keyup', () => {
    yearCardFront.textContent = '';
    yearCardFront.textContent = yearCard.value;
    let yearValue = Number(yearCardFront.textContent);
    if (yearValue <= 21 || yearValue >= 29) {
        requireYear22to28.classList.remove('inactive');
    }
    else {
        requireYear22to28.classList.add('inactive');
    }
    if (yearCard.value == '') {
        yearCardFront.textContent = '00';
        requireYear22to28.classList.add('inactive');
    }
    else {
        requireMonthYear.classList.add('inactive');
        monthCard.classList.remove('borderErrors');
        yearCard.classList.remove('borderErrors');
    }
});
//CVC en la tarjeta
cvcNumberCard.addEventListener('keyup', () => {
    cvcCardReverse.textContent = '';
    cvcCardReverse.textContent = cvcNumberCard.value;
    if (cvcNumberCard.value.length < 3) {
        requireMin3Numbers.classList.remove('inactive');
        cvcNumberCard.classList.add('borderErrors');
    }
    else if (cvcNumberCard.value.length > 3) {
        requireMax3Numbers.classList.remove('inactive');
        cvcNumberCard.classList.add('borderErrors');
    }
    else {
        requireMin3Numbers.classList.add('inactive');
        requireMax3Numbers.classList.add('inactive');
    }
    if (cvcNumberCard.value == '') {
        cvcCardReverse.textContent = '000';
        requireCvcNumber.classList.add('inactive');
        requireMin3Numbers.classList.add('inactive');
        requireMax3Numbers.classList.add('inactive');
    }
    else if (cvcNumberCard.value.length >= 1) {
        requireCvcNumber.classList.add('inactive');
        cvcNumberCard.classList.remove('borderErrors');
    }
    else {
        requireCvcNumber.classList.add('inactive');
    }
});
// Button Submit
submitButton.addEventListener('click', () => {
    // Name
    if (cardName.value == '') {
        requireCardName.classList.remove('inactive');
        cardName.classList.add('borderErrors');
    }
    // Number
    else if (cardNumber.value.length > 16) {
        requireCardNumber.classList.remove('inactive');
        cardNumber.classList.add('borderErrors');
    }
    else if (cardNumber.value.length < 16) {
        requireCardNumber.classList.remove('inactive');
        cardNumber.classList.add('borderErrors');
    }
    else if (cardNumber.value == '') {
        requireCardNumber.classList.remove('inactive');
        cardNumber.classList.add('borderErrors');
    }
    // Month and Year
    else if (monthCard.value == '' || yearCard.value == '') {
        requireMonthYear.classList.remove('inactive');
        monthCard.classList.add('borderErrors');
        yearCard.classList.add('borderErrors');
    }
    // CVC Number
    else if (cvcNumberCard.value == '') {
        requireCvcNumber.classList.remove('inactive');
        cvcNumberCard.classList.add('borderErrors');
    }
    else if (cvcNumberCard.value.length < 3) {
        requireCvcNumber.classList.remove('inactive');
    }
    else if (cvcNumberCard.value.length > 3) {
        requireCvcNumber.classList.remove('inactive');
    }
    else {
        sectionForm.classList.add('inactive');
        sectionFormSended.classList.remove('inactive');
    }
});
// Button Continue
continueButton.addEventListener('click', () => {
    cvcCardReverse.textContent = '000';
    cardFrontNumber.textContent = '0000000000000000';
    nameCardFront.textContent = 'Your Name';
    monthCardFront.textContent = '00';
    yearCardFront.textContent = '00';
    cardName.value = '';
    cardNumber.value = '';
    monthCard.value = '';
    yearCard.value = '';
    cvcNumberCard.value = '';
    requireCardName.classList.add('inactive');
    requireCardNumber.classList.add('inactive');
    requireMonthYear.classList.add('inactive');
    requireCvcNumber.classList.add('inactive');
    sectionForm.classList.remove('inactive');
    sectionFormSended.classList.add('inactive');
});
