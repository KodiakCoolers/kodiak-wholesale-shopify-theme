/*!
 * Optimized Vendors.js - Essential Libraries Only
 * Removed unused libraries, kept only what's needed for carousel
 */

// Essential polyfills for older browsers
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
        return this.substr(position || 0, searchString.length) === searchString;
    };
}

// Modern scroll animations replacing Waypoints
(function() {
    if (!window.IntersectionObserver) return;
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const el = entry.target;
                if (el.classList.contains('animate_right')) {
                    el.classList.add('animated', 'fadeInRight');
                } else if (el.classList.contains('animate_left')) {
                    el.classList.add('animated', 'fadeInLeft');
                } else if (el.classList.contains('animate_up')) {
                    el.classList.add('animated', 'fadeInUp');
                } else if (el.classList.contains('animate_down')) {
                    el.classList.add('animated', 'fadeInDown');
                }
                observer.unobserve(el);
            }
        });
    }, { 
        rootMargin: '0px 0px -30% 0px', 
        threshold: 0.1 
    });

    function init() {
        const elements = document.querySelectorAll('.animate_right, .animate_left, .animate_up, .animate_down');
        elements.forEach(function(el) {
            observer.observe(el);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

console.info('🚀 Optimized Vendors.js - Modern APIs loaded');
