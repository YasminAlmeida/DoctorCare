export default window.onscroll = function initFixed(){ 
  const header = document.getElementById("myHeader");
  const botao = document.getElementById('menu-mobile'); 
  const title = document.querySelector('.titulo'); 
  const sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    botao.classList.add("white");
    title.classList.add("white");
  } else {
    header.classList.remove("sticky");
    botao.classList.remove("white");
    title.classList.remove("white");
  }
}