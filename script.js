const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});