// Grab elements
const selectElement = selector => {
    const elements = document.querySelector(selector)
    if(elements) return element;
    throw new Error('something went, make sure that $(selector)exists or is typed correctly.');
};

console.log(selectElement('.navbar'));
//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classlist.add('activated');
    }else{
        headerElement.classlist.remove('activated');
    }
};

window.addEventListener('scroll', scrollHeader);
// Open menu & search pop-up
const menuToggleIcon = selectElement('menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu =  selectElement('menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');

}

menuToggleIcon.addEventListener('click', toggleMenu);
// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

});
// Swiper