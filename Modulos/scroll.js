export default function Initscrol(){
  const seta = document.querySelector(".arrow");
  window.onscroll = function() {scrollFunction()};
  seta.addEventListener('click', topFunction);
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      seta.style.display = "block";
    } else {
      seta.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const section = document.querySelectorAll('.js-scroll');
  if(section.length){
    const windowMetade = window.innerHeight*0.6;
    function Scroll(){
      section.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade)<0;
        if(isSectionVisible){
          section.classList.add('ativo');
        }
      })
    } 
  window.addEventListener('scroll',Scroll);
  Scroll();
  }

} 