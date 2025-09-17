(function () {
    // Form + key DOM
    const form       = document.getElementById('bundle-product-form');
    const variantInp = document.getElementById('bundleVariantId');
    const packInp    = document.getElementById('bundlePack');
  
    const packCards  = document.getElementById('bundleCards');
    const sizeInputs = document.querySelectorAll('.js-size-input');
  
    const frontSel   = document.getElementById('frontColors');
    const backSel    = document.getElementById('backColors');
    const rushChk    = document.getElementById('rush');
    const tumChk     = document.getElementById('bundleTumblers');
  
    // If the theme still exposes a native option select called "Pack Size", we can read it too.
    const themePackSelect =
      document.querySelector('[name="options[Pack Size]"]') ||
      document.querySelector('[data-pack-size]') ||
      document.getElementById('pack-size') ||
      document.getElementById('tier');
  
    function getPack() {
      return (themePackSelect?.value || packInp?.value || '24').toString();
    }
  
    function setActiveCard(pack, variantId) {
      // Visual active state
      document.querySelectorAll('.bundle-card').forEach(btn => {
        const isActive = btn.dataset.pack === pack;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
      // Hidden inputs used on submit
      if (packInp)     packInp.value = pack;
      if (variantInp && variantId) variantInp.value = variantId;
      // Update the /Allocated: x / y
      assertPackTotal();
    }
  
    // Clicks on pack-size cards
    if (packCards) {
      packCards.addEventListener('click', (e) => {
        const btn = e.target.closest('.bundle-card');
        if (!btn) return;
        setActiveCard(btn.dataset.pack, btn.dataset.variantId);
      });
  
      // Auto-select the "best deal" if present, else first card
      const best = Array.from(packCards.querySelectorAll('.bundle-card'))
        .find(b => b.querySelector('div')?.textContent?.includes('Best Deal'));
      const first = packCards.querySelector('.bundle-card');
      const initial = best || first;
      if (initial) setActiveCard(initial.dataset.pack, initial.dataset.variantId);
    }
  
    function sizesPayload() {
      let total = 0;
      const parts = [];
      sizeInputs.forEach(inp => {
        const qty = parseInt(inp.value || '0', 10);
        if (qty > 0) {
          parts.push(`${inp.dataset.size}:${qty}`);
          total += qty;
        }
      });
      return { text: parts.join('|'), total };
    }
  
    function assertPackTotal() {
      const want = parseInt(getPack(), 10) || 0;
      const { total } = sizesPayload();
      const totalEl = document.querySelector('.js-size-total');
      const wantEl  = document.querySelector('.js-pack-total');
      if (totalEl) totalEl.textContent = total;
      if (wantEl)  wantEl.textContent  = want;
      return total === want;
    }
  
    async function addAddon(variantId, qty, note, parentKey) {
      if (!variantId || qty <= 0) return;
      return fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{
            id: Number(variantId),
            quantity: qty,
            properties: { _parent: parentKey, _addon: note }
          }]
        })
      }).then(r => r.json());
    }
  
    async function onSubmit(e) {
      e.preventDefault();
  
      if (!assertPackTotal()) {
        alert('Please allocate sizes so the total equals your selected pack quantity.');
        return;
      }
  
      // 1) Add main item using THIS form
      const data = new FormData(form);
  
      // Helpful line item properties for the main bundle
      const sizeStr = sizesPayload().text;
      data.append('properties[_bundle]', 'apparel');
      data.append('properties[sizes]', sizeStr);
      data.append('properties[front_colors]', frontSel?.value || '1');
      data.append('properties[back_colors]', backSel?.value  || '0');
  
      const mainRes = await fetch('/cart/add.js', {
        method: 'POST',
        body: data
      }).then(r => r.json());
  
      const parentKey = mainRes?.key;
      const pack = getPack();
  
      // 2) Calculate add-ons
      const extrasFront = Math.max(0, parseInt(frontSel?.value || '1', 10) - 1); // 1 color included on front
      const extrasBack  = Math.max(0, parseInt(backSel?.value  || '0', 10));     // back billed fully
  
      // 3) Add add-ons by pack
      if (extrasFront > 0) {
        const v = window.BUNDLE_ADDONS?.frontColors?.variants?.[pack];
        await addAddon(v?.id, extrasFront, `Extra front colors x${extrasFront}`, parentKey);
      }
  
      if (extrasBack > 0) {
        const v = window.BUNDLE_ADDONS?.backColors?.variants?.[pack];
        await addAddon(v?.id, extrasBack, `Back colors x${extrasBack}`, parentKey);
      }
  
      if (rushChk?.checked) {
        const v = window.BUNDLE_ADDONS?.rush?.variants?.[pack];
        await addAddon(v?.id, 1, 'Rush processing', parentKey);
      }
  
      if (tumChk?.checked) {
        const v = window.BUNDLE_ADDONS?.tumblers?.variants?.[pack];
        await addAddon(v?.id, 1, `Tumblers ${pack}`, parentKey);
      }
  
      // 4) Go to cart
      window.location.href = '/cart';
    }
  
    // Live totals while user types
    document.addEventListener('change', assertPackTotal);
  
    // Bind submit only to our bundle form
    form?.addEventListener('submit', onSubmit);
  
    // Initial totals on load
    assertPackTotal();
  })();
  