const circuits = {};

// circuits.C_ = String.raw`
// `;

//Line Thickness: 0.8
// Grid Scale: 75

// Malha
// \draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (7.5,14.25) arc (270:20:0.5);

// node[sground]
// node[ground]


circuits.C_exemplo_1 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Huge]
\draw [ line width=1.5pt](13,11.5) to[R] (21,11.5);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1.5pt, ->, >=Stealth] (19,11.5) -- (20,11.5);
\node [font=\Huge, color={rgb,255:red,0; green,0; blue,255}] at (13,11) {$+$};
\node [font=\Huge, color={rgb,255:red,0; green,0; blue,255}] at (21,11) {$-$};
\node [font=\Huge, color={rgb,255:red,0; green,0; blue,255}] at (17,10.75) {$V$};
\node [font=\Huge, color={rgb,255:red,255; green,0; blue,0}] at (19.5,12) {$I$};
\node [circle, fill={rgb,255:red,0; green,0; blue,255}, inner sep=3pt] at (13,11.5) {};
\node [circle, fill={rgb,255:red,0; green,0; blue,255}, inner sep=3pt] at (21,11.5) {};
\node [font=\Huge] at (17,12.25) {$R_{1}$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;





circuits.C_CP1 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Huge]
\draw [ line width=1pt ] (14,14) rectangle (17,13);
\draw [line width=1pt, short] (17,13.5) -- (18.5,13.5);
\draw [line width=1pt, short] (14,13.5) -- (12.5,13.5);
\node at (12.5,13.5) [circ] {};
\node at (18.5,13.5) [circ] {};
\draw [line width=1pt, ->, >=Stealth] (15,14.3) -- (16,14.3);
\node [font=\Huge] at (12.5,14) {+};
\node [font=\Huge] at (18.5,14) {-};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_CP2 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Huge]
\draw [ line width=1pt ] (14,14) rectangle (17,13);
\draw [line width=1pt, short] (17,13.5) -- (18.5,13.5);
\draw [line width=1pt, short] (14,13.5) -- (12.5,13.5);
\node at (12.5,13.5) [circ] {};
\node at (18.5,13.5) [circ] {};
\draw [line width=1pt, ->, >=Stealth] (15,14.3) -- (16,14.3);
\node [font=\Huge] at (12.5,14) {-};
\node [font=\Huge] at (18.5,14) {+};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_CP3 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Huge]
\draw [ line width=1pt ] (14,14) rectangle (17,13);
\draw [line width=1pt, short] (17,13.5) -- (18.5,13.5);
\draw [line width=1pt, short] (14,13.5) -- (12.5,13.5);
\node at (12.5,13.5) [circ] {};
\node at (18.5,13.5) [circ] {};
\node [font=\Huge] at (12.5,14) {+};
\node [font=\Huge] at (18.5,14) {-};
\draw [line width=1pt, ->, >=Stealth] (16,14.3) -- (15,14.3);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_CP4 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Huge]
\draw [ line width=1pt ] (14,14) rectangle (17,13);
\draw [line width=1pt, short] (17,13.5) -- (18.5,13.5);
\draw [line width=1pt, short] (14,13.5) -- (12.5,13.5);
\node at (12.5,13.5) [circ] {};
\node at (18.5,13.5) [circ] {};
\node [font=\Huge] at (12.5,14) {-};
\node [font=\Huge] at (18.5,14) {+};
\draw [line width=1pt, ->, >=Stealth] (16,14.3) -- (15,14.3);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_Divisor_Tensao = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Huge]
\draw [ line width=0.8pt](11,13.5) to[american voltage source] (11,10.5);
\draw [ line width=0.8pt](11,13.5) to[R] (15,13.5);
\draw [ line width=0.8pt](15,13.5) to[R] (15,10.5);
\draw [ line width=0.8pt](11,10.5) to[short] (15,10.5);
\node [font=\Large] at (9.75,12) {$100V$};
\node [font=\Large] at (13,12.75) {$R_{1}=1K\Omega$};
\node [font=\Large] at (14.5,11.25) {$R_{2}$};
\node [font=\Huge, color={rgb,255:red,0; green,0; blue,255}] at (11,14) {$+$};
\node [font=\Huge, color={rgb,255:red,0; green,0; blue,255}] at (16,13.5) {$+$};
\node [font=\Huge, color={rgb,255:red,0; green,0; blue,255}] at (15,14) {$-$};
\node [font=\Huge, color={rgb,255:red,0; green,0; blue,255}] at (16,10.5) {$-$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (13,14.25) {$V_{1}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (16,12) {$V_{2}$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_Divisor_Corrente = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](10.5,6.5) to[american current source] (10.5,10.5);
\draw [ line width=0.8pt](14,10.5) to[R] (14,6.5);
\draw [ line width=0.8pt](17,10.5) to[R] (17,6.5);
\draw [ line width=0.8pt](10.5,10.5) to[short] (17,10.5);
\draw [ line width=0.8pt](10.5,6.5) to[short] (17,6.5);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (14,10.5) -- (14,9.5);
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (22.5,10.5) {};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (21,10) {};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (17,10.5) -- (17,9.5);
\node [font=\Large] at (9.5,8.5) {$20A$};
\node [font=\Large] at (12.5,8.5) {$R_{1}=1K\Omega$};
\node [font=\Large] at (16.25,8.5) {$R_{2}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (14.5,10) {$I_{1}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (17.5,10) {$I_{2}$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_LKC_1 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (24.75,9.25) -- (25.25,9.75);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (27.25,11.75) -- (26.75,11.25);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (25.5,11) -- (25,11.5);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (26.5,10) -- (27,9.5);
\draw [line width=0.8pt, short] (24.5,12) -- (27.5,9);
\draw [line width=0.8pt, short] (24.5,9) -- (27.5,12);
\node at (24.5,12) [circ] {};
\node at (27.5,12) [circ] {};
\node at (27.5,9) [circ] {};
\node at (24.5,9) [circ] {};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (24.75,11) {$i_{1}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (27.25,11) {$i_{2}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (24.75,10) {$i_{3}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (27.25,10) {$i_{4}$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_LKC_2 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](15,9.5) to[american current source] (15,12.5);
\draw [ line width=0.8pt](17,12.5) to[R] (17,9.5);
\draw [ line width=0.8pt](19,12.5) to[R] (19,9.5);
\draw [ line width=0.8pt](21,12.5) to[R] (21,9.5);
\draw [ line width=0.8pt](15,12.5) to[short] (21,12.5);
\draw [ line width=0.8pt](15,9.5) to[short] (21,9.5);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (21.5,11.5) -- (21.5,10.5);
\node [font=\LARGE, color={rgb,255:red,255; green,0; blue,0}] at (22,10.5) {};
\node [font=\LARGE, color={rgb,255:red,255; green,0; blue,0}] at (22,10.5) {};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (19.5,11.5) -- (19.5,10.5);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (17.5,11.5) -- (17.5,10.5);
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (18,11.25) {$i_{1}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (20,11.25) {$i_{2}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (22,11.25) {$i_{3}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (14.25,11) {$i_{S}$};
\node at (18,9.5) [circ, color={rgb,255:red,255; green,0; blue,0}] {};
\node at (18,12.5) [circ, color={rgb,255:red,255; green,0; blue,0}] {};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_LKT = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](20,14.5) to[american voltage source] (20,10.5);
\draw [ line width=1pt](20,14.5) to[R] (24,14.5);
\draw [ line width=1pt](24,14.5) to[R] (24,10.5);
\draw [ line width=1pt](24,10.5) to[R] (20,10.5);
\draw [ line width=1pt](24,14.5) to[R] (28,14.5);
\draw [ line width=1pt](28,10.5) to[R] (24,10.5);
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (21.25,14) {$+$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (22.75,14) {$-$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (24.5,13.25) {$-$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (24.5,11.75) {$+$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (25.25,14) {$+$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (26.75,14) {$-$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (25,11) {$+$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (27,11) {$-$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (23,11) {$+$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (21,11) {$-$};
\draw [ line width=1pt](28,10.5) to[american voltage source] (28,14.5);
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (19,12.5) {$V_{0}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (22,13.5) {$V_{1}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (26,13.5) {$V_{2}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (23.25,12.5) {$V_{6}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (22,11.5) {$V_{5}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (26,11.5) {$V_{4}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (29,12.5) {$V_{3}$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;



circuits.C_Eq_ideais_1 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](2,13.5) to[american voltage source] (2,10.5);
\draw [ line width=0.8pt](2,13.5) to[R] (5,13.5);
\draw [ line width=0.8pt](5,13.5) to[R] (5,10.5);
\draw [ line width=0.8pt](5,13.5) to[rmeter, t=A] (8,13.5);
\draw [ line width=0.8pt](8,13.5) to[R] (11,13.5);
\draw [ line width=0.8pt](11,13.5) to[R] (11,10.5);
\draw [ line width=0.8pt](14,13.5) to[rmeter, t=V] (14,10.5);
\node [font=\LARGE] at (14.75,12.75) {\textbf{+}};
\node [font=\LARGE] at (14.75,11.25) {\textbf{-}};
\node [font=\LARGE] at (5.5,14) {\textbf{+}};
\node [font=\LARGE] at (7.5,14) {\textbf{-}};
\node [font=\Large] at (6.5,14.75) {$(R_{Dis}=0\Omega)$};
\node [font=\Large] at (16.75,12) {$(R_{Dis}= \infty \Omega)$};
\draw [ line width=0.8pt](11,13.5) to[short] (14,13.5);
\draw [ line width=0.8pt](14,10.5) to[short] (2,10.5);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;



circuits.C_Eq_ideais_2 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ line width=0.8pt](2,13.5) to[american voltage source] (2,10.5);
\draw [ line width=0.8pt](2,13.5) to[R] (5,13.5);
\draw [ line width=0.8pt](5,13.5) to[R] (5,10.5);
\draw [ line width=0.8pt](5,13.5) to[R] (9,13.5);
\draw [ line width=0.8pt](9,13.5) to[R] (9,10.5);
\draw [ line width=0.8pt](2,10.5) to[short] (9,10.5);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (5,13.5) -- (6,13.5);
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (10,13) {+};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (10,11) {-};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (10.25,12) {$V_{x}$};
\node [font=\LARGE, color={rgb,255:red,255; green,0; blue,0}] at (5.5,14) {$i_{x}$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_Volt_Amp = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](2,13.5) to[american voltage source] (2,10.5);
\draw [ line width=0.8pt](2,13.5) to[R] (5,13.5);
\draw [ line width=0.8pt](5,13.5) to[R] (5,10.5);
\draw [ line width=0.8pt](8,13.5) to[R] (11,13.5);
\draw [ line width=0.8pt](11,13.5) to[R] (11,10.5);
\draw [ line width=0.8pt ] (6.5,16) circle (0.5cm);
\draw [line width=0.8pt, ->, >=Stealth] (6.25,15.75) -- (6.75,16.25);
\draw [ line width=0.8pt](5,14.5) to[R] (8,14.5);
\draw [ line width=0.8pt](5,13.5) to[short] (5,16);
\draw [ line width=0.8pt](5,16) to[short] (6,16);
\draw [ line width=0.8pt](7,16) to[short] (8,16);
\draw [ line width=0.8pt](8,16) to[short] (8,13.5);
\draw [ line width=0.8pt](2,10.5) to[short] (11,10.5);
\draw [ line width=0.8pt](11,13.5) to[R] (14,13.5);
\draw [ line width=0.8pt ] (14,12) circle (0.5cm);
\draw [line width=0.8pt, ->, >=Stealth] (13.75,11.75) -- (14.25,12.25);
\draw [ line width=0.8pt](14,13.5) to[short] (14,12.5);
\draw [ line width=0.8pt](14,11.5) to[short] (14,10.5);
\draw [ line width=0.8pt](14,10.5) to[short] (11,10.5);
\node [font=\large] at (6.5,16.75) {$Galvanômetro$};
\node [font=\large, rotate around={-90:(0,0)}] at (14.75,12) {$Galvanômetro$};
\node [font=\Large] at (6.5,13.75) {$R_{LA}$};
\node [font=\Large] at (12.5,14.25) {$R_{LV}$};
\draw [ color={rgb,255:red,255; green,0; blue,0} , line width=0.5pt , dashed] (4.75,17.25) rectangle  (8.25,13.25);
\draw [ color={rgb,255:red,0; green,0; blue,255} , line width=0.5pt , dashed] (11.5,14.75) rectangle  (15.5,10.25);
\node [font=\large, color={rgb,255:red,255; green,0; blue,0}, rotate around={-90:(0,0)}] at (8.75,16) {$Amperímetro$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}, rotate around={-90:(0,0)}] at (16,13.75) {$Voltímetro$};
\node at (5,13.5) [circ] {};
\node at (8,13.5) [circ] {};
\node at (11,13.5) [circ] {};
\node at (11,10.5) [circ] {};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_exercicio_Kirchhoff = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](11,5.5) to[american voltage source] (11,1.5);
\draw [ line width=0.8pt](15,5.5) to[R,l={ \Large $R_{1}=5\Omega$}] (11,5.5);
\draw [ line width=0.8pt](15,5.5) to[R,l={ \Large $R_{4}=70\Omega$}] (15,1.5);
\draw [ line width=0.8pt](19,5.5) to[R,l={ \Large $R_{3}=10\Omega$}] (15,5.5);
\draw [ line width=0.8pt](19,7.5) to[R,l={ \Large $R_{2}=25\Omega$}] (11,7.5);
\draw [ line width=0.8pt](19,5.5) to[R,l={ \Large $R_{5}=8\Omega$}] (19,1.5);
\draw [ line width=0.8pt](11,1.5) to[short] (19,1.5);
\draw [ line width=0.8pt](19,5.5) to[short] (19,7.5);
\draw [ line width=0.8pt](11,5.5) to[short] (11,7.5);
\node [font=\Large] at (9.25,3.5) {$V_{s}=180V$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (12,7.5) -- (13,7.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (14.5,4) -- (14.5,3);
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (12.5,8) {$I_{A}=4A$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (13.75,3.5) {$I_{x}=?$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_exercicio_Kirchhoff_1 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](11,5.5) to[american voltage source] (11,1.5);
\draw [ line width=0.8pt](15,5.5) to[R,l={ \Large $R_{1}=5\Omega$}] (11,5.5);
\draw [ line width=0.8pt](15,5.5) to[R,l={ \Large $R_{4}=70\Omega$}] (15,1.5);
\draw [ line width=0.8pt](19,5.5) to[R,l={ \Large $R_{3}=10\Omega$}] (15,5.5);
\draw [ line width=0.8pt](19,7.5) to[R,l={ \Large $R_{2}=25\Omega$}] (11,7.5);
\draw [ line width=0.8pt](19,5.5) to[R,l={ \Large $R_{5}=8\Omega$}] (19,1.5);
\draw [ line width=0.8pt](11,1.5) to[short] (19,1.5);
\draw [ line width=0.8pt](19,5.5) to[short] (19,7.5);
\draw [ line width=0.8pt](11,5.5) to[short] (11,7.5);
\node [font=\Large] at (9.25,3.5) {$V_{s}=180V$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (12,7.5) -- (13,7.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (14.5,4) -- (14.5,3);
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (12.5,8) {$I_{A}=4A$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (13.75,3.5) {$I_{x}=?$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (14,8.5) {$+$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (16,8.5) {$-$};
\node [anchor=west, font=\Large, color={rgb,255:red,11; green,111; blue,0}] at (13.5,9.25) {$V_{R2}=$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;



circuits.C_exercicio_Kirchhoff_2 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](11,5.5) to[american voltage source] (11,1.5);
\draw [ line width=0.8pt](15,5.5) to[R,l={ \Large $R_{1}=5\Omega$}] (11,5.5);
\draw [ line width=0.8pt](15,5.5) to[R,l={ \Large $R_{4}=70\Omega$}] (15,1.5);
\draw [ line width=0.8pt](19,5.5) to[R,l={ \Large $R_{3}=10\Omega$}] (15,5.5);
\draw [ line width=0.8pt](19,7.5) to[R,l={ \Large $R_{2}=25\Omega$}] (11,7.5);
\draw [ line width=0.8pt](19,5.5) to[R,l={ \Large $R_{5}=8\Omega$}] (19,1.5);
\draw [ line width=0.8pt](11,1.5) to[short] (19,1.5);
\draw [ line width=0.8pt](19,5.5) to[short] (19,7.5);
\draw [ line width=0.8pt](11,5.5) to[short] (11,7.5);
\node [font=\Large] at (9.25,3.5) {$V_{s}=180V$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (12,7.5) -- (13,7.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (14.5,4) -- (14.5,3);
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (12.5,8) {$I_{A}=4A$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (13.75,3.5) {$I_{x}=?$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (14,8.5) {$+$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (16,8.5) {$-$};
\node [anchor=west, font=\Large, color={rgb,255:red,11; green,111; blue,0}] at (13.5,9.25) {$V_{R2}=$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (22,4.25) {$+$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (22,2.75) {$-$};
\node [anchor=west, font=\Large, color={rgb,255:red,11; green,111; blue,0}] at (21.75,3.5) {$V_{R5}=$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_exercicio_Kirchhoff_3 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](11,5.5) to[american voltage source] (11,1.5);
\draw [ line width=0.8pt](15,5.5) to[R,l={ \Large $R_{1}=5\Omega$}] (11,5.5);
\draw [ line width=0.8pt](15,5.5) to[R,l={ \Large $R_{4}=70\Omega$}] (15,1.5);
\draw [ line width=0.8pt](19,5.5) to[R,l={ \Large $R_{3}=10\Omega$}] (15,5.5);
\draw [ line width=0.8pt](19,7.5) to[R,l={ \Large $R_{2}=25\Omega$}] (11,7.5);
\draw [ line width=0.8pt](19,5.5) to[R,l={ \Large $R_{5}=8\Omega$}] (19,1.5);
\draw [ line width=0.8pt](11,1.5) to[short] (19,1.5);
\draw [ line width=0.8pt](19,5.5) to[short] (19,7.5);
\draw [ line width=0.8pt](11,5.5) to[short] (11,7.5);
\node [font=\Large] at (9.25,3.5) {$V_{s}=180V$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (12,7.5) -- (13,7.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (14.5,4) -- (14.5,3);
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (12.5,8) {$I_{A}=4A$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (13.75,3.5) {$I_{x}=?$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (14,8.5) {$+$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (16,8.5) {$-$};
\node [anchor=west, font=\Large, color={rgb,255:red,11; green,111; blue,0}] at (13.5,9.25) {$V_{R2}=$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (22,4.25) {$+$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (22,2.75) {$-$};
\node [anchor=west, font=\Large, color={rgb,255:red,11; green,111; blue,0}] at (21.75,3.5) {$V_{R5}=$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (19,5.5) -- (19,4.5);
\node [anchor=west, font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (19.2,4.75) {$I_{R5}=$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_exercicio_Kirchhoff_4 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](11,5.5) to[american voltage source] (11,1.5);
\draw [ line width=0.8pt](15,5.5) to[R,l={ \Large $R_{1}=5\Omega$}] (11,5.5);
\draw [ line width=0.8pt](15,5.5) to[R,l={ \Large $R_{4}=70\Omega$}] (15,1.5);
\draw [ line width=0.8pt](19,5.5) to[R,l={ \Large $R_{3}=10\Omega$}] (15,5.5);
\draw [ line width=0.8pt](19,7.5) to[R,l={ \Large $R_{2}=25\Omega$}] (11,7.5);
\draw [ line width=0.8pt](19,5.5) to[R,l={ \Large $R_{5}=8\Omega$}] (19,1.5);
\draw [ line width=0.8pt](11,1.5) to[short] (19,1.5);
\draw [ line width=0.8pt](19,5.5) to[short] (19,7.5);
\draw [ line width=0.8pt](11,5.5) to[short] (11,7.5);
\node [font=\Large] at (9.25,3.5) {$V_{s}=180V$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (12,7.5) -- (13,7.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (14.5,4) -- (14.5,3);
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (12.5,8) {$I_{A}=4A$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (13.75,3.5) {$I_{x}=?$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (14,8.5) {$+$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (16,8.5) {$-$};
\node [anchor=west, font=\Large, color={rgb,255:red,11; green,111; blue,0}] at (13.5,9.25) {$V_{R2}=$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (22,4.25) {$+$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (22,2.75) {$-$};
\node [anchor=west, font=\Large, color={rgb,255:red,11; green,111; blue,0}] at (21.75,3.5) {$V_{R5}=$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (19,5.5) -- (19,4.5);
\node [anchor=west, font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (19.2,4.75) {$I_{R5}=$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (18,5.5) -- (19,5.5);
\node [anchor=west, font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (19.2,5.75) {$I_{R3}=$};;
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;



circuits.C_exercicio_Kirchhoff_5 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](11,5.5) to[american voltage source] (11,1.5);
\draw [ line width=0.8pt](15,5.5) to[R,l={ \Large $R_{1}=5\Omega$}] (11,5.5);
\draw [ line width=0.8pt](15,5.5) to[R,l={ \Large $R_{4}=70\Omega$}] (15,1.5);
\draw [ line width=0.8pt](19,5.5) to[R,l={ \Large $R_{3}=10\Omega$}] (15,5.5);
\draw [ line width=0.8pt](19,7.5) to[R,l={ \Large $R_{2}=25\Omega$}] (11,7.5);
\draw [ line width=0.8pt](19,5.5) to[R,l={ \Large $R_{5}=8\Omega$}] (19,1.5);
\draw [ line width=0.8pt](11,1.5) to[short] (19,1.5);
\draw [ line width=0.8pt](19,5.5) to[short] (19,7.5);
\draw [ line width=0.8pt](11,5.5) to[short] (11,7.5);
\node [font=\Large] at (9.25,3.5) {$V_{s}=180V$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (12,7.5) -- (13,7.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (14.5,4) -- (14.5,3);
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (12.5,8) {$I_{A}=4A$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (13.75,3.5) {$I_{x}=?$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (14,8.5) {$+$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (16,8.5) {$-$};
\node [anchor=west, font=\Large, color={rgb,255:red,11; green,111; blue,0}] at (13.5,9.25) {$V_{R2}=$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (22,4.25) {$+$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (22,2.75) {$-$};
\node [anchor=west, font=\Large, color={rgb,255:red,11; green,111; blue,0}] at (21.75,3.5) {$V_{R5}=$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (19,5.5) -- (19,4.5);
\node [anchor=west, font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (19.2,4.75) {$I_{R5}=$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (18,5.5) -- (19,5.5);
\node [anchor=west, font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (19.2,5.75) {$I_{R3}=$};
\node [anchor=west, font=\Large, color={rgb,255:red,11; green,111; blue,0}] at (15.8,6.25) {$V_{R3}=$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (15.5,6) {$+$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (18.5,6) {$-$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;




circuits.C_exercicio_Kirchhoff_6 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](11,5.5) to[american voltage source] (11,1.5);
\draw [ line width=0.8pt](15,5.5) to[R,l={ \Large $R_{1}=5\Omega$}] (11,5.5);
\draw [ line width=0.8pt](15,5.5) to[R,l={ \Large $R_{4}=70\Omega$}] (15,1.5);
\draw [ line width=0.8pt](19,5.5) to[R,l={ \Large $R_{3}=10\Omega$}] (15,5.5);
\draw [ line width=0.8pt](19,7.5) to[R,l={ \Large $R_{2}=25\Omega$}] (11,7.5);
\draw [ line width=0.8pt](19,5.5) to[R,l={ \Large $R_{5}=8\Omega$}] (19,1.5);
\draw [ line width=0.8pt](11,1.5) to[short] (19,1.5);
\draw [ line width=0.8pt](19,5.5) to[short] (19,7.5);
\draw [ line width=0.8pt](11,5.5) to[short] (11,7.5);
\node [font=\Large] at (9.25,3.5) {$V_{s}=180V$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (12,7.5) -- (13,7.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (14.5,4) -- (14.5,3);
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (12.5,8) {$I_{A}=4A$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (13.75,3.5) {$I_{x}=?$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (14,8.5) {$+$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (16,8.5) {$-$};
\node [anchor=west, font=\Large, color={rgb,255:red,11; green,111; blue,0}] at (13.5,9.25) {$V_{R2}=$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (22,4.25) {$+$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (22,2.75) {$-$};
\node [anchor=west, font=\Large, color={rgb,255:red,11; green,111; blue,0}] at (21.75,3.5) {$V_{R5}=$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (19,5.5) -- (19,4.5);
\node [anchor=west, font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (19.2,4.75) {$I_{R5}=$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (18,5.5) -- (19,5.5);
\node [anchor=west, font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (19.2,5.75) {$I_{R3}=$};
\node [anchor=west, font=\Large, color={rgb,255:red,11; green,111; blue,0}] at (15.8,6.25) {$V_{R3}=$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (15.5,6) {$+$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (18.5,6) {$-$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (15.5,4.75) {$+$};
\node [font=\Huge, color={rgb,255:red,11; green,111; blue,0}] at (15.5,2) {$-$};
\node [anchor=west, font=\Large, color={rgb,255:red,11; green,111; blue,0}] at (15.3,2.5) {$V_{R4}=$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_no_referencia = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [line width=1pt](18,10.5) to (18,10.25) node[sground]{};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_super_no = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](12,7.5) to[american current source] (12,10.5);
\draw [ line width=0.8pt](15,10.5) to[R] (15,7.5);
\draw [ line width=0.8pt](18,10.5) to[american voltage source] (15,10.5);
\draw [ line width=0.8pt](18,10.5) to[R] (18,7.5);
\draw [ line width=0.8pt](18,10.5) to[R] (21,10.5);
\draw [ line width=0.8pt](21,10.5) to[R] (21,7.5);
\draw [ line width=0.8pt](12,10.5) to[short] (15,10.5);
\draw [ line width=0.8pt](12,7.5) to[short] (21,7.5);
\draw [line width=0.8pt](16.5,7.5) to (16.5,7.25) node[sground]{};
\node at (15,10.5) [circ, color={rgb,255:red,255; green,0; blue,0}] {};
\node at (18,10.5) [circ, color={rgb,255:red,255; green,0; blue,0}] {};
\draw [ color={rgb,255:red,0; green,0; blue,255} , line width=0.6pt , dashed] (14.75,9.75) rectangle  (18.25,11.25);
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (16.75,11.75) {$Super Nó$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_super_malha = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\large]
\draw [ line width=0.8pt](15,10.5) to[american voltage source] (15,7.5);
\draw [ line width=0.8pt](15,10.5) to[R] (19,10.5);
\draw [ line width=0.8pt](19,10.5) to[R] (23,10.5);
\draw [ line width=0.8pt](15,7.5) to[R] (19,7.5);
\draw [ line width=0.8pt](19,7.5) to[R] (23,7.5);
\draw [ line width=0.8pt](23,10.5) to[short] (23,7.5);
\draw [ line width=0.8pt](19,7.5) to[american current source] (19,10.5);
\draw [ color={rgb,255:red,255; green,0; blue,0} , line width=0.5pt , dashed] (18,11) rectangle  (20,7);
\node [font=\large, color={rgb,255:red,255; green,0; blue,0}] at (19,11.5) {$Super Malha$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;



circuits.C_exemplo_CM = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ line width=0.8pt](14,12.5) to[american voltage source] (14,9.5);
\draw [ line width=0.8pt](22,12.5) to[american voltage source] (22,9.5);
\draw [ line width=0.8pt](14,12.5) to[R] (18,12.5);
\draw [ line width=0.8pt](18,12.5) to[R] (22,12.5);
\draw [ line width=0.8pt](18,12.5) to[R] (18,9.5);
\draw [ line width=0.8pt](14,9.5) to[short] (22,9.5);
\node [font=\Large] at (13.25,11) {$V_{1}$};
\node [font=\Large] at (22.75,11) {$V_{2}$};
\node [font=\Large] at (16,13.1) {$R_{1}$};
\node [font=\Large] at (20,13.1) {$R_{2}$};
\node [font=\Large] at (18.75,11) {$R_{3}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (16,11) {$i_{a}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (20,11) {$i_{b}$};
\draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (16,10.5) arc (270:20:0.5);
\draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (20,10.5) arc (270:20:0.5);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_ex_CM_1 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](2,11.5) to[american voltage source] (2,7.5);
\draw [ line width=0.8pt](2,11.5) to[R] (6,11.5);
\draw [ line width=0.8pt](6,11.5) to[R] (6,7.5);
\draw [ line width=0.8pt](6,7.5) to[R] (2,7.5);
\draw [ line width=0.8pt](6,11.5) to[R] (10,11.5);
\draw [ line width=0.8pt](10,11.5) to[R] (10,7.5);
\draw [ line width=0.8pt](10,7.5) to[R] (6,7.5);
\draw [ line width=0.8pt](14,7.5) to[american current source] (14,11.5);
\draw [ line width=0.8pt](10,11.5) to[short] (14,11.5);
\draw [ line width=0.8pt](14,7.5) to[short] (10,7.5);
\node [font=\Large] at (4,12.25) {$3\Omega$};
\node [font=\Large] at (8,12.25) {$8\Omega$};
\node [font=\Large] at (5.25,9.5) {$2\Omega$};
\node [font=\Large] at (10.75,9.5) {$5\Omega$};
\node [font=\Large] at (4,6.75) {$6\Omega$};
\node [font=\Large] at (8,6.75) {$4\Omega$};
\node [font=\Large] at (0.5,9.5) {$V_{S}=30V$};
\node [font=\Large] at (15.5,9.5) {$I_{S}=16A$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_ex_CM_2 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](2,11.5) to[american voltage source] (2,7.5);
\draw [ line width=0.8pt](2,11.5) to[R] (6,11.5);
\draw [ line width=0.8pt](6,11.5) to[R] (6,7.5);
\draw [ line width=0.8pt](6,7.5) to[R] (2,7.5);
\draw [ line width=0.8pt](6,11.5) to[R] (10,11.5);
\draw [ line width=0.8pt](10,11.5) to[R] (10,7.5);
\draw [ line width=0.8pt](10,7.5) to[R] (6,7.5);
\draw [ line width=0.8pt](14,7.5) to[american current source] (14,11.5);
\draw [ line width=0.8pt](10,11.5) to[short] (14,11.5);
\draw [ line width=0.8pt](14,7.5) to[short] (10,7.5);
\node [font=\Large] at (4,12.25) {$3\Omega$};
\node [font=\Large] at (8,12.25) {$8\Omega$};
\node [font=\Large] at (5.25,9.5) {$2\Omega$};
\node [font=\Large] at (10.75,9.5) {$5\Omega$};
\node [font=\Large] at (4,6.75) {$6\Omega$};
\node [font=\Large] at (8,6.75) {$4\Omega$};
\node [font=\Large] at (0.5,9.5) {$V_{S}=30V$};
\node [font=\Large] at (15.5,9.5) {$I_{S}=16A$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (4,9.5) {$i_{a}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (8,9.5) {$i_{b}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (12,9.5) {$i_{c}$};
\draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (4,9) arc (270:20:0.5);
\draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (8,9) arc (270:20:0.5);
\draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (12,9) arc (270:20:0.5);
\node at (6,7.5) [circ, color={rgb,255:red,255; green,0; blue,0}] {};
\node at (12,7.5) [circ, color={rgb,255:red,255; green,0; blue,0}] {};
\node at (12,11.5) [circ, color={rgb,255:red,255; green,0; blue,0}] {};
\node at (6,11.5) [circ, color={rgb,255:red,255; green,0; blue,0}] {};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;



circuits.C_ex_CM_3 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](2,11.5) to[american voltage source] (2,7.5);
\draw [ line width=0.8pt](2,11.5) to[R] (6,11.5);
\draw [ line width=0.8pt](6,11.5) to[R] (6,7.5);
\draw [ line width=0.8pt](6,7.5) to[R] (2,7.5);
\draw [ line width=0.8pt](6,11.5) to[R] (10,11.5);
\draw [ line width=0.8pt](10,11.5) to[R] (10,7.5);
\draw [ line width=0.8pt](10,7.5) to[R] (6,7.5);
\draw [ line width=0.8pt](14,7.5) to[american current source] (14,11.5);
\draw [ line width=0.8pt](10,11.5) to[short] (14,11.5);
\draw [ line width=0.8pt](14,7.5) to[short] (10,7.5);
\node [font=\Large] at (4,12.25) {$3\Omega$};
\node [font=\Large] at (8,12.25) {$8\Omega$};
\node [font=\Large] at (5.25,9.5) {$2\Omega$};
\node [font=\Large] at (10.75,9.5) {$5\Omega$};
\node [font=\Large] at (4,6.75) {$6\Omega$};
\node [font=\Large] at (8,6.75) {$4\Omega$};
\node [font=\Large] at (0.5,9.5) {$V_{S}=30V$};
\node [font=\Large] at (15.5,9.5) {$I_{S}=16A$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (4,9.5) {$i_{a}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (8,9.5) {$i_{b}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (12,9.5) {$i_{c}$};
\draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (4,9) arc (270:20:0.5);
\draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (8,9) arc (270:20:0.5);
\draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (12,9) arc (270:20:0.5);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_fontes_equivalencia_independentes = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\large]
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (17.5,12) -- (16.5,11);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (16.5,11) -- (17.5,10);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (17.5,10) -- (17.5,10.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (17.5,12) -- (17.5,11.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (17.5,11.5) -- (18.5,11.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (18.5,11.5) -- (18.5,12);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (18.5,12) -- (19.5,11);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (19.5,11) -- (18.5,10);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (18.5,10) -- (18.5,10.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (18.5,10.5) -- (17.5,10.5);
\draw [ line width=0.8pt](11,12.5) to[american voltage source] (11,9.5);
\draw [ line width=0.8pt](11,12.5) to[R] (15,12.5);
\draw [ line width=0.8pt](11,9.5) to[short] (15,9.5);
\node at (15,12.5) [circ] {};
\node at (15,9.5) [circ] {};
\draw [ line width=0.8pt](21.5,9.5) to[short] (25.5,9.5);
\node at (25.5,12.5) [circ] {};
\node at (25.5,9.5) [circ] {};
\draw [ line width=0.8pt](21.5,9.5) to[american current source] (21.5,12.5);
\draw [ line width=0.8pt](23.5,12.5) to[R] (23.5,9.5);
\draw [ line width=0.8pt](21.5,12.5) to[short] (25.5,12.5);
\node [font=\Large] at (13,13) {$R$};
\node [font=\Large] at (24,11) {$R$};
\node [font=\Large] at (20.65,11) {$I_{s}$};
\node [font=\Large] at (10.15,11) {$V_{s}$};
\node [font=\large] at (15.5,12.5) {$a$};
\node [font=\large] at (26,12.5) {$a$};
\node [font=\large] at (26,9.5) {$b$};
\node [font=\large] at (15.5,9.5) {$b$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;



circuits.C_fontes_equivalencia_dependentes = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\large]
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (17.5,12) -- (16.5,11);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (16.5,11) -- (17.5,10);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (17.5,10) -- (17.5,10.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (17.5,12) -- (17.5,11.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (17.5,11.5) -- (18.5,11.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (18.5,11.5) -- (18.5,12);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (18.5,12) -- (19.5,11);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (19.5,11) -- (18.5,10);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (18.5,10) -- (18.5,10.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, short] (18.5,10.5) -- (17.5,10.5);
\draw [ line width=0.8pt](11,12.5) to[american controlled voltage source] (11,9.5);
\draw [ line width=0.8pt](11,12.5) to[R] (15,12.5);
\draw [ line width=0.8pt](11,9.5) to[short] (15,9.5);
\node at (15,12.5) [circ] {};
\node at (15,9.5) [circ] {};
\draw [ line width=0.8pt](21.5,9.5) to[short] (25.5,9.5);
\node at (25.5,12.5) [circ] {};
\node at (25.5,9.5) [circ] {};
\draw [ line width=0.8pt](21.5,9.5) to[american controlled current source] (21.5,12.5);
\draw [ line width=0.8pt](23.5,12.5) to[R] (23.5,9.5);
\draw [ line width=0.8pt](21.5,12.5) to[short] (25.5,12.5);
\node [font=\Large] at (13,13) {$R$};
\node [font=\Large] at (24,11) {$R$};
\node [font=\Large] at (20.65,11) {$I_{s}$};
\node [font=\Large] at (10.15,11) {$V_{s}$};
\node [font=\large] at (15.5,12.5) {$a$};
\node [font=\large] at (26,12.5) {$a$};
\node [font=\large] at (26,9.5) {$b$};
\node [font=\large] at (15.5,9.5) {$b$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_Transformacao_Fontes_1 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](14,13.5) to[american current source] (14,10.5);
\draw [ line width=0.8pt](17,13.5) to[R] (17,10.5);
\draw [ line width=0.8pt](17,13.5) to[R] (20,13.5);
\draw [ line width=0.8pt](20,13.5) to[R] (20,10.5);
\draw [ line width=0.8pt](20,13.5) to[R] (23,13.5);
\draw [ line width=0.8pt](23,13.5) to[american voltage source] (23,10.5);
\draw [ line width=0.8pt](14,10.5) to[short] (23,10.5);
\draw [ line width=0.8pt](17,13.5) to[short] (14,13.5);
\node [font=\Large] at (18.5,14) {\textit{$2\Omega$}};
\node [font=\Large] at (17.75,12) {\textit{$4\Omega$}};
\node [font=\Large] at (20.75,12) {\textit{$8\Omega$}};
\node [font=\Large] at (21.5,14) {\textit{$3\Omega$}};
\node [font=\Large] at (12.25,12) {$I_{a}=3A$};
\node [anchor=west, font=\Large] at (23.5,12) {$V_{x}=12V$};
\node [font=\huge, color={rgb,255:red,0; green,0; blue,255}] at (19.5,13) {\textit{$+$}};
\node [font=\huge, color={rgb,255:red,0; green,0; blue,255}] at (19.5,11) {\textit{$-$}};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (19.25,12) {\textit{$V_{o}$}};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_Transformacao_Fontes_2 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ line width=0.8pt](15,14.5) to[american voltage source] (15,17.5);
\draw [ line width=0.8pt](15,17.5) to[R] (18,17.5);
\draw [ line width=0.8pt](18,17.5) to[R] (21,17.5);
\draw [ line width=0.8pt](21,17.5) to[R] (21,14.5);
\draw [ line width=0.8pt](24,17.5) to[R] (24,14.5);
\draw [ line width=0.8pt](27,14.5) to[american current source] (27,17.5);
\draw [ line width=0.8pt](21,17.5) to[short] (27,17.5);
\draw [ line width=0.8pt](27,14.5) to[short] (15,14.5);
\node [font=\LARGE] at (16.5,18) {$4\Omega$};
\node [font=\LARGE] at (19.5,18) {$2\Omega$};
\node [font=\LARGE] at (21.75,16) {$8\Omega$};
\node [font=\LARGE] at (24.75,16) {$3\Omega$};
\node [font=\LARGE] at (12.75,16) {$V_{a1}=$};
\node [anchor=west, font=\LARGE] at (27.5,16) {$I_{x1}=$};
\node [font=\huge, color={rgb,255:red,0; green,0; blue,255}] at (20.5,17) {$+$};
\node [font=\huge, color={rgb,255:red,0; green,0; blue,255}] at (20.5,15) {$-$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (20.25,16) {$V_{o}$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_Transformacao_Fontes_3 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ line width=0.8pt](17,14.5) to[american voltage source] (17,17.5);
\draw [ line width=0.8pt](17,17.5) to[R] (21,17.5);
\draw [ line width=0.8pt](21,17.5) to[R] (21,14.5);
\draw [ line width=0.8pt](24,17.5) to[R] (24,14.5);
\draw [ line width=0.8pt](27,14.5) to[american current source] (27,17.5);
\draw [ line width=0.8pt](21,17.5) to[short] (27,17.5);
\node [font=\LARGE] at (19,18) {$6\Omega$};
\node [font=\LARGE] at (21.75,16) {$8\Omega$};
\node [font=\LARGE] at (24.75,16) {$3\Omega$};
\node [font=\LARGE] at (14.75,16) {$V_{a1}=$};
\node [anchor=west, font=\LARGE] at (27.5,16) {$I_{x1}=$};
\node [font=\huge, color={rgb,255:red,0; green,0; blue,255}] at (20.5,17) {$+$};
\node [font=\huge, color={rgb,255:red,0; green,0; blue,255}] at (20.5,15) {$-$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (20.25,16) {$V_{o}$};
\draw [ line width=0.8pt](17,14.5) to[short] (27,14.5);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_Transformacao_Fontes_4 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ line width=0.8pt](21,17.5) to[R] (21,14.5);
\draw [ line width=0.8pt](24,17.5) to[R] (24,14.5);
\draw [ line width=0.8pt](27,14.5) to[american current source] (27,17.5);
\draw [ line width=0.8pt](16,17.5) to[short] (27,17.5);
\node [font=\LARGE] at (21.75,16) {$8\Omega$};
\node [font=\LARGE] at (24.75,16) {$3\Omega$};
\node [font=\LARGE] at (13.75,16) {$I_{a2}=$};
\node [anchor=west, font=\LARGE] at (27.5,16) {$I_{x1}=$};
\node [font=\huge, color={rgb,255:red,0; green,0; blue,255}] at (20.5,17) {$+$};
\node [font=\huge, color={rgb,255:red,0; green,0; blue,255}] at (20.5,15) {$-$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (20.25,16) {$V_{o}$};
\draw [ line width=0.8pt](16,14.5) to[short] (27,14.5);
\draw [ line width=0.8pt](16,17.5) to[american current source] (16,14.5);
\draw [ line width=0.8pt](18.5,14.5) to[R] (18.5,17.5);
\node [font=\LARGE] at (17.75,16) {$6\Omega$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_Transformacao_Fontes_5 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ line width=0.8pt](21,17.5) to[R] (21,14.5);
\node [font=\LARGE] at (21.75,16) {$8\Omega$};
\node [font=\LARGE] at (13.75,16) {$I_{ax}=$};
\node [font=\huge, color={rgb,255:red,0; green,0; blue,255}] at (20.5,17) {$+$};
\node [font=\huge, color={rgb,255:red,0; green,0; blue,255}] at (20.5,15) {$-$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (20.25,16) {$V_{o}$};
\draw [ line width=0.8pt](18.5,14.5) to[R] (18.5,17.5);
\node [font=\LARGE] at (17.75,16) {$2\Omega$};
\draw [ line width=0.8pt](16,14.5) to[american current source] (16,17.5);
\draw [ line width=0.8pt](16,17.5) to[short] (21,17.5);
\draw [ line width=0.8pt](21,14.5) to[short] (16,14.5);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;



circuits.C_Teoria_Th_1 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](4,6.5) to[american voltage source] (4,3.5);
\draw [ line width=0.8pt](4,6.5) to[R] (7.5,6.5);
\draw [ line width=0.8pt](4,3.5) to[short] (7.5,3.5);
\draw [ line width=0.8pt](7.5,6.5) to[short, -o] (8,6.5) ;
\draw [ line width=0.8pt](7.5,3.5) to[short, -o] (8,3.5) ;
\node [font=\Large] at (6,7.25) {$R_{Th}$};
\node [font=\Large] at (3,5) {$V_{Th}$};
\node [font=\Large] at (8.5,6.5) {$a$};
\node [font=\Large] at (8.5,3.5) {$b$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (9,6.5) {+};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (9,3.5) {-};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_Teoria_Th_2 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](4,6.5) to[american voltage source] (4,3.5);
\draw [ line width=0.8pt](4,6.5) to[R] (7.5,6.5);
\draw [ line width=0.8pt](4,3.5) to[short] (7.5,3.5);
\draw [ line width=0.8pt](7.5,6.5) to[short, -o] (8,6.5) ;
\draw [ line width=0.8pt](7.5,3.5) to[short, -o] (8,3.5) ;
\node [font=\Large] at (6,7.25) {$R_{Th}$};
\node [font=\Large] at (3,5) {$V_{Th}$};
\node [font=\Large] at (8.5,6.5) {$a$};
\node [font=\Large] at (8.5,3.5) {$b$};
\draw [ line width=0.8pt](8,6.5) to[short] (8,3.5);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (8.5,5.5) -- (8.5,4.5);
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (9,5) {$i_{sc}$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (9,6.5) {+};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (9,3.5) {-};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_Teoria_Th_3 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](4,6.5) to[american voltage source] (4,3.5);
\draw [ line width=0.8pt](4,6.5) to[R] (7.5,6.5);
\draw [ line width=0.8pt](4,3.5) to[short] (7.5,3.5);
\draw [ line width=0.8pt](7.5,6.5) to[short, -o] (8,6.5) ;
\draw [ line width=0.8pt](7.5,3.5) to[short, -o] (8,3.5) ;
\node [font=\Large] at (6,7.25) {$R_{Th}$};
\node [font=\Large] at (3,5) {$V_{Th}$};
\node [font=\Large] at (8.5,6.5) {$a$};
\node [font=\Large] at (8.5,3.5) {$b$};
\draw [ line width=0.8pt](8,6.5) to[R] (8,3.5);
\node [font=\Large] at (8.75,5) {$R_{L}$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (9,6.5) {+};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (9,3.5) {-};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (7.5,5.5) -- (7.5,4.5);

\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_Teoria_Th_4 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ color={rgb,255:red,0; green,0; blue,0} , line width=0.8pt ] (4,6.5) rectangle (7,3.5);
\draw [ line width=0.8pt](7,6.25) to[short, -o] (8,6.25) ;
\draw [ line width=0.8pt](7,3.75) to[short, -o] (8,3.75) ;
\node [font=\Large] at (5.5,5.25) {$Black$};
\node [font=\Large] at (5.5,4.75) {$Box$};
\node [font=\Large] at (8.5,6.25) {$a$};
\node [font=\Large] at (8.5,3.75) {$b$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (9,6.25) {+};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (9,3.75) {-};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_Teoria_Th_5 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ color={rgb,255:red,0; green,0; blue,0} , line width=0.8pt ] (4,6.5) rectangle (7,3.5);
\draw [ line width=0.8pt](7,6.25) to[short, -o] (8,6.25) ;
\draw [ line width=0.8pt](7,3.75) to[short, -o] (8,3.75) ;
\node [font=\Large] at (5.5,5.25) {$Black$};
\node [font=\Large] at (5.5,4.75) {$Box$};
\node [font=\Large] at (8.5,6.25) {$a$};
\node [font=\Large] at (8.5,3.75) {$b$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (8.75,5.5) -- (8.75,4.5);
\draw [ line width=0.8pt](8,6.25) to[short] (8,3.75);
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (9.25,5) {$i_{sc}$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (9,6.25) {+};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (9,3.75) {-};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`; 


circuits.C_Teoria_Th_6 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ color={rgb,255:red,0; green,0; blue,0} , line width=0.8pt ] (4,6.5) rectangle (7,3.5);
\draw [ line width=0.8pt](7,6.25) to[short, -o] (8,6.25) ;
\draw [ line width=0.8pt](7,3.75) to[short, -o] (8,3.75) ;
\node [font=\Large] at (5.5,5.25) {$Black$};
\node [font=\Large] at (5.5,4.75) {$Box$};
\node [font=\Large] at (8.5,6.25) {$a$};
\node [font=\Large] at (8.5,3.75) {$b$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (7.5,5.5) -- (7.5,4.5);
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (9,6.25) {+};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (9,3.75) {-};
\draw [ line width=0.8pt](8,6.25) to[R] (8,3.75);
\node [font=\Large] at (8.75,5) {$R_{L}$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_Eq_Th_ex_1 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](14,18.5) to[R] (18,18.5);
\draw [ line width=0.8pt](18,18.5) to[R] (18,14.5);
\draw [ line width=0.8pt](18,18.5) to[R] (22,18.5);
\draw [ line width=0.8pt](22,20.5) to[short] (22,18.5);
\draw [ line width=0.8pt](22,18.5) to[short, -o] (22.5,18.5) ;
\draw [ line width=0.8pt](22,14.5) to[short, -o] (22.5,14.5) ;
\draw [ line width=0.8pt](22,14.5) to[short] (14,14.5);
\node [font=\Large] at (16,19.25) {$12\Omega$};
\node [font=\Large] at (20,19) {$2\Omega$};
\node [font=\Large] at (18.75,16.5) {$6\Omega$};
\node [font=\Large] at (23,18.5) {$a$};
\node [font=\Large] at (23,14.5) {$b$};
\draw [ line width=0.8pt](14,20.5) to[short] (14,18.5);
\draw [ line width=1pt](14,18.5) to[american voltage source] (14,14.5);
\draw [ line width=1pt](14,20.5) to[american current source] (22,20.5);
\node [anchor=west,font=\Large] at (11.2,16.5) {$V_{s}=12V$};
\node [font=\Large] at (18,21.25) {$I_{s}=8A$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_Eq_Th_ex_2 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](14,18.5) to[american voltage source] (14,14.5);
\draw [ line width=0.8pt](14,18.5) to[R] (18,18.5);
\draw [ line width=0.8pt](18,18.5) to[R] (18,14.5);
\draw [ line width=0.8pt](18,18.5) to[R] (22,18.5);
\draw [ line width=0.8pt](14,20.5) to[american current source] (22,20.5);
\draw [ line width=0.8pt](22,20.5) to[short] (22,18.5);
\draw [ line width=0.8pt](22,18.5) to[short, -o] (22.5,18.5) ;
\draw [ line width=0.8pt](22,14.5) to[short, -o] (22.5,14.5) ;
\draw [ line width=0.8pt](22,14.5) to[short] (14,14.5);
\node [font=\Large] at (18,21.25) {$I_{s}=8A$};
\node [anchor=west, font=\Large] at (11.2,16.5) {$V_{s}=12V$};
\node [font=\Large] at (16,19.25) {$12\Omega$};
\node [font=\Large] at (20,19) {$2\Omega$};
\node [font=\Large] at (18.75,16.5) {$6\Omega$};
\node [font=\Large] at (23,18.5) {$a$};
\node [font=\Large] at (23,14.5) {$b$};
\draw [ line width=0.8pt](14,20.5) to[short] (14,18.5);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (18,18.5) -- (18.75,18.5);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (18,18.5) -- (17.25,18.5);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (18,18.5) -- (18,17.75);
\draw [line width=0.8pt](18,14.5) to (18,14.25) node[sground]{};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (17.25,19) {$i_{1}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (18.5,17.75) {$i_{2}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (18.75,19) {$i_{3}$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (18,19) {$V_{1}$};
\node [font=\huge, color={rgb,255:red,50; green,150; blue,50}] at (24,18.5) {$+$};
\node [font=\huge, color={rgb,255:red,50; green,150; blue,50}] at (24,14.5) {$-$};
\node [font=\LARGE, color={rgb,255:red,50; green,150; blue,50}] at (24.25,16.5) {$V_{Th}$};
\node [font=\Large] at (21,18) {$+$};
\node [font=\Large] at (19.25,18) {$-$};
\node [font=\Large] at (20.25,17.75) {$V_{2\Omega}$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;



circuits.C_Eq_Th_ex_3 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](14,18.5) to[american voltage source] (14,14.5);
\draw [ line width=0.8pt](14,18.5) to[R] (18,18.5);
\draw [ line width=0.8pt](18,18.5) to[R] (18,14.5);
\draw [ line width=0.8pt](18,18.5) to[R] (22,18.5);
\draw [ line width=0.8pt](14,20.5) to[american current source] (22,20.5);
\draw [ line width=0.8pt](22,20.5) to[short] (22,18.5);
\draw [ line width=0.8pt](22,18.5) to[short, -o] (22.5,18.5) ;
\draw [ line width=0.8pt](22,14.5) to[short, -o] (22.5,14.5) ;
\draw [ line width=0.8pt](22,14.5) to[short] (14,14.5);
\node [font=\Large] at (18,21.25) {$I_{s}=8A$};
\node [anchor=west, font=\Large] at (11.2,16.5) {$V_{s}=12V$};
\node [font=\Large] at (16,19.25) {$12\Omega$};
\node [font=\Large] at (20,19) {$2\Omega$};
\node [font=\Large] at (18.75,16.5) {$6\Omega$};
\node [font=\Large] at (23,18.5) {$a$};
\node [font=\Large] at (23,14.5) {$b$};
\draw [ line width=0.8pt](14,20.5) to[short] (14,18.5);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (18,18.5) -- (18.75,18.5);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (18,18.5) -- (17.25,18.5);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (18,18.5) -- (18,17.75);
\draw [line width=0.8pt](18,14.5) to (18,14.25) node[sground]{};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (17.25,19) {$i_{1}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (18.5,17.75) {$i_{2}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (18.75,19) {$i_{3}$};
\node [font=\LARGE, color={rgb,255:red,0; green,0; blue,255}] at (18,19) {$V'_{1}$};
\draw [ line width=0.8pt](22.5,18.5) to[short] (22.5,14.5);
\draw [ color={rgb,255:red,50; green,150; blue,50}, line width=1pt, ->, >=Stealth] (23,17) -- (23,16);
\node [font=\Large, color={rgb,255:red,50; green,150; blue,50}] at (23.5,16.5) {$I_{sc}$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_Eq_Th_ex_4 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ line width=0.8pt](14,18.5) to[R] (18,18.5);
\draw [ line width=0.8pt](18,18.5) to[R] (18,14.5);
\draw [ line width=0.8pt](18,18.5) to[R] (22,18.5);
\draw [ line width=0.8pt](22,20.5) to[short] (22,18.5);
\draw [ line width=0.8pt](22,18.5) to[short, -o] (22.5,18.5) ;
\draw [ line width=0.8pt](22,14.5) to[short, -o] (22.5,14.5) ;
\draw [ line width=0.8pt](22,14.5) to[short] (14,14.5);
\node [font=\Large] at (16,19.25) {$12\Omega$};
\node [font=\Large] at (20,19) {$2\Omega$};
\node [font=\Large] at (18.75,16.5) {$6\Omega$};
\node [font=\Large] at (23,18.5) {$a$};
\node [font=\Large] at (23,14.5) {$b$};
\draw [ line width=0.8pt](14,20.5) to[short] (14,18.5);
\draw [line width=0.8pt](18,14.5) to (18,14.25) node[sground]{};
\draw [ line width=1pt](14,20.5) to[short, -o] (17,20.5) ;
\draw [ line width=1pt](22,20.5) to[short, -o] (19,20.5) ;
\draw [ line width=1pt](14,18.5) to[short, -o] (14,17) ;
\draw [ line width=1pt](14,14.5) to[short, -o] (14,16) ;
\draw [ line width=1pt](14,17) to[short] (14,16);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;



circuits.C_Ex_Superposicao_1 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ line width=0.8pt](11,23.5) to[american voltage source] (14,23.5);
\draw [ line width=0.8pt](14,23.5) to[R] (17,23.5);
\draw [ line width=0.8pt](11,21.5) to[R] (14,21.5);
\draw [ line width=0.8pt](14,21.5) to[R] (17,21.5);
\draw [ line width=0.8pt](14,21.5) to[R] (14,18.5);
\draw [ line width=0.8pt](11,21.5) to[american voltage source] (11,18.5);
\draw [ line width=0.8pt](17,18.5) to[american current source] (17,21.5);
\draw [ line width=0.8pt](11,23.5) to[short] (11,21.5);
\draw [ line width=0.8pt](17,23.5) to[short] (17,21.5);
\draw [ line width=0.8pt](17,18.5) to[short] (11,18.5);
\node [font=\Large] at (12.5,24.25) {$V_{1}=12V$};
\node [font=\Large] at (15.5,24) {$8\Omega$};
\node [font=\Large] at (15.5,22) {$4\Omega$};
\node [font=\Large] at (12.5,22) {$4\Omega$};
\node [font=\Large] at (14.75,20) {$3\Omega$};
\node [font=\Large] at (9.25,20) {$V_{2}=24V$};
\node [font=\Large] at (18.5,20) {$I_{1}=6A$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (13.5,20.5) -- (13.5,19.5);
\node [font=\LARGE, color={rgb,255:red,255; green,0; blue,0}] at (13.25,20) {$i$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;



circuits.C_Ex_Superposicao_2 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ line width=0.8pt](14,23.5) to[R] (17,23.5);
\draw [ line width=0.8pt](11,21.5) to[R] (14,21.5);
\draw [ line width=0.8pt](14,21.5) to[R] (17,21.5);
\draw [ line width=0.8pt](14,21.5) to[R] (14,18.5);
\draw [ line width=0.8pt](11,21.5) to[american voltage source] (11,18.5);
\draw [ line width=0.8pt](11,23.5) to[short] (11,21.5);
\draw [ line width=0.8pt](17,23.5) to[short] (17,21.5);
\draw [ line width=0.8pt](17,18.5) to[short] (11,18.5);
\node [font=\Large] at (15.5,24) {$8\Omega$};
\node [font=\Large] at (15.5,22) {$4\Omega$};
\node [font=\Large] at (12.5,22) {$4\Omega$};
\node [font=\Large] at (14.75,20) {$3\Omega$};
\node [font=\Large] at (9.25,20) {$V_{2}=24V$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (13.5,20.5) -- (13.5,19.5);
\node [font=\LARGE, color={rgb,255:red,255; green,0; blue,0}] at (13.05,20) {$i'$};
\draw [ line width=0.8pt](11,23.5) to[short, -o] (12,23.5) ;
\draw [ line width=0.8pt](14,23.5) to[short, -o] (13,23.5) ;
\draw [ line width=0.8pt](17,21.5) to[short, -o] (17,20.5) ;
\draw [ line width=0.8pt](17,18.5) to[short, -o] (17,19.5) ;
\draw [ line width=0.8pt](12,23.5) to[short] (13,23.5);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_Ex_Superposicao_3 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ line width=0.8pt](11,23.5) to[american voltage source] (14,23.5);
\draw [ line width=0.8pt](14,23.5) to[R] (17,23.5);
\draw [ line width=0.8pt](11,21.5) to[R] (14,21.5);
\draw [ line width=0.8pt](14,21.5) to[R] (17,21.5);
\draw [ line width=0.8pt](14,21.5) to[R] (14,18.5);
\draw [ line width=0.8pt](11,23.5) to[short] (11,21.5);
\draw [ line width=0.8pt](17,23.5) to[short] (17,21.5);
\draw [ line width=0.8pt](17,18.5) to[short] (11,18.5);
\node [font=\Large] at (12.5,24.25) {$V_{1}=12V$};
\node [font=\Large] at (15.5,24) {$8\Omega$};
\node [font=\Large] at (15.5,22) {$4\Omega$};
\node [font=\Large] at (12.5,22) {$4\Omega$};
\node [font=\Large] at (14.75,20) {$3\Omega$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (13.5,20.5) -- (13.5,19.5);
\node [font=\LARGE, color={rgb,255:red,255; green,0; blue,0}] at (13.05,20) {$i''$};
\draw [ line width=0.8pt](11,21.5) to[short, -o] (11,20.5) ;
\draw [ line width=0.8pt](11,18.5) to[short, -o] (11,19.5) ;
\draw [ line width=0.8pt](17,21.5) to[short, -o] (17,20.5) ;
\draw [ line width=0.8pt](17,18.5) to[short, -o] (17,19.5) ;
\draw [ line width=0.8pt](11,20.5) to[short] (11,19.5);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_Ex_Superposicao_4 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ line width=0.8pt](14,23.5) to[R] (17,23.5);
\draw [ line width=0.8pt](11,21.5) to[R] (14,21.5);
\draw [ line width=0.8pt](14,21.5) to[R] (17,21.5);
\draw [ line width=0.8pt](14,21.5) to[R] (14,18.5);
\draw [ line width=0.8pt](17,18.5) to[american current source] (17,21.5);
\draw [ line width=0.8pt](11,23.5) to[short] (11,21.5);
\draw [ line width=0.8pt](17,23.5) to[short] (17,21.5);
\draw [ line width=0.8pt](17,18.5) to[short] (11,18.5);
\node [font=\Large] at (15.5,24) {$8\Omega$};
\node [font=\Large] at (15.5,22) {$4\Omega$};
\node [font=\Large] at (12.5,22) {$4\Omega$};
\node [font=\Large] at (14.75,20) {$3\Omega$};
\node [font=\Large] at (18.5,20) {$I_{1}=6A$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (13.5,20.5) -- (13.5,19.5);
\node [font=\LARGE, color={rgb,255:red,255; green,0; blue,0}] at (13.05,20) {$i'''$};
\draw [ line width=0.8pt](14,23.5) to[short, -o] (13,23.5) ;
\draw [ line width=0.8pt](11,23.5) to[short, -o] (12,23.5) ;
\draw [ line width=0.8pt](11,21.5) to[short, -o] (11,20.5) ;
\draw [ line width=0.8pt](11,18.5) to[short, -o] (11,19.5) ;
\draw [ line width=0.8pt](11,20.5) to[short] (11,19.5);
\draw [ line width=0.8pt](12,23.5) to[short] (13,23.5);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_Ex_Superposicao_5 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ line width=0.8pt](11,23.5) to[american voltage source] (14,23.5);
\draw [ line width=0.8pt](14,23.5) to[R] (17,23.5);
\draw [ line width=0.8pt](11,21.5) to[R] (14,21.5);
\draw [ line width=0.8pt](14,21.5) to[R] (17,21.5);
\draw [ line width=0.8pt](14,21.5) to[R] (14,18.5);
\draw [ line width=0.8pt](11,23.5) to[short] (11,21.5);
\draw [ line width=0.8pt](17,23.5) to[short] (17,21.5);
\draw [ line width=0.8pt](17,18.5) to[short] (11,18.5);
\node [font=\Large] at (12.5,24.25) {$V_{1}=12V$};
\node [font=\Large] at (15.5,24) {$8\Omega$};
\node [font=\Large] at (15.5,22) {$4\Omega$};
\node [font=\Large] at (12.5,22) {$4\Omega$};
\node [font=\Large] at (14.75,20) {$3\Omega$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (13.5,20.5) -- (13.5,19.5);
\node [font=\LARGE, color={rgb,255:red,255; green,0; blue,0}] at (13,20) {$i''$};
\draw [ line width=0.8pt](11,21.5) to[short, -o] (11,20.5) ;
\draw [ line width=0.8pt](11,18.5) to[short, -o] (11,19.5) ;
\draw [ line width=0.8pt](17,21.5) to[short, -o] (17,20.5) ;
\draw [ line width=0.8pt](17,18.5) to[short, -o] (17,19.5) ;
\draw [ line width=0.8pt](11,19.5) to[short] (11,20.5);
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (14,22) {$V_{1}$};
\draw [line width=0.8pt](14,18.5) to (14,18.25) node[sground]{};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_Ex_Superposicao_6 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](14,23.5) to[R] (17,23.5);
\draw [ line width=0.8pt](11,21.5) to[R] (14,21.5);
\draw [ line width=0.8pt](14,21.5) to[R] (17,21.5);
\draw [ line width=0.8pt](14,21.5) to[R] (14,18.5);
\draw [ line width=0.8pt](17,18.5) to[american current source] (17,21.5);
\draw [ line width=0.8pt](11,23.5) to[short] (11,21.5);
\draw [ line width=0.8pt](17,23.5) to[short] (17,21.5);
\draw [ line width=0.8pt](17,18.5) to[short] (11,18.5);
\node [font=\Large] at (15.5,24) {$8\Omega$};
\node [font=\Large] at (15.5,22) {$4\Omega$};
\node [font=\Large] at (12.5,22) {$4\Omega$};
\node [font=\Large] at (14.75,20) {$3\Omega$};
\node [font=\Large] at (18.5,20) {$I_{1}=6A$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (13.5,20.5) -- (13.5,19.5);
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (13,20) {$i'''$};
\draw [ line width=0.8pt](11,23.5) to[short, -o] (12,23.5) ;
\draw [ line width=0.8pt](14,23.5) to[short, -o] (13,23.5) ;
\draw [ line width=0.8pt](11,21.5) to[short, -o] (11,20.5) ;
\draw [ line width=0.8pt](11,18.5) to[short, -o] (11,19.5) ;
\draw [ line width=0.8pt](12,23.5) to[short] (13,23.5);
\draw [ line width=0.8pt](11,20.5) to[short] (11,19.5);
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (14,22.5) {$i_{a}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (12,20) {$i_{b}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (15.75,20) {$i_{c}$};
\draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (14,22) arc (270:20:0.5);
\draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (12,19.5) arc (270:20:0.5);
\draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (15.75,19.5) arc (270:20:0.5);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;






circuits.C_4 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](5,14.5) to[american voltage source,l={ \Large $V_{1}$}] (5,11.5);
\draw [ line width=0.8pt](5,14.5) to[R,l={ \Large $R_{1}$}] (9,14.5);
\draw [ line width=0.8pt](9,14.5) to[R,l={ \Large $R_{2}$}] (9,11.5);
\draw [ line width=0.8pt](9,14.5) to[R,l={ \Large $R_{3}$}] (13,14.5);
\draw [ line width=0.8pt](13,14.5) to[R,l={ \Large $R_{4}$}] (13,11.5);
\draw [ line width=0.8pt](17,14.5) to[american voltage source,l={ \Large $V_{2}$}] (17,11.5);
\draw [ line width=0.8pt](17,14.5) to[short] (13,14.5);
\draw [ line width=0.8pt](17,11.5) to[short] (5,11.5);
\node at (11,11.5) [circ, color={rgb,255:red,255; green,0; blue,0}] {};
\node at (15,14.5) [circ, color={rgb,255:red,255; green,0; blue,0}] {};
\node at (9,14.5) [circ, color={rgb,255:red,255; green,0; blue,0}] {};
\node at (5,14.5) [circ, color={rgb,255:red,255; green,0; blue,0}] {};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (7.25,13) {$M_{1}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (11,13) {$M_{2}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (15,13) {$M_{3}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (4.75,15.25) {$N_{a}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (9,15.25) {$N_{b}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (15,15.25) {$N_{c}$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (11,10.75) {$N_{d}$};
\draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (7.25,12.5) arc (270:15:0.5);
\draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (11,12.5) arc (270:15:0.5);
\draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (15,12.5) arc (270:15:0.5);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_5 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](17,11.25) to[american controlled current source] (13,11.25);
\draw [ line width=0.8pt](9,9.25) to[american voltage source,l={ \Large $V_{S}=50V$}] (9,6.25);
\draw [ line width=0.8pt](9,9.25) to[R,l={ \Large $R_{1}=6\Omega$}] (13,9.25);
\draw [ line width=0.8pt](13,9.25) to[R,l={ \Large $R_{3}=8\Omega$}] (13,6.25);
\draw [ line width=0.8pt](13,9.25) to[R,l={ \Large $R_{2}=2\Omega$}] (17,9.25);
\draw [ line width=0.8pt](17,9.25) to[R,l={ \Large $R_{4}=4\Omega$}] (17,6.25);
\draw [ line width=0.8pt](21,6.25) to[american current source] (21,9.25);
\draw [ line width=0.8pt](21,9.25) to[short] (17,9.25);
\draw [ line width=0.8pt](21,6.25) to[short] (9,6.25);
\draw [ line width=0.8pt](17,11.25) to[short] (17,9.25);
\draw [ line width=0.8pt](13,11.25) to[short] (13,9.25);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=2pt, ->, >=Stealth] (9.25,9.25) -- (10,9.25);
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (9.5,9.75) {$i_{a}$};
\node [font=\Large] at (15,12) {$I_{FD}=3\cdoti_{a}$};
\node [font=\Large] at (22.5,7.75) {$I_{S}=5A$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

circuits.C_6 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](17,11.25) to[american controlled current source] (13,11.25);
\draw [ line width=0.8pt](8,9.25) to[american voltage source,l={ \Large $V_{S}=50V$}] (8,5.5);
\draw [ line width=0.8pt](8,9.25) to[R,l={ \Large $R_{1}=6\Omega$}] (13,9.25);
\draw [ line width=0.8pt](13,9.25) to[R,l={ \Large $R_{3}=8\Omega$}] (13,5.5);
\draw [ line width=0.8pt](17,9.25) to[R,l={ \Large $R_{2}=2\Omega$}] (13,9.25);
\draw [ line width=0.8pt](17,9.25) to[R,l={ \Large $R_{4}=4\Omega$}] (17,5.5);
\draw [ line width=0.8pt](21,5.5) to[american current source] (21,9.25);
\draw [ line width=0.8pt](21,9.25) to[short] (17,9.25);
\draw [ line width=0.8pt](21,5.5) to[short] (8,5.5);
\draw [ line width=0.8pt](17,11.25) to[short] (17,9.25);
\draw [ line width=0.8pt](13,11.25) to[short] (13,9.25);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=2pt, ->, >=Stealth] (8.25,9.25) -- (9,9.25);
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (8.75,9.75) {$i_{a}$};
\node [font=\Large] at (15,12) {$I_{FD}=3\cdoti_{a}$};
\node [font=\Large] at (22.25,7.75) {$I_{S}=5A$};
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=2pt, ->, >=Stealth] (13,9.25) -- (12.25,9.25);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=2pt, ->, >=Stealth] (13,9.25) -- (13.75,9.25);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=2pt, ->, >=Stealth] (13,9.25) -- (13,10);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=2pt, ->, >=Stealth] (13,9.25) -- (13,8.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=2pt, ->, >=Stealth] (17,9.25) -- (16.25,9.25);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=2pt, ->, >=Stealth] (17,9.25) -- (17.75,9.25);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=2pt, ->, >=Stealth] (17,9.25) -- (17,10);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=2pt, ->, >=Stealth] (17,9.25) -- (17,8.5);
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (12.75,8.5) {$i_{3}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (13.25,10.25) {$i_{4}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (16.75,8.5) {$i_{7}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (17.25,10.25) {$i_{8}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (12,9) {$i_{1}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (13.75,9.75) {$i_{2}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (18,9) {$i_{6}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (16.25,9.75) {$i_{5}$};
\draw [line width=0.8pt](15,5.5) to (15,5.25) node[sground]{};
\draw [ color={rgb,255:red,30; green,130; blue,30}, , line width=1pt](17,9.25) to[short, -o] (18.25,10.5) ;
\draw [ color={rgb,255:red,30; green,130; blue,30}, , line width=1pt](13,9.25) to[short, -o] (11.75,10.5) ;
\node [font=\LARGE, color={rgb,255:red,30; green,130; blue,30}] at (19,11.25) {$V_{2}$};
\node [font=\LARGE, color={rgb,255:red,30; green,130; blue,30}] at (11,11.25) {$V_{1}$};
\node [font=\Huge, color={rgb,255:red,30; green,130; blue,30}] at (15,5.75) {\textbf{-    -}};
\node [font=\Huge, color={rgb,255:red,30; green,130; blue,30}] at (18.5,10.75) {\textbf{+}};
\node [font=\Huge, color={rgb,255:red,30; green,130; blue,30}] at (11.5,10.75) {\textbf{+}};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`; 


circuits.C_7 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\LARGE]
\draw [ line width=0.8pt](6,12.5) to[R,l={ \Large $R_{1}=6$}] (8,12.5);
\draw [ line width=0.8pt](8,12.5) to[short, -o] (10,12.5) ;
\draw [ line width=0.8pt](6,12.5) to[american voltage source] (4,12.5);
\draw [ line width=0.8pt](8,6.5) to[short, -o] (10,6.5) ;
\draw [ line width=0.8pt](6,6.5) to[R,l={ \Large $R_{3}=8\Omega$}] (8,6.5);
\draw [ line width=0.8pt](6,6.5) to[short] (4,6.5);
\draw [line width=0.8pt](4,6.5) to (4,6.25) node[sground]{};
\draw [line width=0.8pt](4,12.5) to (4,12) node[sground]{};
\draw [ line width=0.8pt](8,9.5) to[short, -o] (10,9.5) ;
\draw [ line width=0.8pt](6,9.5) to[R,l={ \Large $R_{2}=2\Omega$}] (8,9.5);
\draw [ line width=0.8pt](5,9.5) to[short, -o] (4,9.5) ;
\draw [ line width=0.8pt](5,9.5) to[short] (6,9.5);
\draw [ line width=0.8pt](8,3.5) to[short, -o] (10,3.5) ;
\draw [ line width=0.8pt](6,3.5) to[american controlled current source] (8,3.5);
\draw [ line width=0.8pt](6,3.5) to[short] (5,3.5);
\draw [ line width=0.8pt](5,3.5) to[short, -o] (4,3.5) ;
\node [font=\Large] at (10,12) {$V_{1}$};
\node [font=\Large] at (5,13.25) {$V_{S}=50V$};
\node [font=\Large] at (10,9) {$V_{1}$};
\node [font=\Large] at (4,9) {$V_{2}$};
\node [font=\Large] at (10,6) {$V_{1}$};
\node [font=\Large] at (10,3) {$V_{1}$};
\node [font=\Large] at (4,3) {$V_{2}$};
\node [font=\Large] at (3.25,5.75) {$0V$};
\node [font=\Large] at (3.25,11.5) {$0V$};
\node [font=\Large] at (7,4.25) {$I_{FD}=3\cdot i_{a}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (8.75,13) {$i_{1}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (8.5,10) {$i_{2}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (8.75,7) {$i_{3}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (8.75,4) {$i_{4}$};
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (9,12.5) -- (8.25,12.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (9,9.5) -- (8.25,9.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (9,6.5) -- (8.25,6.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (9,3.5) -- (8.25,3.5);
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (6.25,12) {\textbf{-}};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (7.75,12) {\textbf{+}};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (6.25,9) {\textbf{-}};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (6.25,6) {\textbf{-}};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (7.75,9) {\textbf{+}};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (7.75,6) {\textbf{+}};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;


circuits.C_8 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\large]
\draw [ line width=0.8pt](15,6.5) to[short, -o] (17,6.5) ;
\draw [ line width=0.8pt](13,6.5) to[R,l={ \Large $R_{4}=4\Omega$}] (15,6.5);
\draw [ line width=0.8pt](13,6.5) to[short] (11,6.5);
\draw [line width=0.8pt](11,6.5) to (11,6.25) node[sground]{};
\draw [ line width=0.8pt](15,12.5) to[short, -o] (17,12.5) ;
\draw [ line width=0.8pt](13,12.5) to[R,l={ \Large $R_{2}=2\Omega$}] (15,12.5);
\draw [ line width=0.8pt](12,12.5) to[short, -o] (11,12.5) ;
\draw [ line width=0.8pt](12,12.5) to[short] (13,12.5);
\draw [ line width=0.8pt](15,9.5) to[short, -o] (17,9.5) ;
\draw [ line width=0.8pt](13,9.5) to[short] (12,9.5);
\draw [ line width=0.8pt](13,9.5) to[american current source,l={ \Large $I_{S}=5A$}] (15,9.5);
\draw [ line width=0.8pt](15,3.5) to[short, -o] (17,3.5) ;
\draw [ line width=0.8pt](15,3.5) to[american controlled current source] (13,3.5);
\draw [ line width=0.8pt](13,3.5) to[short] (12,3.5);
\draw [ line width=0.8pt](12,3.5) to[short, -o] (11,3.5) ;
\node [font=\Large] at (11,5.25) {$0V$};
\draw [line width=0.8pt](11,9.5) to (11,9.25) node[sground]{};
\draw [ line width=0.8pt](12,9.5) to[short] (11,9.5);
\node [font=\Large] at (11,8.25) {$0V$};
\node [font=\Large] at (17,11.75) {$V_{2}$};
\node [font=\Large] at (17,9) {$V_{2}$};
\node [font=\Large] at (17,6) {$V_{2}$};
\node [font=\Large] at (17,3) {$V_{2}$};
\node [font=\Large] at (11,12) {$V_{1}$};
\node [font=\Large] at (11,3) {$V_{1}$};
\node [font=\Large] at (14,4.25) {$I_{FD}=3\cdot i_{a}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (16.25,13) {$i_{5}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (16.25,10) {$i_{6}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (16.25,7) {$i_{7}$};
\node [font=\Large, color={rgb,255:red,0; green,0; blue,255}] at (16.25,4) {$i_{8}$};
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (16.5,3.5) -- (15.75,3.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (16.5,9.5) -- (15.75,9.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (16.5,12.5) -- (15.75,12.5);
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (13.25,12) {\textbf{-}};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (13.25,6) {\textbf{-}};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (14.75,12) {\textbf{+}};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (14.75,6) {\textbf{+}};
\draw [ line width=0.8pt](15.5,0.5) to[R,l={ \Large $R_{1}=6$}] (13.5,0.5);
\draw [ line width=0.8pt](15.5,0.5) to[short, -o] (17,0.5) ;
\draw [ line width=0.8pt](13.5,0.5) to[american voltage source] (12,0.5);
\draw [line width=0.8pt](11,0.5) to (11,0) node[sground]{};
\node [font=\Large] at (17,-0.25) {$V_{1}$};
\node [font=\Large] at (12.5,1.5) {$V_{S}=50V$};
\node [font=\Large] at (11,-1) {$0V$};
\node [font=\Large, color={rgb,255:red,255; green,0; blue,0}] at (11.75,0) {$i_{a}$};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (13.75,1) {\textbf{+}};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (15.25,1) {\textbf{-}};
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (16.5,6.5) -- (15.75,6.5);
\draw [ line width=0.8pt](12,0.5) to[short] (11,0.5);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (11.25,0.5) -- (12,0.5);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;