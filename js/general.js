
toolBar();

function toolBar(){
  
  const toolIcon = document.createElement("div");
  toolIcon.classList.add("icons");
  toolIcon.innerHTML = "<i class='fa-solid fa-expand icon-fullscreen cursor-pointer' onclick='enterFullscreen()'></i><i onclick='recarregarPyScript()' class='fa-solid fa-screwdriver-wrench icon-tools cursor-pointer'></i>";

  const logoIcon = document.createElement("div");
  logoIcon.classList.add("logo");
  logoIcon.innerHTML = "<i class='fa-solid fa-lightbulb'></i>";

  const allSlideTitle = document.querySelectorAll(".slide-title h1");
  allSlideTitle.forEach((item) => {
    const newToolIcon = toolIcon.cloneNode(true);
    const newLogoIcon = logoIcon.cloneNode(true);
    
    item.appendChild(newToolIcon);
    item.appendChild(newLogoIcon);

  });

}


// Definir escala em função da resolução do PC
// rescale();

// function rescale(){
//   var height = window.innerHeight;
//   let scale = height/1080;

//   if(window.innerWidth == screen.width && window.innerHeight == screen.height) {
//     scale = scale*0.9;
//   }  


//   var style = document.createElement('style');
  
//   style.innerHTML = '.reveal .slide-content { transform: scale('+scale+'); transform-origin: center top;}';
  
//   document.head.appendChild(style);  
// }

// window.addEventListener('resize', () => {
//   rescale()
// });



function setVhProperty() {
  // Calcula 1% da altura da janela
  const vh = window.innerHeight * 0.01;
  // Atualiza a variável --vh no :root
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Chama a função para definir a variável na carga inicial
setVhProperty();

// Atualiza a variável sempre que a janela for redimensionada
window.addEventListener('resize', setVhProperty);



function enterFullscreen() {
  const slideContent = document.querySelectorAll(".reveal .slide-content");

  if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
    
    // Se estiver em fullscreen, sai do fullscreen
    
    slideContent.forEach(element => {
      element.classList.remove("fullscreen-fix"); // Remove o ajuste de todos os elementos
    });
    
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
  } else {
    // Caso não esteja em fullscreen, entra no fullscreen

    slideContent.forEach(element => {
      element.classList.add("fullscreen-fix"); // Remove o ajuste de todos os elementos
    });

    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    } else {
      console.warn("Seu navegador não suporta o modo fullscreen.");
    }
  }
}

// Loading message - PYSCRIPT
if (blockPyScript) {
  document.getElementById("pyscript-main")?.remove();
  document.getElementById("pyscript-core")?.remove();
} else { 

  const loading = document.getElementById("loading");
  loading.classList.remove("hidden");  

  const targetNode = document.getElementById("pyscript-ready");

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "attributes" && mutation.attributeName === "ready") {
        const isReady = targetNode.getAttribute("ready") === "true";
        console.log(`PyScript ready attribute changed: ${isReady}`);

        if (isReady) {
          loading.classList.add("hidden");
          observer.disconnect(); // Stop observing after it's ready
        }
      }
    }
  });

  // Start observing attribute changes
  observer.observe(targetNode, { attributes: true });
}

// Função para acessar os estilos da imagem após ela ser carregada
function acessarEstilosImagem(imgElement, rescaleValue) {
  const imgStyle = window.getComputedStyle(imgElement);

  const currentWidth = parseFloat(imgStyle.width);
  const currentHeight = parseFloat(imgStyle.height);

  // Calculando o novo tamanho
  const newWidth = currentWidth * rescaleValue;
  const newHeight = currentHeight * rescaleValue;

  // Salvar margens e garantir que o box-sizing esteja correto
  const originalMargin = imgStyle.margin;
  imgElement.style.margin = originalMargin;
  imgElement.style.boxSizing = "border-box"; // Força box-sizing correto

  // Aplicar as novas dimensões da imagem sem interferir no layout
  imgElement.style.width = `${newWidth}px`;
  imgElement.style.height = "auto";
}

