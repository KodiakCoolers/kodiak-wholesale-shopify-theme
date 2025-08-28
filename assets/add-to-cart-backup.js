// Conservative backup add-to-cart and basic UI toggles
(function() {
  function onReady(fn){ if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }
  onReady(function() {
    $(document).on('click', '.add_to_cart', function(e) {
      var form = $(this).closest('form[action*="/cart/add"]');
      if (!form.length) return;
      var formData = form.serialize();
      $.ajax({ url: '/cart/add.js', type: 'POST', data: formData, dataType: 'json' })
        .done(function(){ $.getJSON('/cart.js', function(cart){ $('.cart_count').text(cart.item_count); $('.cart-container').addClass('active_link'); setTimeout(function(){ $('.cart-container').removeClass('active_link'); }, 3000); }); })
        .fail(function(){ alert('Error adding item to cart. Please try again.'); });
    });

    $(document).on('click', '.mini_cart, .cart-icon', function(e) {
      e.preventDefault();
      $('.cart-container').toggleClass('active_link');
    });
  });
})();


