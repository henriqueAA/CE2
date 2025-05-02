const circuits = {};

// circuits.C_ = String.raw`
// `;

//Line Thickness: 0.8
// Grid Scale: 75

// Malha
// \draw [arrows=-{>[scale=2, length=3, width=3.5,bend]}, color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (7.5,14.25) arc (270:20:0.5);

// sground
// ground


circuits.C_1 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](3,13) to[american voltage source] (3,10);
\draw [ line width=0.8pt](3,13) to[R] (6,13);
\draw [ line width=0.8pt](6,13) to[R] (6,10);
\draw [ line width=0.8pt](6,13) to[rmeter, t=A] (9,13);
\draw [ line width=0.8pt](9,13) to[R] (12,13);
\draw [ line width=0.8pt](12,13) to[R] (12,10);
\draw [ line width=0.8pt](15,13) to[rmeter, t=V] (15,10);
\draw [ line width=0.8pt](12,13) to[short] (15,13);
\draw [ line width=0.8pt](15,10) to[short] (12,10);
\draw [ line width=0.8pt](12,10) to[short] (3,10);
\node [font=\LARGE] at (15.75,12.25) {\textbf{+}};
\node [font=\LARGE] at (15.75,10.75) {\textbf{-}};
\node [font=\LARGE] at (6.5,13.5) {\textbf{+}};
\node [font=\LARGE] at (8.5,13.5) {\textbf{-}};
\node [font=\Large] at (7.5,14.25) {$(R_{Dis}=0\Omega)$};
\node [font=\Large] at (17.5,11.5) {$(R_{Dis}= \infty \Omega)$};
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;

// Cópia de C_1

