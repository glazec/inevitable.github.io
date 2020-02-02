/* adjust the hamburger icon position when notice appear */
(function () {
    if (document.getElementById('notice')){
        el = document.querySelectorAll('button.MD-burger-icon.sidebar-toggle')[0]
        el.style.top= "3pc"
    }
}());

/* bind dismiss event to notice */
(function () {
  if (document.getElementById('notice')){
      const el = document.getElementById('notice');
      el.onclick = function(){
        const burger = document.querySelectorAll('button.MD-burger-icon.sidebar-toggle')[0]
        burger.style.top= "2pc"
        el.remove();
      }
  }
}());
