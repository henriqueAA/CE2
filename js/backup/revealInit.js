
Reveal.initialize({

      controls: true,
      progress: true,
      hash: true,
      width: "100%",
      height: "100%",
  
      // Factor of the display size that should remain empty around
      // the content
      margin: 0.04,
  
      // Bounds for smallest/largest possible scale to apply to content
      minScale: 0.2,
      maxScale: 2.0,
      center: false,
      mathjax2: {
        config: "TeX-AMS_HTML-full",
        TeX: {
          Macros: {
            R: "\\mathbb{R}",
            set: ["\\left\\{#1 \\; ; \\; #2\\right\\}", 2],
          },
        },
      },
  
      // There are three typesetters available
      // RevealMath.MathJax2 (default)
      // RevealMath.MathJax3
      // RevealMath.KaTeX
      //
      // More info at https://revealjs.com/math/
      // Learn about plugins: https://revealjs.com/plugins/
      plugins: [
        RevealZoom,
        RevealNotes,
        RevealSearch,
        RevealMarkdown,
        RevealHighlight,
        RevealMath.MathJax3,    
      ],  
      dependencies:
        [			
          { src: 'reveal.js-master/plugin/title-footer/title-footer.js', async: true, callback: function() { title_footer.initialize(); } }
        ]
  
    });