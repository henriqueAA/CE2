if (typeof circuits === "undefined") {
      var circuits = {};
}

// const circuits = {};

// circuits.C_ = String.raw`
// `; 
   
//Line Thickness: 0.8
// Grid Scale: 75

// Malha
// \draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (7.5,14.25) arc (270:20:0.5);

// \node [circle, fill={rgb,255:red,255; green,0; blue,0}, inner sep=3pt] at (17.5,13.75) {};

// node[sground]
// node[ground]


circuits.C_exemplo_PID_1 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ line width=0.7pt](7,12) node[op amp,scale=1, yscale=-1 ] (opamp1) {};
\draw [ line width=0.7pt](opamp1.+) to[short] (5.5,12.5);
\draw [ line width=0.7pt] (opamp1.-) to[short] (5.5,11.5);
\draw [ line width=0.7pt](8.2,12) to[short](8.5,12);
\draw [ line width=0.7pt](3,12.5) to[R] (5.5,12.5);
\draw [ line width=0.7pt](5.5,13.75) to[R] (8,13.75);
\draw [ line width=0.7pt](7,12) node[op amp,scale=1, yscale=-1 ] (opamp2) {};
\draw [ line width=0.7pt](opamp2.+) to[short] (5.5,12.5);
\draw [ line width=0.7pt] (opamp2.-) to[short] (5.5,11.5);
\draw [ line width=0.7pt](8.2,12) to[short](8.5,12);
\draw [ line width=0.7pt](3,8.5) to[R] (5.5,8.5);
\draw [ line width=0.7pt](7,12) node[op amp,scale=1, yscale=-1 ] (opamp2) {};
\draw [ line width=0.7pt](opamp2.+) to[short] (5.5,12.5);
\draw [ line width=0.7pt] (opamp2.-) to[short] (5.5,11.5);
\draw [ line width=0.7pt](8.2,12) to[short](8.5,12);
\draw [ line width=0.7pt](5.5,5.75) to[R] (8,5.75);
\draw [line width=0.7pt](5.5,3.5) to (5.5,3.25) node[sground]{};
\draw [line width=0.7pt](5.5,7.5) to (5.5,7.25) node[sground]{};
\draw [line width=0.7pt](5.5,11.5) to (5.5,11.25) node[sground]{};
\draw [line width=0.7pt](5.25,9.75) to[C] (8,9.75);
\draw [line width=0.7pt](3,4.5) to[C] (5.5,4.5);
\draw [ line width=0.7pt](5.5,13.75) to[short] (5.5,12.5);
\draw [ line width=0.7pt](8,13.75) to[short] (8,12);
\draw [ line width=0.7pt](8,9.75) to[short] (8,8);
\draw [ line width=0.7pt](8,5.75) to[short] (8,4);
\draw [ line width=0.7pt](5.5,5.75) to[short] (5.5,4.5);
\draw [ line width=0.7pt](5.25,9.75) to[short] (5.25,8.5);
\draw [ line width=0.7pt](3,12.5) to[short] (3,4.5);
\draw [ line width=0.7pt](3,8.5) to[short, -o] (1.75,8.5) ;
\draw [ line width=0.7pt](8.5,12) to[R] (10.5,12);
\draw [ line width=0.7pt](8.5,8) to[R] (10.5,8);
\draw [ line width=0.7pt](8.5,4) to[R] (10.5,4);
\draw [ line width=0.7pt](10.5,12) to[short] (10.5,4);
\draw [ line width=0.7pt](12,9.25) to[R] (14.5,9.25);
\draw [line width=0.7pt](12,7) to (12,6.75) node[sground]{};
\draw [ line width=0.7pt](12,9.25) to[short] (12,8);
\draw [ line width=0.7pt](14.5,9.25) to[short] (14.5,7.5);
\node at (10.5,8) [circ] {};
\draw [ line width=0.7pt](10.5,8) to[short] (12,8);
\draw [ line width=0.7pt](15,7.5) to[short, -o] (15.75,7.5) ;
\node [font=\huge] at (8.5,12.75) {$P$};
\node [font=\huge] at (8.5,8.5) {$I$};
\node [font=\huge] at (8.5,4.5) {$D$};
\draw [ line width=0.7pt](7,8) node[op amp,scale=1] (opamp2) {};
\draw [ line width=0.7pt](opamp2.+) to[short] (5.5,7.5);
\draw [ line width=0.7pt] (opamp2.-) to[short] (5.5,8.5);
\draw [ line width=0.7pt](8.2,8) to[short](8.5,8);
\draw [ line width=0.7pt](7,4) node[op amp,scale=1] (opamp2) {};
\draw [ line width=0.7pt](opamp2.+) to[short] (5.5,3.5);
\draw [ line width=0.7pt] (opamp2.-) to[short] (5.5,4.5);
\draw [ line width=0.7pt](8.2,4) to[short](8.5,4);
\draw [ line width=0.7pt](13.5,7.5) node[op amp,scale=1] (opamp2) {};
\draw [ line width=0.7pt](opamp2.+) to[short] (12,7);
\draw [ line width=0.7pt] (opamp2.-) to[short] (12,8);
\draw [ line width=0.7pt](14.7,7.5) to[short](15,7.5);
\draw [ line width=0.7pt](7,12) node[op amp,scale=1] (opamp2) {};
\draw [ line width=0.7pt](opamp2.+) to[short] (5.5,11.5);
\draw [ line width=0.7pt] (opamp2.-) to[short] (5.5,12.5);
\draw [ line width=0.7pt](8.2,12) to[short](8.5,12);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_exemplo_PID_2 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\large]
\draw [ line width=0.8pt ] (15,10.75) circle (1cm);
\draw [line width=0.8pt, ->, >=Stealth] (16,10.75) -- (17,10.75);
\draw [ color={rgb,255:red,255; green,0; blue,0} , line width=0.8pt ] (17,11.5) rectangle (19,10);
\draw [line width=0.8pt, ->, >=Stealth] (19,10.75) -- (20,10.75);
\draw [ line width=0.8pt ] (24,10.75) circle (1cm);
\draw [ line width=0.8pt ] (20,11.5) rectangle (22,10);
\draw [ line width=0.8pt ] (18.5,8) rectangle (20.5,6.5);
\draw [line width=0.8pt, ->, >=Stealth] (22,10.75) -- (23,10.75);
\draw [line width=0.8pt, ->, >=Stealth] (24,12.5) -- (24,11.75);
\draw [line width=0.8pt, ->, >=Stealth] (19.5,10.75) -- (19.5,12.25);
\draw [line width=0.8pt, ->, >=Stealth] (16.5,10.75) -- (16.5,12.25);
\draw [line width=0.8pt, short] (24,9.75) -- (24,7.25);
\draw [line width=0.8pt, ->, >=Stealth] (24,7.25) -- (20.5,7.25);
\draw [line width=0.8pt, ->, >=Stealth] (15,7.25) -- (15,9.75);
\draw [line width=0.8pt, short] (15,7.25) -- (18.5,7.25);
\draw [line width=0.8pt, ->, >=Stealth] (13,10.75) -- (14,10.75);
\draw [line width=0.8pt, ->, >=Stealth] (25,10.75) -- (26,10.75);
\node [font=\Huge] at (14.5,10.75) {$+$};
\node [font=\Huge] at (15,10.25) {$-$};
\node [font=\Huge] at (23.5,10.75) {$+$};
\node [font=\Huge] at (24,11.25) {$+$};
\node [font=\Huge] at (12.25,10.75) {$X_{sp}$};
\node [font=\Huge] at (16.5,12.75) {$\epsilon$};
\node [font=\Huge, color={rgb,255:red,255; green,0; blue,0}] at (18,10.75) {$C$};
\node [font=\Huge] at (24,13) {$d_{o}$};
\node [font=\Huge] at (27,10.75) {$X_{freq}$};
\node [font=\Huge] at (19.5,12.75) {$c$};
\node [font=\Huge] at (21,10.75) {$H$};
\node [font=\Huge] at (19.5,7.25) {$S$};
\node [font=\LARGE] at (18,9.5) {$Controlador$};
\node [font=\LARGE] at (19.5,6) {$Sensor$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_SG = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.7pt](8,8.75) to[R] (11,11.75);
\draw [ line width=0.7pt](11,11.75) to[R] (14,8.75);
\draw [ line width=0.7pt](8,8.75) to[R] (11,5.75);
\draw [ line width=0.7pt](11,5.75) to[R] (14,8.75);
\draw [ line width=0.7pt](6,11.75) to[american voltage source] (6,5.75);
\draw [ line width=0.7pt](6,11.75) to[R] (11,11.75);
\draw [ line width=0.7pt](6,5.75) to[short] (11,5.75);
\draw [ line width=0.7pt](19.25,8.25) node[op amp,scale=1] (opamp2) {};
\draw [ line width=0.7pt](opamp2.+) to[short] (17.75,7.75);
\draw [ line width=0.7pt] (opamp2.-) to[short] (17.75,8.75);
\draw [ line width=0.7pt](20.45,8.25) to[short](20.75,8.25);
\draw [ line width=0.7pt](15,7.75) to[R] (17.75,7.75);
\draw [ line width=0.7pt](17.5,7.75) to[R] (17.5,5.75);
\draw [ line width=0.7pt](15,8.75) to[R] (17.75,8.75);
\draw [ line width=0.7pt](17.5,10.25) to[R] (20,10.25);
\draw [ line width=0.7pt](17.5,10.25) to[short] (17.5,8.75);
\draw [ line width=0.7pt](20,10.25) to[short] (20,8.25);
\draw [ line width=0.7pt](20.75,8.25) to[short, -o] (21,8.25) ;
\draw [line width=0.7pt](17.5,5.75) to (17.5,5.25) node[sground]{};
\draw [line width=0.7pt](11,5.75) to (11,5.25) node[sground]{};
\draw [ line width=0.7pt](14,8.75) to[short] (15,8.75);
\draw [ line width=0.7pt](8,8.75) to[short] (12,8.75);
\draw [ line width=0.7pt](12,8.75) to[short] (12,8.25);
\draw [ line width=0.7pt](12,8.25) to[crossing] (15,8.25);
\draw [ line width=0.7pt](15,8.25) to[short] (15,7.75);
\node [font=\Large] at (13.25,10.5) {SG};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_AmpOp_Simbolo = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\small]
\draw [ line width=1pt](16.25,11.25) node[op amp,scale=1] (opamp2) {};
\draw [ line width=1pt](opamp2.+) to[short] (14.75,10.75);
\draw [ line width=1pt] (opamp2.-) to[short] (14.75,11.75);
\draw [ line width=1pt](17.45,11.25) to[short](17.75,11.25);
\draw [ line width=1pt](16.25,11.75) to[short, -o] (16.25,12.5) ;
\draw [ line width=1pt](16.25,10.75) to[short, -o] (16.25,10) ;
\draw [ line width=1pt](14.75,11.75) to[short, -o] (14.25,11.75) ;
\draw [ line width=1pt](14.75,10.75) to[short, -o] (14.25,10.75) ;
\draw [ line width=1pt](17.75,11.25) to[short, -o] (18,11.25) ;
\node [font=\Large] at (13.75,11.75) {$V_{n}$};
\node [font=\Large] at (13.75,10.75) {$V_{p}$};
\node [font=\Large] at (16.25,13) {$+V_{cc}$};
\node [font=\Large] at (16.25,9.5) {$-V_{cc}$};
\node [font=\Large] at (18.5,11.25) {$V_{o}$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_AmpOp_Grafico = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\large]
\draw [ color={rgb,255:red,255; green,0; blue,0}, , line width=1pt](9,10.75) to[short] (11,10.75);
\draw [ color={rgb,255:red,255; green,0; blue,0}, , line width=1pt](11,10.75) to[short] (16,15.75);
\draw [ color={rgb,255:red,255; green,0; blue,0}, , line width=1pt](16,15.75) to[short] (18,15.75);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (9,10.75) -- (8.75,10.75);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (18,15.75) -- (18.25,15.75);
\draw [line width=0.6pt, short] (13.5,9.75) -- (13.5,16.75);
\draw [line width=0.6pt, short] (7.5,13.25) -- (19.5,13.25);
\draw (11,13.5) to[short] (11,13);
\draw (16,13.5) to[short] (16,13);
\draw (13.75,15.75) to[short] (13.25,15.75);
\draw (13.25,10.75) to[short] (13.75,10.75);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=0.5pt, dashed] (11,9.25) -- (11,17.25);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=0.5pt, dashed] (16,9.25) -- (16,17.25);
\node [font=\large] at (14.75,12.25) {$(V_{p}-V_{n})$};
\node [font=\large] at (17.5,16.25) {$Sat.&nbsp;Pos$};
\node [font=\large] at (9.25,10.25) {$Sat.&nbsp;Neg$};
\node [font=\large] at (16.75,13.5) {$+V_{cc}/A$};
\node [font=\large] at (10.25,13.5) {$-V_{cc}/A$};
\node [font=\large] at (14.5,10.75) {$-V_{cc}$};
\node [font=\large] at (14.5,15.75) {$+V_{cc}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (13.5,17.25) {$Faixa&nbsp;Amp.&nbsp;Linear$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (17.8,17.25) {$Faixa&nbsp;Sat.$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (9.4,17.25) {$Faixa&nbsp;Sat.$};
\draw [ color={rgb,255:red,100; green,100; blue,100}, line width=0.5pt, ->, >=Stealth, dashed] (14.75,12.75) -- (14.75,14.25);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;



circuits.C_Modelo_AmpOp = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [line width=1.2pt, short] (16,11.5) -- (6,15.5);
\draw [line width=1.2pt, short] (6,7.5) -- (16,11.5);
\draw [ line width=0.8pt](7,13.5) to[R] (7,9.5);
\draw [ line width=0.8pt](7,9.5) to[short, -o] (4,9.5) ;
\draw [ line width=0.8pt](7,13.5) to[short, -o] (2,13.5) ;
\draw [ line width=0.8pt](9,12.5) to[american controlled voltage source] (9,10.5);
\draw [ line width=0.8pt](9,12.5) to[short] (11,12.5);
\draw [ line width=0.8pt](11,11.5) to[R] (14,11.5);
\draw [ line width=0.8pt](16,11.5) to[short, -o] (17,11.5) ;
\draw [ line width=0.8pt](11,9.5) to[short, -o] (11,8.5) ;
\draw [ line width=0.8pt](11,13.5) to[short, -o] (11,14.5) ;
\draw [ line width=0.8pt](11,11.5) to[short] (11,12.5);
\draw [line width=0.8pt](9,10.5) to (9,10.25) node[sground]{};
\draw [ line width=0.8pt](14,11.5) to[short] (16,11.5);
\draw [line width=0.8pt](4,7.5) to (4,7.25) node[sground]{};
\draw [line width=0.8pt](2,7.5) to (2,7.25) node[sground]{};
\node [font=\LARGE] at (2,10.5) {$V_{n}$};
\node [font=\LARGE] at (6.5,14) {$-$};
\node [font=\LARGE] at (4,8.5) {$V_{p}$};
\node [font=\LARGE] at (6.5,9) {$+$};
\node [font=\LARGE] at (7.75,11.5) {$R_{i}$};
\node [font=\Large] at (9.5,13) {$A\cdot (V_{p}-V_{n})$};
\node [font=\LARGE] at (12.5,12.25) {$R_{o}$};
\node [font=\LARGE] at (11,15) {$+V_{cc}$};
\node [font=\LARGE] at (11,7.75) {$-V_{cc}$};
\node [font=\LARGE] at (17,9.5) {$V_{o}$};
\draw [line width=0.8pt](17,7.5) to (17,7.25) node[sground]{};
\draw (2,8) to[short] (2,10);
\draw (2,11) to[short] (2,13);

\draw [line width=1pt, ->, >=Stealth] (4.8,9.8) -- (5.8,9.8);
\node [font=\LARGE] at (5,10.2) {$I_{p}$};

\draw [line width=1pt, ->, >=Stealth] (4.8,13.8) -- (5.8,13.8);
\node [font=\LARGE] at (5,14.2) {$I_{n}$};


\draw (17,11) to[short] (17,10);
\draw (17,9) to[short] (17,8);
\draw [ line width=1.2pt](6,15.5) to[short] (6,7.5);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_AmpOp_Malha_Aberta = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\large]
\draw [ line width=0.8pt](23.5,9) node[op amp,scale=1] (opamp2) {};
\draw [ line width=0.8pt](opamp2.+) to[short] (22,8.5);
\draw [ line width=0.8pt] (opamp2.-) to[short] (22,9.5);
\draw [ line width=0.8pt](24.7,9) to[short](25,9);
\draw [ line width=0.8pt](19.5,6.5) to[sinusoidal voltage source, sources/symbol/rotate=auto] (19.5,8.5);
\draw [ line width=0.8pt](21,8.5) to[american voltage source] (21,6.5);
\draw [ line width=0.8pt](21,8.5) to[short] (22,8.5);
\draw [ line width=0.8pt](19.5,8.5) to[short] (19.5,9.5);
\draw [ line width=0.8pt](19.5,9.5) to[short] (22,9.5);
\draw [line width=0.8pt](19.5,6.5) to (19.5,6.25) node[sground]{};
\draw [line width=0.8pt](21,6.5) to (21,6.25) node[sground]{};
\node [font=\large] at (18.75,7.5) {$V_{1}$};
\node [font=\large] at (21.75,7.5) {$V_{2}$};
\draw [ line width=0.8pt](23.5,9.5) to[short, -o] (23.5,10.25) ;
\draw [ line width=0.8pt](23.5,8.5) to[short, -o] (23.5,7.75) ;
\draw [ line width=0.8pt](25,9) to[short, -o] (25.25,9) ;
\node [font=\large] at (23.75,10.75) {$+V_{cc}=10V$};
\node [font=\large] at (23.75,7.25) {$-V_{cc}=-15V$};
\node [font=\large] at (25.5,9.5) {$V_{o}$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.ex_AmpOp_1 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Huge]
\draw [line width=0.8pt, short] (19,14.25) -- (23,12.25);
\draw [line width=0.8pt, short] (23,12.25) -- (19,10.25);
\draw [ line width=0.8pt](21,11.25) to[short, -o] (21,10.5) ;
\draw [ line width=0.8pt](21,13.25) to[short, -o] (21,14) ;
\node [font=\Huge] at (19.5,11.25) {+};
\node [font=\Huge] at (19.5,13.25) {-};
\draw [ line width=0.8pt](13.5,13.25) to[R,l={ \Large $R_{s}=25K\Omega$}] (19,13.25);
\draw [ line width=0.8pt](13.5,13.25) to[american voltage source] (13.5,9.75);
\draw [line width=0.8pt](13.5,9.75) to (13.5,9.25) node[sground]{};
\draw [ line width=0.8pt](19,11.25) to[short] (17,11.25);
\draw [ line width=0.8pt](18,15.75) to[R,l={ \Large $R_{F}=100K\Omega$}] (24,15.75);
\draw [ line width=0.8pt](18,15.75) to[short] (18,13.25);
\draw [ line width=0.8pt](24,15.75) to[short] (24,12.25);
\draw [ line width=0.8pt](23,12.25) to[short] (24,12.25);
\draw [ line width=0.8pt](24,12.25) to[R] (24,9.75);
\draw [line width=0.8pt](24,9.75) to (24,9.25) node[sground]{};
\draw [ line width=0.8pt](19,14.25) to[short] (19,10.25);
\draw [ line width=0.8pt](17,11.25) to[american voltage source] (17,9.5);
\draw [line width=0.8pt](17,9.5) to (17,9.25) node[sground]{};
\node [font=\Large] at (15.5,10.25) {$V_{B}=0V$};
\node [font=\Large] at (21,14.5) {$+V_{cc}=10V$};
\node [font=\Large] at (21,9.75) {$-V_{cc}=-10V$};
\node [font=\Large] at (25.75,11) {$R_{L}=10K\Omega$};
\draw [ line width=0.8pt](24,12.25) to[short, -o] (25,12.25) ;
\node [font=\Large] at (25.5,12.25) {$V_{o}$};
\node at (19,13.25) [circ] {};
\node at (19,11.25) [circ] {};
\node [font=\Large] at (18.5,13.75) {$V_{n}$};
\node [font=\Large] at (18.5,11.75) {$V_{p}$};
\node [font=\Large] at (12,11.5) {$V_{A}=1V$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.ex_AmpOp_2 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [line width=0.8pt, short] (19,14.25) -- (23,12.25);
\draw [line width=0.8pt, short] (23,12.25) -- (19,10.25);
\draw [ line width=0.8pt](21,11.25) to[short, -o] (21,10.5) ;
\draw [ line width=0.8pt](21,13.25) to[short, -o] (21,14) ;
\node [font=\Huge] at (19.5,11.25) {+};
\node [font=\Huge] at (19.5,13.25) {-};
\draw [ line width=0.8pt](12.75,13.25) to[R,l={ \Large $R_{s}=25K\Omega$}] (16.75,13.25);
\draw [ line width=0.8pt](12.75,13.25) to[american voltage source] (12.75,9.75);
\draw [line width=0.8pt](12.75,9.75) to (12.75,9.25) node[sground]{};
\draw [ line width=0.8pt](19,11.25) to[short] (17,11.25);
\draw [ line width=0.8pt](17,15.75) to[R,l={ \Large $R_{F}=100K\Omega$}] (24,15.75);
\draw [ line width=0.8pt](17,15.75) to[short] (17,13.25);
\draw [ line width=0.8pt](24,15.75) to[short] (24,12.25);
\draw [ line width=0.8pt](23,12.25) to[short] (24,12.25);
\draw [ line width=0.8pt](24,12.25) to[R] (24,9.75);
\draw [line width=0.8pt](24,9.75) to (24,9.25) node[sground]{};
\draw [ line width=0.8pt](19,14.25) to[short] (19,10.25);
\draw [ line width=0.8pt](17,11.25) to[american voltage source] (17,9.5);
\draw [line width=0.8pt](17,9.5) to (17,9.25) node[sground]{};
\node [font=\Large] at (15.5,10.25) {$V_{B}=0V$};
\node [font=\Large] at (21,14.5) {$+V_{cc}=10V$};
\node [font=\Large] at (21,9.75) {$-V_{cc}=-10V$};
\node [font=\Large] at (25.75,11) {$R_{L}=10K\Omega$};
\draw [ line width=0.8pt](24,12.25) to[short, -o] (25,12.25) ;
\node [font=\Large] at (25.5,12.25) {$V_{o}$};
\node at (19,13.25) [circ] {};
\node at (19,11.25) [circ] {};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (18.5,13.75) {$V_{n}$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (18.5,11.75) {$V_{p}$};
\node [font=\Large] at (11.25,11.5) {$V_{A}=1V$};
\draw [ line width=0.8pt](16.75,13.25) to[short] (19,13.25);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=0.9pt, ->, >=Stealth] (15.5,13.25) -- (16.5,13.25);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=0.9pt, ->, >=Stealth] (17.25,13.25) -- (18,13.25);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=0.9pt, ->, >=Stealth] (17.25,11.25) -- (18,11.25);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=0.9pt, ->, >=Stealth] (18.5,15.75) -- (17.5,15.75);
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (16,12.75) {$i_{S}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (18,16.25) {$i_{F}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (17.5,13.75) {$i_{N}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (17.5,11.75) {$i_{P}$};
\node [circle, fill={rgb,255:red,255; green,0; blue,0}, inner sep=5pt] at (17,13.25) {};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.ex_SG = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](8,9.75) to[american voltage source] (8,2.75);
\draw [ line width=0.8pt](12,9.75) to[R] (12,5.75);
\draw [ line width=0.8pt](16,9.75) to[R] (16,5.75);
\draw [ line width=0.8pt](16,5.75) to[R] (16,2.75);
\draw [ line width=0.8pt](8,9.75) to[short] (16,9.75);
\draw [line width=0.8pt](8,2.75) to (8,2.25) node[sground]{};
\draw [line width=0.8pt](12,2.75) to (12,2.25) node[sground]{};
\draw [line width=0.8pt](16,2.75) to (16,2.25) node[sground]{};
\draw [ line width=0.8pt](26.5,7.25) node[op amp,scale=1] (opamp2) {};
\draw [ line width=0.8pt](opamp2.+) to[short] (25,6.75);
\draw [ line width=0.8pt] (opamp2.-) to[short] (25,7.75);
\draw [ line width=0.8pt](27.7,7.25) to[short](28,7.25);
\draw [ line width=0.8pt](20,7.75) to[R] (24,7.75);
\draw [ line width=0.8pt](20,4.75) to[R] (24,4.75);
\draw [ line width=0.8pt](12,5.75) to[short] (11,5.75);
\draw [ line width=0.8pt](11,5.75) to[short] (10,5.75);
\draw [ line width=0.8pt](10,5.75) to[short] (10,0.75);
\draw [ line width=0.8pt](10,0.75) to[short] (20,0.75);
\draw [ line width=0.8pt](20,5.75) to[short] (20,7.75);
\draw [ line width=0.8pt](24.5,3.75) to[R] (24.5,1.75);
\draw [line width=0.8pt](24.5,1.75) to (24.5,1.25) node[sground]{};
\draw [ line width=0.8pt](24,7.75) to[short] (25.5,7.75);
\draw [ line width=0.8pt](24.5,9.75) to[R] (29.5,9.75);
\draw [ line width=0.8pt](24.5,9.75) to[short] (24.5,7.75);
\draw [ line width=0.8pt](29.5,9.75) to[short] (29.5,7.25);
\draw [ line width=0.8pt](28,7.25) to[short] (29.5,7.25);
\draw [ line width=0.8pt](12,5.75) to[R] (12,2.75);
\draw [ line width=0.8pt](20,0.75) to[short] (20,4.75);
\draw [ line width=0.8pt](20,5.75) to[short] (16,5.75);
\draw [ line width=0.8pt](24.5,3.75) to[short] (24.5,4.75);
\draw [ line width=0.8pt](24,4.75) to[short] (24.5,4.75);
\draw [ line width=0.8pt](25,6.75) to[short] (24.5,6.75);
\draw [ line width=0.8pt](24.5,6.75) to[short] (24.5,4.75);
\node [font=\Large] at (6.25,6.25) {$V_{S}=10V$};
\node [font=\Large] at (13.5,7.75) {$R_{P}=100\Omega$};
\node [font=\Large] at (13.5,4.25) {$R_{P}=100\Omega$};
\node [font=\Large] at (17.5,7.75) {$R_{P}=100\Omega$};
\node [font=\Large] at (17.75,4.25) {$R_{SG}=100.1\Omega$};
\node [font=\Large] at (17.5,3.5) {$(R_{P}+\Delta R)$};
\node [font=\Large] at (27,10.5) {$R_{B}=800K\Omega$};
\node [font=\Large] at (26.25,2.75) {$R_{B}=800K\Omega$};
\node [font=\Large] at (22,8.5) {$R_{A}=1K\Omega$};
\node [font=\Large] at (22,5.5) {$R_{A}=1K\Omega$};
\draw [ line width=0.8pt](29.5,7.25) to[short, -o] (30,7.25) ;
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (30.75,7.25) {$V_{o}$};
\draw [ line width=0.8pt](10,5.75) to[short, -o] (10,6.25) ;
\draw [ line width=0.8pt](16,5.75) to[short, -o] (15.5,5.75) ;
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (10,7) {$V_{2}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (14.75,5.75) {$V_{1}$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.ex_DAC = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\huge]
\draw [ line width=0.8pt](7,10.75) to[R] (11,10.75);
\draw [ line width=0.8pt](7,7.75) to[R] (11,7.75);
\draw [ line width=0.8pt](7,4.75) to[R] (11,4.75);
\draw [ line width=0.8pt](7,1.75) to[R] (11,1.75);
\draw [ line width=0.8pt](15.5,10.25) node[op amp,scale=1] (opamp2) {};
\draw [ line width=0.8pt](opamp2.+) to[short] (14,9.75);
\draw [ line width=0.8pt] (opamp2.-) to[short] (14,10.75);
\draw [ line width=0.8pt](16.7,10.25) to[short](17,10.25);
\draw [ line width=0.8pt](13,12.75) to[R] (18,12.75);
\draw [ line width=0.8pt](11,10.75) to[short] (14,10.75);
\draw [ line width=0.8pt](13,12.75) to[short] (13,10.75);
\draw [ line width=0.8pt](18,12.75) to[short] (18,10.25);
\draw [ line width=0.8pt](17,10.25) to[short] (18,10.25);
\draw [ line width=0.8pt](14,9.75) to[short] (14,8.75);
\draw [line width=0.8pt](14,8.75) to (14,8.5) node[sground]{};
\draw [ line width=0.8pt](11,10.75) to[short] (11,1.75);
\draw [ line width=0.8pt](7,10.75) to[short, -o] (6.75,10.75) ;
\draw [ line width=0.8pt](7,7.75) to[short, -o] (6.75,7.75) ;
\draw [ line width=0.8pt](7,4.75) to[short, -o] (6.75,4.75) ;
\draw [ line width=0.8pt](7,1.75) to[short, -o] (6.75,1.75) ;
\draw [ line width=0.8pt](18,10.25) to[short, -o] (18.25,10.25) ;
\node [font=\huge] at (8.5,11.5) {$R_{1}=10K\Omega$};
\node [font=\huge] at (8.5,8.5) {$R_{2}=20K\Omega$};
\node [font=\huge] at (8.5,5.5) {$R_{3}=40K\Omega$};
\node [font=\huge] at (8.5,2.5) {$R_{4}=80K\Omega$};
\node [font=\huge] at (15.5,13.5) {$R_{F}=10K\Omega$};
\node [font=\huge] at (5,10.75) {$V_{1}=0V$};
\node [font=\huge] at (5,7.75) {$V_{2}=0V$};
\node [font=\huge] at (5,4.75) {$V_{3}=0V$};
\node [font=\huge] at (5,1.75) {$V_{4}=0V$};
\node [font=\Huge, color={rgb,255:red,0; green,0; blue,255}] at (18.25,9.25) {$-V_{o}=0V$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;