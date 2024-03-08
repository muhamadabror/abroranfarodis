const menuToggle= document.querySelector('menu-toggle input');
const nav= document.querySelector('nav ul');

menuToggle.addEventListener('click', function slideBar () {
    nav.classList.toggle('slide');
    menuToggle.classList.toggle('burger-slide')
})
slideBar();

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
}

