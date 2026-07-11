// Анимация прогресс-баров при загрузке
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });

    // Добавляем год автоматически в футер
    const footerYear = document.querySelector('.footer p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.textContent = `© ${currentYear} Харламов Михаил. Все права защищены.`;
    }

    // Плавный скролл для якорей (если будут)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // === КНОПКА "СКАЧАТЬ ДИПЛОМ" ===
    const diplomaBtn = document.querySelector('.btn-diploma');
    if (diplomaBtn) {
        diplomaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Создаем ссылку для скачивания
            const link = document.createElement('a');
            link.href = 'diploma.pdf';
            link.download = 'Диплом_Харламов_Михаил.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    console.log('Резюме загружено! 🚀');
});