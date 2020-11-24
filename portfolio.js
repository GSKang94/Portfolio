const navbar = document.querySelector('#navbar');
window.onscroll = () => {
    if (window.scrollY > 530 && window.scrollY <= 1000) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

console.log('attached')





// dark mode 
// Select the button
// const btn = document.querySelector('.btn-toggle');
// Listen for a click on the button
// btn.addEventListener('click', function () {
    // Then toggle (add/remove) the .dark-theme class to the body
    // document.body.classList.toggle('dark-theme');
// })
// dark mode end