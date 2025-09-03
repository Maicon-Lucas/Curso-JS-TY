document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll para a navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lógica para o Slider do Clero
    const cleroMembers = document.querySelectorAll('.clero-member');
    const prevBtn = document.getElementById('prevClero');
    const nextBtn = document.getElementById('nextClero');
    let currentIndex = 0;

    function showCleroMember(index) {
        cleroMembers.forEach((member, i) => {
            if (i === index) {
                member.classList.add('active');
            } else {
                member.classList.remove('active');
            }
        });
    }

    // Inicializa mostrando o primeiro membro
    if (cleroMembers.length > 0) {
        showCleroMember(currentIndex);
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? cleroMembers.length - 1 : currentIndex - 1;
        showCleroMember(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === cleroMembers.length - 1) ? 0 : currentIndex + 1;
        showCleroMember(currentIndex);
    });
});