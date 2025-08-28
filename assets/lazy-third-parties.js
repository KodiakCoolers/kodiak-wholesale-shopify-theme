// Conservative third-party loader: loads lazyload2 scripts on interaction/idle
(function() {
  function loadDelayed() {
    if (loadDelayed._done) return; loadDelayed._done = true;
    var delayed = document.querySelectorAll('script[type="lazyload2"]');
    delayed.forEach(function(el){
      var src = el.getAttribute('data-src');
      if (!src) return;
      var s = document.createElement('script');
      s.src = src; s.async = true; document.head.appendChild(s); el.remove();
    });
    // Optionally defer chat removal or others here via setTimeout
  }
  ['scroll','touchstart','mousemove','click'].forEach(function(evt){ window.addEventListener(evt, loadDelayed, { once:true }); });
  window.addEventListener('load', function(){ setTimeout(loadDelayed, 2000); });
})();


