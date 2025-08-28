// Lightweight jQuery bootstrap with a simple execution queue
(function() {
  window.jQueryQueue = window.jQueryQueue || [];
  window.jQueryReady = function() {
    try {
      // process queued functions
      (window.jQueryQueue || []).forEach(function(fn){ try { fn && fn(); } catch(_){} });
    } finally {
      window.jQueryQueue = [];
    }
  };

  // Load jQuery immediately
  var s = document.createElement('script');
  s.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
  s.onload = function(){ if (typeof window.jQueryReady === 'function') window.jQueryReady(); };
  document.head.appendChild(s);
})();


