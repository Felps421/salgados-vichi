// ========================================
// Mobile Menu Toggle
// ========================================
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');

// Abrir menu
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Fechar menu
menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Fechar menu ao clicar em um item
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// ========================================
// Scroll Suave
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Header com sombra ao rolar
// ========================================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(255, 182, 193, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(255, 182, 193, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Animação de entrada dos cards
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Adicionar animação aos cards de produtos
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// ========================================
// Prevenção de clique duplo nos botões
// ========================================
const buttons = document.querySelectorAll('a[href^="https://wa.me"]');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        this.style.pointerEvents = 'none';
        setTimeout(() => {
            this.style.pointerEvents = 'auto';
        }, 2000);
    });
});

// ========================================
// Log para Analytics (opcional)
// ========================================
console.log('✅ Site Salgados Vichi carregado com sucesso!');
console.log('📱 Para personalizar, edite as URLs das imagens nos comentários do HTML');
console.log('🎨 Cores: Rosa Claro #FFB6C1 | Rosa Médio #FF69B4');