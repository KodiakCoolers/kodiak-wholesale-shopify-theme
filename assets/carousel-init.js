// Initialize Flickity only on product pages and when visible
(function() {
  function initWhenVisible() {
    if (!('IntersectionObserver' in window)) return;
    var galleries = document.querySelectorAll('.product_gallery');
    if (!galleries.length) return;
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        var gallery = entry.target;
        observer.unobserve(gallery);
        var tries = 0;
        (function wait() {
          tries++;
          if (typeof Flickity !== 'undefined') {
            if (!gallery.flickityInstance) {
              try {
                gallery.flickityInstance = new Flickity(gallery, {
                  cellAlign: 'left',
                  contain: true,
                  imagesLoaded: true,
                  lazyLoad: 2,
                  wrapAround: false,
                  pageDots: false
                });
              } catch(e) {}
            }
          } else if (tries < 10) {
            setTimeout(wait, 200);
          }
        })();
      });
    }, { rootMargin: '0px 0px -20% 0px', threshold: 0.05 });
    galleries.forEach(function(g){ observer.observe(g); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initWhenVisible); else initWhenVisible();
})();


