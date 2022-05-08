export default function initMenu(){ 
  const botao = document.getElementById('menu-mobile');    
  const options = document.querySelector('.itens-menu');
  const fundo = document.querySelector('header');
  const titulo = document.querySelector('.titulo');
  const Menu = document.querySelectorAll('.itens-menu a[href^="#"]'); 
  botao.addEventListener('click', abrirModal);
  Menu.forEach(link =>{
    link.addEventListener('click', fecharModal);
})
  function abrirModal(event){
    event.preventDefault();
    botao.classList.add('ativo');
    if (options.classList.contains('ativo')) {
      options.classList.remove('ativo');
      botao.classList.remove('ativo');
      fundo.classList.remove('ativo');
      titulo.classList.remove('ativo');
    }else{
      options.classList.add('ativo');
      fundo.classList.add('ativo');
      titulo.classList.add('ativo');
    }
  }    
  function fecharModal(){
    if (options.classList.contains('ativo')){
      options.classList.remove('ativo');
      botao.classList.remove('ativo');
      fundo.classList.remove('ativo');
      titulo.classList.remove('ativo');
    }
  }
}