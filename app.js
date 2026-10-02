const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click' , () { document.body.classList.toggle('dark-theme');

if (document.body.classList.contains('dark-theme')) {themeToggleBtn.textContent = 'Mode Terang'; localStorage.setItem('portfolio_theme','dark'); 
} else {
    themeToggleBtn.textContent = 'Mode Gelap'; localStorage.setItem('portfolio_theme','light');
}
});

const savedtheme = localStorage.getItem('portfolio_theme');
if (savedtheme = 'dark') {
    document.body.classList.add('dark-theme'); themeToggleBtn.textContent = 'Mode Terang';
}