(function(){
  const btn = document.querySelector('[data-mobile-toggle]');
  const nav = document.querySelector('[data-navlinks]');
  if(btn && nav){
    btn.addEventListener('click', ()=> nav.classList.toggle('open'));
  }
})();
