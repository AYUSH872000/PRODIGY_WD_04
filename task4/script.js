
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const toggleButton = document.getElementById('toggleButton');
const navList = document.getElementById('navList');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});
