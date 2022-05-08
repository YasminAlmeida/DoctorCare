export default window.onscroll = function initFixed(){ 
  const header = document.getElementById("myHeader");
  const botao = document.getElementById('menu-mobile'); 
  const title = document.querySelector('.titulo'); 
let elem = document.getElementById('myHeader')
let doc = document.documentElement

window.addEventListener('scroll', function() {
    let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight))
    if(value>1){
      header.classList.add("sticky");
      botao.classList.add("white");
      title.classList.add("white");
    }else {
      header.classList.remove("sticky");
      botao.classList.remove("white");
      title.classList.remove("white");
    }
})
}