// Função para aplicar um delay
function aplicarDelay(func, imgElement, rescaleValue) {
  setTimeout(() => {
    func(imgElement, rescaleValue);
  }, 500);
}


function aplicarRescale() {
  document.querySelectorAll("img").forEach(img => {
    const escala = 1;
    if (!isNaN(escala)) {
      img.style.transform = `scale(${escala*window.screen.height/1200})`;
      img.style.transformOrigin = "center center"; // mantém a imagem centralizada
      img.style.display = "inline-block"; // evita que a escala quebre o layout
    }
  });
}
aplicarRescale()


// Função para observar os elementos <p> com o atributo rescale
function observarImagens() {
  // Buscar todos os elementos <p> com o atributo 'rescale'
  const pElements = document.querySelectorAll("p[rescale]");
  const imgElements = document.querySelectorAll("img[rescale]");

  pElements.forEach((pElement) => {
    // var height = screen.height;
    // const scaleWindows = height/850;
    
    // const rescaleValue = parseFloat(pElement.getAttribute("rescale")*scaleWindows);
    const rescaleValue = parseFloat(pElement.getAttribute("rescale"))*window.screen.height/1200;

    const imgElement = pElement.querySelector("img");

    // Caso a imagem já esteja no DOM
    if (imgElement) {
      // Se a imagem já foi carregada
      if (imgElement.complete) {
        // A imagem já foi carregada, então aplica a escala com um delay
        aplicarDelay(acessarEstilosImagem, imgElement, rescaleValue); // Delay de 200ms
      } else {
        // Caso a imagem ainda não tenha carregado, escutamos o evento de load
        imgElement.addEventListener("load", () => {
          aplicarDelay(acessarEstilosImagem, imgElement, rescaleValue); // Delay de 200ms
        });
      }
    }



    
    // Caso a imagem seja inserida dinamicamente, começamos a observar
    const observer = new MutationObserver(() => {
      const imgElement = pElement.querySelector("img");
      if (imgElement) {
        observer.disconnect(); // Para a observação assim que a imagem for encontrada

        // Aplicar a escala após carregar a imagem com um delay
        if (imgElement.complete) {
          aplicarDelay(acessarEstilosImagem, imgElement, rescaleValue); // Delay de 200ms
        } else {
          imgElement.addEventListener("load", () => {
            aplicarDelay(acessarEstilosImagem, imgElement, rescaleValue); // Delay de 200ms
          });
        }
      }
    });

    // Observa as mudanças no DOM dentro de <p>
    observer.observe(pElement, { childList: true, subtree: true });
  });
}

// Chamar a função de observação
observarImagens();

localStorage.setItem('pyodideLoaded', 'true');




// ajuta o zoom
document.addEventListener("DOMContentLoaded", () => {
  let zoomLevel = 1.0;
  let lastMouseX = 0;
  let lastMouseY = 0;

  function getActiveSection() {
  const deep = document.querySelector(".reveal section.stack.present > section.present");
  return deep || document.querySelector(".reveal .slides section.present");
  }

  function applyZoom(scale) {
  const section = getActiveSection();
  if (!section) return;

  zoomLevel = scale;

  const rect = section.getBoundingClientRect();
  const offsetX = lastMouseX - rect.left;
  const offsetY = lastMouseY - rect.top;

  const originX = (offsetX / rect.width) * 100;
  const originY = (offsetY / rect.height) * 100;

  section.style.transformOrigin = `${originX}% ${originY}%`;
  section.style.transform = `scale(${zoomLevel})`;
  }

  document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (key === "+" || key === "=" || key === "Add") {
    applyZoom(Math.min(zoomLevel + 0.1, 3));
  }

  if (key === "-" || key === "Subtract") {
    applyZoom(Math.max(zoomLevel - 0.1, 0.1));
  }

  if (key === "0" || key === "Digit0" || key === "Numpad0") {
    zoomLevel = 1;
    const section = getActiveSection();
    if (section) {
    section.style.transform = "scale(1)";
    section.style.transformOrigin = "top left";    }
  }
  });

  document.addEventListener("mousemove", (e) => {
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
  });
});



// Obtendo elementos do modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");