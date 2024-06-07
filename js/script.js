function toggleMenu () {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  let prevScrollpos = window.pageYOffset;
  
  window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
  
      if (prevScrollpos > currentScrollPos) {
          document.getElementById("desktop-nav").style.top = "0";
      } else {
          document.getElementById("desktop-nav").style.top = "-70px"; // Altura da Navbar
      }
  
      prevScrollpos = currentScrollPos;
  };
  
  let prevScrollPos = window.pageYOffset;
  let hamburgerNav = document.getElementById("hamburger-nav");
  
  window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
  
      if (prevScrollPos > currentScrollPos) {
          // Rolar para cima
          hamburgerNav.style.top = "0";
      } else {
          // Rolar para baixo
          hamburgerNav.style.top = `-${hamburgerNav.clientHeight}px`;
      }
  
      prevScrollPos = currentScrollPos;
  };
  
  // Função para capitalizar a primeira letra de cada frase e após pontos finais
  function capitalizeSentences(text) {
      return text.replace(/(^\w{1})|(\.\s*\w{1})/g, match => match.toUpperCase());
  }
  
  // Função para aplicar a capitalização aos elementos desejados
  function applyCapitalization() {
      const elements = document.querySelectorAll('.nav-list li, #profile, section, #sobre, #projetos, #contato, footer');
      
      elements.forEach(element => {
          element.innerHTML = capitalizeSentences(element.innerHTML);
      });
  }
  
  // Aplicar a capitalização quando o DOM estiver totalmente carregado
  document.addEventListener("DOMContentLoaded", applyCapitalization);
  
