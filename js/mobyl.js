(() => {
  const refs = {
    openMobylBtn: document.querySelector("[data-mobyl-open]"),
    closeMobylBtn: document.querySelector("[data-mobyl-close]"),
    mobyl: document.querySelector("[data-mobyl]"),
  };

  refs.openMobylBtn.addEventListener("click", toggleMobyl);
  refs.closeMobylBtn.addEventListener("click", toggleMobyl);

  function toggleMobyl() {
    refs.mobyl.classList.toggle("is-hidden");
    }
    
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();