circuits.C_2 = String.raw`
\begin{figure}[!ht]
\centering
\resizebox{1\textwidth}{!}{%
\begin{circuitikz}
\tikzstyle{every node}=[font=\Large]
\draw [ line width=0.8pt](3,13) to[american voltage source] (3,10);
\draw [ line width=0.8pt](3,13) to[R] (6,13);
\draw [ line width=0.8pt](6,13) to[R] (6,10);
\draw [ line width=0.8pt](6,13) to[rmeter, t=A] (9,13);
\draw [ line width=0.8pt](9,13) to[R] (12,13);
\draw [ line width=0.8pt](12,13) to[R] (12,10);
\draw [ line width=0.8pt](15,13) to[rmeter, t=V] (15,10);
\draw [ line width=0.8pt](12,13) to[short] (15,13);
\draw [ line width=0.8pt](15,10) to[short] (12,10);
\draw [ line width=0.8pt](12,10) to[short] (3,10);
\node [font=\LARGE] at (15.75,12.25) {\textbf{+}};
\node [font=\LARGE] at (15.75,10.75) {\textbf{-}};
\node [font=\LARGE] at (6.5,13.5) {\textbf{+}};
\node [font=\LARGE] at (8.5,13.5) {\textbf{-}};
\node [font=\Large] at (7.5,14.25) {$(R_{Dis}=0\Omega)$};
\node [font=\Large] at (17.5,11.5) {$(R_{Dis}= \infty \Omega)$};
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
\tikzstyle{every node}=[font=\huge]
\draw [ line width=0.6pt](3,13) to[american voltage source] (3,10);
\draw [ line width=0.6pt](3,13) to[R] (6,13);
\draw [ line width=0.6pt](6,13) to[R] (6,10);
\draw [ line width=0.6pt](7.5,13) to[R] (10.5,13);
\draw [ line width=0.6pt](10.5,13) to[R] (10.5,10);
\draw [ line width=0.6pt](3,10) to[short] (9,10);
\draw [ line width=0.6pt](7.5,13) to[short] (6,13);
\draw [ line width=0.6pt](9,10) to[short] (10.5,10);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (6.75,13) -- (7.5,13);
\node [font=\huge, color={rgb,255:red,255; green,0; blue,0}] at (7.25,13.75) {$i_{x}$};
\node [font=\huge, color={rgb,255:red,255; green,0; blue,0}] at (11.75,12.5) {\textbf{+}};
\node [font=\huge, color={rgb,255:red,255; green,0; blue,0}] at (11.75,10.5) {\textbf{-}};
\node [font=\huge, color={rgb,255:red,255; green,0; blue,0}] at (11.75,11.5) {$v_{x}$};
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
\tikzstyle{every node}=[font=\large]
\draw [ line width=0.8pt](17,15.75) to[american controlled current source] (13,15.75);
\draw [ line width=0.8pt](9,13.75) to[american voltage source,l={ \large $V_{1}=50V$}] (9,10.75);
\draw [ line width=0.8pt](9,13.75) to[R,l={ \large $R_{1}=6\Omega$}] (13,13.75);
\draw [ line width=0.8pt](13,13.75) to[R,l={ \large $R_{3}=8\Omega$}] (13,10.75);
\draw [ line width=0.8pt](13,13.75) to[R,l={ \large $R_{2}=2\Omega$}] (17,13.75);
\draw [ line width=0.8pt](17,13.75) to[R,l={ \large $R_{4}=4\Omega$}] (17,10.75);
\draw [ line width=0.8pt](21,10.75) to[american current source] (21,13.75);
\draw [ line width=0.8pt](21,13.75) to[short] (17,13.75);
\draw [ line width=0.8pt](21,10.75) to[short] (9,10.75);
\draw [ line width=0.8pt](17,15.75) to[short] (17,13.75);
\draw [ line width=0.8pt](13,15.75) to[short] (13,13.75);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (9.25,13.75) -- (10,13.75);
\node [font=\large, color={rgb,255:red,255; green,0; blue,0}] at (9.5,14.25) {$i_{a}$};
\node [font=\large] at (15,16.5) {$I_{FD}=3\cdot i_{a}$};
\node [font=\large] at (22.25,12.25) {$I_{1}=5A$};
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
\tikzstyle{every node}=[font=\Huge]
\draw [ line width=0.8pt](18,15.75) to[american controlled current source] (13,15.75);
\draw [ line width=0.8pt](8,13.75) to[american voltage source,l={ \large $V_{1}=50V$}] (8,9.75);
\draw [ line width=0.8pt](8,13.75) to[R,l={ \large $R_{1}=6\Omega$}] (13,13.75);
\draw [ line width=0.8pt](13,13.75) to[R,l={ \large $R_{3}=8\Omega$}] (13,9.75);
\draw [ line width=0.8pt](13,13.75) to[R,l={ \large $R_{2}=2\Omega$}] (18,13.75);
\draw [ line width=0.8pt](18,13.75) to[R,l={ \large $R_{4}=4\Omega$}] (18,9.75);
\draw [ line width=0.8pt](22,9.75) to[american current source] (22,13.75);
\draw [ line width=0.8pt](21,9.75) to[short] (9,9.75);
\draw [ line width=0.8pt](18,15.75) to[short] (18,13.75);
\draw [ line width=0.8pt](13,15.75) to[short] (13,13.75);
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=0.8pt, ->, >=Stealth] (8.25,13.75) -- (9,13.75);
\node [font=\large, color={rgb,255:red,255; green,0; blue,0}] at (8.5,14.25) {$i_{a}$};
\node [font=\large] at (15,16.5) {$I_{FD}=3\cdot i_{a}$};
\node [font=\large] at (23.25,12.25) {$I_{1}=5A$};
\draw [ line width=0.8pt](18,13.75) to[short] (22,13.75);
\draw [ line width=0.8pt](22,9.75) to[short] (20.75,9.75);
\draw [ line width=0.8pt](8,9.75) to[short] (9,9.75);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (13,13.75) -- (12.25,13.75);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (13,13.75) -- (13,13);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (13,13.75) -- (13.75,13.75);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (18,13.75) -- (17.25,13.75);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (18,13.75) -- (18,13);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (18,13.75) -- (18.75,13.75);
\draw [line width=0.8pt](15.5,9.75) to (15.5,9.5) node[sground]{};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (12,14) {$i_{1}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (13.25,14.75) {$i_{4}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (14,13.5) {$i_{2}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (12.75,13) {$i_{3}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (17,14) {$i_{5}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (18.25,14.75) {$i_{8}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (19,13.5) {$i_{6}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (17.75,13) {$i_{7}$};
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (18,13.75) -- (18,14.5);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (13,13.75) -- (13,14.5);
\node [font=\Huge, color={rgb,255:red,0; green,133; blue,2}] at (15.5,10) {\textbf{-   -}};
\node [font=\Large, color={rgb,255:red,0; green,133; blue,2}] at (12,15) {$V_{x}$};
\draw [ color={rgb,255:red,0; green,133; blue,2}, , line width=1pt](13,13.75) to[short, -o] (12.25,14.5) ;
\draw [ color={rgb,255:red,0; green,133; blue,2}, , line width=1pt](18,13.75) to[short, -o] (18.75,14.5) ;
\node [font=\Large, color={rgb,255:red,0; green,133; blue,2}] at (19.25,15) {$V_{y}$};
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
\tikzstyle{every node}=[font=\large]
\draw [ line width=0.8pt](6,9.25) to[R,l={ \large $R_{1}=6$}] (8,9.25);
\draw [ line width=0.8pt](8,9.25) to[short, -o] (9,9.25) ;
\draw [ line width=0.8pt](6,9.25) to[american voltage source] (4,9.25);
\draw [ line width=0.8pt](8,5.25) to[short, -o] (9,5.25) ;
\draw [ line width=0.8pt](6,5.25) to[R,l={ \large $R_{3}=8\Omega$}] (8,5.25);
\draw [ line width=0.8pt](6,5.25) to[short] (4,5.25);
\draw [line width=0.8pt](4,5.25) to (4,5) node[sground]{};
\draw [line width=0.8pt](4,9.25) to (4,8.75) node[sground]{};
\draw [ line width=0.8pt](8,7.25) to[short, -o] (9,7.25) ;
\draw [ line width=0.8pt](6,7.25) to[R,l={ \large $R_{2}=2\Omega$}] (8,7.25);
\draw [ line width=0.8pt](5,7.25) to[short, -o] (4,7.25) ;
\draw [ line width=0.8pt](5,7.25) to[short] (6,7.25);
\draw [ line width=0.8pt](8,3.25) to[short, -o] (9,3.25) ;
\draw [ line width=0.8pt](6,3.25) to[american controlled current source] (8,3.25);
\draw [ line width=0.8pt](6,3.25) to[short] (5,3.25);
\draw [ line width=0.8pt](5,3.25) to[short, -o] (4,3.25) ;
\node [font=\large] at (9,8.75) {$V_{1}$};
\node [font=\large] at (5,10) {$V_{s}=50V$};
\node [font=\large] at (9,6.75) {$V_{1}$};
\node [font=\large] at (4,6.75) {$V_{2}$};
\node [font=\large] at (9,4.75) {$V_{1}$};
\node [font=\large] at (9,2.75) {$V_{1}$};
\node [font=\large] at (4,2.75) {$V_{2}$};
\node [font=\large] at (3.25,4.5) {$0V$};
\node [font=\large] at (3.25,8.25) {$0V$};
\node [font=\large] at (7,4) {$I_{FD}=3\cdot i_{a}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (8.5,9.75) {$i_{1}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (8.5,7.75) {$i_{2}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (8.5,5.75) {$i_{3}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (8.5,3.75) {$i_{4}$};
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (8.75,9.25) -- (8,9.25);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (8.75,7.25) -- (8,7.25);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (8.75,5.25) -- (8,5.25);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (8.75,3.25) -- (8,3.25);
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (6.25,9) {-};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (7.75,9) {+};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (6.25,7) {-};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (6.25,5) {-};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (7.75,7) {+};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (7.75,5) {+};
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
\draw [ line width=0.8pt](15,5.25) to[short, -o] (16,5.25) ;
\draw [ line width=0.8pt](13,5.25) to[R,l={ \large $R_{4}=4\Omega$}] (15,5.25);
\draw [ line width=0.8pt](13,5.25) to[short] (11,5.25);
\draw [line width=0.8pt](11,5.25) to (11,5) node[sground]{};
\draw [ line width=0.8pt](15,9.25) to[short, -o] (16,9.25) ;
\draw [ line width=0.8pt](13,9.25) to[R,l={ \large $R_{2}=2\Omega$}] (15,9.25);
\draw [ line width=0.8pt](12,9.25) to[short, -o] (11,9.25) ;
\draw [ line width=0.8pt](12,9.25) to[short] (13,9.25);
\draw [ line width=0.8pt](15,7.25) to[short, -o] (16,7.25) ;
\draw [ line width=0.8pt](13,7.25) to[short] (12,7.25);
\draw [ line width=0.8pt](13,7.25) to[american current source,l={ \large $I_{s}=5A$}] (15,7.25);
\draw [ line width=0.8pt](15,3.25) to[short, -o] (16,3.25) ;
\draw [ line width=0.8pt](15,3.25) to[american controlled current source] (13,3.25);
\draw [ line width=0.8pt](13,3.25) to[short] (12,3.25);
\draw [ line width=0.8pt](12,3.25) to[short, -o] (11,3.25) ;
\node [font=\large] at (10.25,4.5) {$0V$};
\draw [line width=0.8pt](11,7.25) to (11,7) node[sground]{};
\draw [ line width=0.8pt](12,7.25) to[short] (11,7.25);
\node [font=\large] at (10.25,6.5) {$0V$};
\node [font=\large] at (16,8.75) {$V_{2}$};
\node [font=\large] at (16,6.75) {$V_{2}$};
\node [font=\large] at (16,4.75) {$V_{2}$};
\node [font=\large] at (16,2.75) {$V_{2}$};
\node [font=\Large] at (11,8.75) {$V_{1}$};
\node [font=\large] at (11,2.75) {$V_{1}$};
\node [font=\large] at (14,4) {$I_{FD}=3\cdot i_{a}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (15.5,9.75) {$i_{5}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (15.5,7.75) {$i_{6}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (15.5,5.75) {$i_{7}$};
\node [font=\large, color={rgb,255:red,0; green,0; blue,255}] at (15.5,3.75) {$i_{8}$};
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (15.75,3.25) -- (15,3.25);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (15.75,7.25) -- (15,7.25);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (15.75,9.25) -- (15,9.25);
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (13.25,9) {-};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (13.25,5) {-};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (14.75,9) {+};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (14.75,5) {+};
\draw [ line width=0.8pt](20.5,9.25) to[R,l={ \large $R_{1}=6$}] (22.5,9.25);
\draw [ line width=0.8pt](22.5,9.25) to[short, -o] (23,9.25) ;
\draw [ line width=0.8pt](20.5,9.25) to[american voltage source] (18.5,9.25);
\draw [line width=0.8pt](18,9.25) to (18,8.75) node[sground]{};
\node [font=\large] at (23,8.75) {$V_{1}$};
\node [font=\large] at (19.5,10) {$V_{s}=50V$};
\node [font=\large] at (17.25,8.25) {$0V$};
\node [font=\large, color={rgb,255:red,255; green,0; blue,0}] at (18.25,9.75) {$i_{a}$};
\draw [ color={rgb,255:red,255; green,0; blue,0}, line width=1pt, ->, >=Stealth] (18,9.25) -- (18.75,9.25);
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (20.75,9) {+};
\node [font=\LARGE, color={rgb,255:red,20; green,150; blue,70}] at (22.25,9) {-};
\draw [ line width=0.8pt](18,9.25) to[short] (18.5,9.25);
\draw [ color={rgb,255:red,0; green,0; blue,255}, line width=1pt, ->, >=Stealth] (15.75,5.25) -- (15,5.25);
\end{circuitikz}
}%
\label{fig:my_label}
\end{figure}
`;
