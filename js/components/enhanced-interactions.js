/**
 * Enhanced Interactions and Animations
 * Manages advanced UI interactions and scroll-based animations
 */

class EnhancedInteractions {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollReveal();
        this.setupMetricsCounter();
        this.setupProjectCardInteractions();
        this.setupSkillTagAnimations();
        this.setupParallaxEffects();
        this.setupTypewriterEffect();
    }

    /**
     * Scroll reveal animation for elements
     */
    setupScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    // Trigger stagger animation for children
                    const staggerElements = entry.target.querySelectorAll('.stagger-animation');
                    staggerElements.forEach((el, index) => {
                        setTimeout(() => {
                            el.style.animationDelay = `${index * 0.1}s`;
                            el.classList.add('animate');
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        // Observe all sections and cards
        document.querySelectorAll('section, .card-hover, .tech-card').forEach(el => {
            el.classList.add('scroll-reveal');
            observer.observe(el);
        });
    }

    /**
     * Animated counter for metrics
     */
    setupMetricsCounter() {
        const counters = document.querySelectorAll('.metrics-card .gradient-text-animated');
        
        const animateCounter = (counter) => {
            const target = counter.textContent;
            const isPercentage = target.includes('%');
            const isPlus = target.includes('+');
            const numericValue = parseInt(target.replace(/[^\d]/g, ''));
            
            let current = 0;
            const increment = numericValue / 50; // 50 steps
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    current = numericValue;
                    clearInterval(timer);
                }
                
                let displayValue = Math.floor(current);
                if (isPercentage) displayValue += '%';
                if (isPlus && current >= numericValue) displayValue += '+';
                
                counter.textContent = displayValue;
            }, 40);
        };

        // Trigger animation when metrics section is visible
        const metricsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counters.forEach((counter, index) => {
                        setTimeout(() => animateCounter(counter), index * 200);
                    });
                    metricsObserver.unobserve(entry.target);
                }
            });
        });

        const metricsSection = document.querySelector('.metrics-card').closest('section');
        if (metricsSection) {
            metricsObserver.observe(metricsSection);
        }
    }

    /**
     * Enhanced project card interactions
     */
    setupProjectCardInteractions() {
        const projectCards = document.querySelectorAll('.card-hover');
        
        projectCards.forEach(card => {
            const image = card.querySelector('img');
            
            card.addEventListener('mouseenter', () => {
                if (image) {
                    image.classList.add('project-image');
                }
                card.classList.add('project-card');
            });

            card.addEventListener('mouseleave', () => {
                if (image) {
                    image.classList.remove('project-image');
                }
                card.classList.remove('project-card');
            });

            // Add click ripple effect
            card.addEventListener('click', (e) => {
                const ripple = document.createElement('div');
                const rect = card.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: radial-gradient(circle, rgba(0, 247, 255, 0.3) 0%, transparent 70%);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                    z-index: 1;
                `;
                
                card.style.position = 'relative';
                card.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Add ripple animation CSS
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    /**
     * Skill tag hover animations
     */
    setupSkillTagAnimations() {
        const skillTags = document.querySelectorAll('[class*="bg-"][class*="border-"]');
        
        skillTags.forEach(tag => {
            tag.classList.add('skill-tag');
            
            tag.addEventListener('mouseenter', () => {
                // Add subtle glow effect
                const color = tag.className.includes('cyan') ? '0, 247, 255' :
                             tag.className.includes('purple') ? '147, 51, 234' :
                             tag.className.includes('green') ? '34, 197, 94' :
                             tag.className.includes('orange') ? '249, 115, 22' : '0, 247, 255';
                
                tag.style.boxShadow = `0 0 15px rgba(${color}, 0.4)`;
            });

            tag.addEventListener('mouseleave', () => {
                tag.style.boxShadow = '';
            });
        });
    }

    /**
     * Subtle parallax effects
     */
    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.floating, .floating-enhanced');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            parallaxElements.forEach((el, index) => {
                const speed = 0.2 + (index * 0.1);
                el.style.transform = `translateY(${rate * speed}px)`;
            });
        });
    }

    /**
     * Typewriter effect for hero title
     */
    setupTypewriterEffect() {
        const heroTitle = document.querySelector('[data-translate="hero.title"]');
        if (!heroTitle) return;

        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let index = 0;
        const typeWriter = () => {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            } else {
                // Add blinking cursor
                const cursor = document.createElement('span');
                cursor.textContent = '|';
                cursor.style.animation = 'blink 1s infinite';
                heroTitle.appendChild(cursor);
            }
        };

        // Start typewriter effect after a delay
        setTimeout(typeWriter, 1000);

        // Add blink animation CSS
        if (!document.querySelector('#typewriter-styles')) {
            const style = document.createElement('style');
            style.id = 'typewriter-styles';
            style.textContent = `
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    /**
     * Enhanced button interactions
     */
    setupEnhancedButtons() {
        const buttons = document.querySelectorAll('a[class*="bg-"], button[class*="bg-"]');
        
        buttons.forEach(button => {
            button.classList.add('btn-enhanced');
            
            button.addEventListener('click', (e) => {
                // Add success feedback for form submissions
                if (button.type === 'submit') {
                    button.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        button.style.transform = '';
                    }, 150);
                }
            });
        });
    }

    /**
     * Performance monitoring
     */
    monitorPerformance() {
        // Monitor animation performance
        let frameCount = 0;
        let lastTime = performance.now();
        
        const checkFPS = () => {
            frameCount++;
            const currentTime = performance.now();
            
            if (currentTime - lastTime >= 1000) {
                const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                
                // Reduce animations if FPS is too low
                if (fps < 30) {
                    document.body.classList.add('reduce-animations');
                }
                
                frameCount = 0;
                lastTime = currentTime;
            }
            
            requestAnimationFrame(checkFPS);
        };
        
        requestAnimationFrame(checkFPS);
    }
}

// Initialize enhanced interactions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EnhancedInteractions();
});

// Export for module usage
if (typeof module !== 'undefined') {
    module.exports = EnhancedInteractions;
}