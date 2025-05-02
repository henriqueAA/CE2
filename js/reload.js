function recarregarPyScript() {

      let id = "pyscript-main";
      let antigo = document.getElementById(id);
      if (antigo) antigo.remove();
    
      let novo = document.createElement("script");
      novo.type = "py";
      novo.src = "main.py?v=" + new Date().getTime(); // evita cache
      novo.setAttribute("config", "pyscript.toml");
      novo.id = id;
    
      document.body.appendChild(novo); // ou document.head se preferir
      
      // // 3. Recarregar scripts com class="reload"
      // const scripts = document.querySelectorAll("script.reload");

      // scripts.forEach(script => {
      // const src = script.getAttribute("src");
      // if (!src) return;

      // const novoScript = document.createElement("script");
      // novoScript.classList.add("reload");

      // // Reinsere sem defer para garantir execução imediata
      // Array.from(script.attributes).forEach(attr => {
      // if (attr.name === "src") {
      //       novoScript.setAttribute("src", attr.value.split("?")[0] + "?v=" + Date.now());
      // } else if (attr.name !== "defer") {
      //       novoScript.setAttribute(attr.name, attr.value);
      // }
      // });

      // script.remove();
      // document.body.appendChild(novoScript);
      // });

      // fetch(window.location.href)
      // .then(res => res.text())
      // .then(html => {
      //   // Criar um DOM temporário para extrair os novos <section>
      //   const temp = document.createElement("div");
      //   temp.innerHTML = html;
  
      //   const novasSections = temp.querySelectorAll("#mainReveal .slides > section");
      //   const slidesContainer = document.querySelector("#mainReveal .slides");
  
      //   if (novasSections.length && slidesContainer) {
      //     // Remove todas as sections atuais
      //     slidesContainer.innerHTML = "";
  
      //     // Adiciona as novas sections
      //     novasSections.forEach(section => {
      //       slidesContainer.appendChild(section);
      //     });
  
      //     // Atualiza Reveal.js manualmente
      //     Reveal.sync(); // atualiza o estado das apresentações
      //   }
      // });
      // renderCircuits();


    }

// function recarregarScriptsReload() {
//       // Recarregar conteúdo da div mainReveal
//       fetch(window.location.href)
//         .then(res => res.text())
//         .then(html => {
//           const temp = document.createElement("div");
//           temp.innerHTML = html;
    
//           const novo = temp.querySelector("#mainReveal");
//           const atual = document.getElementById("mainReveal");
    
//           if (novo && atual) {
//             atual.innerHTML = novo.innerHTML;
//           }
    
//           // Recriar o script do PyScript
//           const script = document.createElement("script");
//           script.type = "py";
//           script.src = "main.py?v=" + new Date().getTime(); // evita cache
//           script.setAttribute("config", "pyscript.toml");
//           script.id = "pyscript-main";
//           document.body.appendChild(script);
    
//           // Recarregar estilos com class="reload"
//           const links = document.querySelectorAll('link.reload');
//           links.forEach(link => {
//             const href = link.getAttribute("href");
//             if (!href) return;
    
//             const newLink = document.createElement("link");
//             newLink.setAttribute("rel", "stylesheet");
//             newLink.setAttribute("class", "reload");
    
//             for (let attr of link.attributes) {
//               if (attr.name === "href") {
//                 newLink.setAttribute("href", attr.value.split("?")[0] + "?v=" + new Date().getTime());
//               } else {
//                 newLink.setAttribute(attr.name, attr.value);
//               }
//             }
    
//             link.remove();
//             document.head.appendChild(newLink);
//           });
    
//           // Recarregar scripts com class="reload"
//           const scripts = document.querySelectorAll("script.reload");
//           scripts.forEach(script => {
//             const originalSrc = script.getAttribute("src");
//             if (!originalSrc) return;
    
//             const novoScript = document.createElement("script");
//             novoScript.setAttribute("class", "reload");
    
//             for (let attr of script.attributes) {
//               if (attr.name === "src") {
//                 novoScript.setAttribute("src", attr.value.split("?")[0] + "?v=" + new Date().getTime());
//               } else {
//                 novoScript.setAttribute(attr.name, attr.value);
//               }
//             }
    
//             script.remove();
//             document.body.appendChild(novoScript);
//           });
//         });
//     }
    