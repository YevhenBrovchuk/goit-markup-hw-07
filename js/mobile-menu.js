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
    
  //   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  //   if (!e.matches) return;
  //   mobyl.classList.remove('is-open');
  //   openMenuBtn.setAttribute('aria-expanded', false);
  //   bodyScrollLock.enableBodyScroll(document.body);
  // });
})();

// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();