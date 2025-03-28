const expandButtons = document.querySelectorAll('.expand-btn');
expandButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.closest('.qa-section').querySelector('.qa-content');
        content.classList.toggle('show');
        button.textContent = content.classList.contains('show') ? '⮝' : '⮟';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const firstSectionContent = document.querySelector('#projects .qa-content');
    const firstExpandButton = document.querySelector('#projects .expand-btn');
    if (firstSectionContent && firstExpandButton) {
        firstSectionContent.classList.add('show');
        firstExpandButton.textContent = '⮝';
    }
});

function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

function openEmail() {
    window.location.href = "mailto:your_email@example.com";
}