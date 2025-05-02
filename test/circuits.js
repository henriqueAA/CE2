const circuits = {};

circuits.C_1 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1.3\textwidth}{!}{%
\begin{circuitikz}
    \tikzstyle{every node}=[font=\large]
    \draw[step=1.25cm,lightgray,very thin] (4.5,13.5)
    \draw (8.75,12) to[closing switch] (11.25,12);
    \draw (11.25,12) to[R,l={ \large R1=10K}] (13.75,12);
    \draw (13.75,12) to[C,l={ \large 20$\mu$}] (13.75,9.5);
    \draw (8.75,9.5) to[short] (13.75,9.5);
    \draw (11.25,9.5) to (11.25,9.25) node[ground]{};
    \draw (8.75,12) to[american voltage source,l={ \large 20V}] (8.75,9.5);
    \draw [ color={rgb,255:red,255; green,0; blue,0}, ->, >=Stealth] (10.75,12) -- (11.25,12);
    \draw (13.75,12) to[short, -o] (14.5,12);
    \node [font=\large] at (10,12.5) {t=0s};
    \node [font=\large] at (15.25,12) {$v_c(t)$};
    \node [font=\large] at (11,11.5) {$i_c(t)$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_2 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\large]
\draw [ line width=0.5pt](30,14.75) to[american voltage source,l={ \large $V_{s}=$}] (30,11.75);
\draw [line width=0.5pt](30,14.75) to[closing switch,l={ \large $t_{ }=$}] (33,14.75);
\draw [ line width=0.5pt](33,14.75) to[R,l={ \large $R_{12}=$}] (36,14.75);
\draw [line width=0.5pt](36,14.75) to[C,l={ \large $C_{1}=$}] (36,11.75);
\draw [line width=0.5pt, short] (36,11.75) -- (30,11.75);
\draw [line width=0.5pt](33,11.75) to (33,11.5) node[ground]{};
\draw [ line width=0.5pt](36,14.75) to[short, -o] (36.75,14.75) node[right] {$v_c(t)$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (32.5,14.75) -- (33,14.75);
\node [font=\large] at (32.75,15.25) {$i_c(t)$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_3 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ line width=0.5pt](30,14.75) to[american voltage source,l={ \large $V_s=$}] (30,11.75);
\draw [line width=0.5pt](30,14.75) to[closing switch,l={ \large t=}] (33,14.75);
\draw [ line width=0.5pt](33,14.75) to[R,l={ \large $R_1=$}] (36,14.75);
\draw [line width=0.5pt](36,14.75) to[C,l={ \large $C_1=$}] (36,11.75);
\draw [line width=0.5pt, short] (36,11.75) -- (30,11.75);
\draw [line width=0.5pt](33,11.75) to (33,11.5) node[ground]{};
\draw [ line width=0.5pt](36,14.75) to[short, -o] (36.75,14.75) node[right] {$v_c(t)$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (32.5,14.75) -- (33,14.75);
\node [font=\large] at (32.75,15.25) {$i_c(t)$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

renderCircuits();

function renderCircuits() {
  Object.entries(circuits).forEach(([id, value]) => {
    try {
      // Tenta executar o código dentro do try
      let formatedValue = value.split("\n"); // Divide a string em um array de linhas
      formatedValue = formatedValue.slice(4, -3).join("\n"); // Remove 3 do início e 3 do fim

      circuits[id] = formatedValue; // reatribui as variaveis

      formatedValue = "$$" + formatedValue + "$$"; // Formata para LaTeX

      // Atualiza o conteúdo do elemento HTML com o id correspondente
      const element = document.getElementById(id);
      if (element) {
        // Verifica se o elemento existe
        element.innerHTML = formatedValue;
      } else {
        console.error(`*** Error in circuits.js - Elemento com ID '${id}' não encontrado.`);
      }
    } catch (error) {
      // Captura e exibe qualquer erro ocorrido
      console.error(`*** Error in circuits.js - Erro ao processar o circuito com ID '${id}':`, error);
    }
  });
}
