import js
import numpy as np
#import matplotlib.pyplot as plt

import sympy as sp
import cmath

import plotly.graph_objects as go

import json

import warnings
warnings.filterwarnings("ignore")

from pyscript import display


js.document.getElementById("pyscript-ready").setAttribute("ready", "true")


def exec_func(e):
      # Definir variáveis 
      s, t = sp.symbols('s t')

      r_input = float(js.document.getElementById("r_input").value)
      x_axis = float(js.document.getElementById("x_axis").value)

      x_axis = x_axis*1e-3;

      R = 2**r_input


      # Dados do circuito
      # R = 3125  # ohms
      L = 50e-3  # Henry
      C = 2e-7  # Farad
      VC0 = 12  # V (Tensão inicial do capacitor)
      IL0 = 30e-3  # A (Corrente inicial do indutor)

      # Parâmetros do sistema
      alpha = 1 / (2 * R * C)
      omega_0 = 1 / np.sqrt(L * C)

      print(alpha)
      print(omega_0)

      P1 = -alpha + cmath.sqrt(alpha**2 - omega_0**2)
      P2 = -alpha - cmath.sqrt(alpha**2 - omega_0**2)

      print(P1)
      print(P2)

      # Função V(s) no domínio de Laplace
      Vc = (VC0 * s - IL0 / C) / ((s - P1) * (s - P2))
      print(Vc)

      Vc_K1 = (VC0 * s - IL0 / C) / ((s - P2))
      K1 = Vc_K1.subs(s, P1)
      print(K1)

      Vc_K2 = (VC0 * s - IL0 / C) / ((s - P1))
      K2 = Vc_K2.subs(s, P2)
      print(K2)

      Vc_inv = K1 * sp.exp(P1 * t) + K2 * sp.exp(P2 * t)
      print(Vc_inv)

      # Conversão para função numérica
      t_vals = np.linspace(0, x_axis, 1000)  # Tempo de 0 a 7ms
      v_func = sp.lambdify(t, Vc_inv, 'numpy')
      Vt_vals = v_func(t_vals)

    #   # Plotagem da resposta no tempo
    #   fig, ax = plt.subplots(figsize=(8, 6))  # Tamanho da figura em polegadas (largura, altura)
    #   ax.plot(t_vals * 1e3, Vt_vals, label="v(t)", color='b')
    #   ax.set_xlabel("Tempo (ms)")
    #   ax.set_ylabel("Tensão (V)")
    #   ax.set_title("Transformada Inversa de Laplace de V(s)")
    #   ax.legend()
    #   ax.grid()

    #   display(fig, target="mpl", append=False)

    #   equation = "\[P(E)   = {n \choose k} p^k (10-p)^{ n-k} \]"
    #   js.document.getElementById("divEquation").innerHTML = equation
    #   js.MathJax.Hub.Typeset(js.document.getElementById("divEquation"))



def exec_func2(e):
      
      # Criando uma grade no plano complexo
      x = np.linspace(-6, 6, 1000)
      y = np.linspace(-6, 6, 1000)
      X, Y = np.meshgrid(x, y)

      # Parte real da função f(z) = sqrt(x^2 - y + 2)
      Z = np.sqrt(X**2 - Y + 2)

      # Aplicando cortes na superfície para valores de Z fora do intervalo [1, 3]
      Z[(Z > 3) | (Z < 1)] = np.nan  # Define valores fora do intervalo como NaN

      # Aplicando transformação para reduzir X e Y à medida que Z aumenta
      k = 0.2  # Ajuste este valor para controlar a taxa de redução
      X_transformed = X * np.exp(-k * Z)
      Y_transformed = Y * np.exp(-k * Z)

      # Criando a superfície 3D
      surface = go.Surface(
            x=X_transformed, 
            y=Y_transformed, 
            z=Z - 1,  # Ajuste para manter a mesma escala do Matplotlib
            surfacecolor=Y,  # Colorindo com base em Y
            colorscale="rainbow_r",
            showscale=True,
            opacity=0.5
      )

      # Criando o plano X-Y em Z = 0
      x_plane = np.linspace(-3, 3, 100)
      y_plane = np.linspace(-3, 5, 100)
      X_plane, Y_plane = np.meshgrid(x_plane, y_plane)
      Z_plane = np.zeros_like(X_plane)

      plane_xy = go.Surface(
            x=X_plane, 
            y=Y_plane, 
            z=Z_plane, 
            colorscale=[[0, 'gray'], [1, 'gray']], 
            opacity=0.2,
            showscale=False
      )

      # Criando o plano X-Z em Y = -1
      x_plane2 = np.linspace(-3, 3, 100)
      z_plane2 = np.linspace(0, 3, 100)
      X_plane2, Z_plane2 = np.meshgrid(x_plane2, z_plane2)
      Y_plane2 = np.full_like(X_plane2, -1)

      plane_xz = go.Surface(
            x=X_plane2, 
            y=Y_plane2, 
            z=Z_plane2, 
            colorscale=[[0, 'gray'], [1, 'gray']], 
            opacity=0.2,
            showscale=False
      )

      # Destacando a raiz (0, -1, 1)
      root_point = go.Scatter3d(
            x=[0], 
            y=[-1], 
            z=[1], 
            mode='markers', 
            marker=dict(size=6, color='red'),
            name="Raiz: i"
      )

      # Criando a figura
      fig = go.Figure(data=[surface, plane_xy, plane_xz, root_point])

      # Configurando os eixos
      fig.update_layout(
            title="Superfície 3D com Plano X-Z Cortando a Superfície",
            scene=dict(
            xaxis_title="(x)",
            yaxis_title="(y)",
            zaxis_title="(z)",
            xaxis=dict(showgrid=False, showbackground=False),
            yaxis=dict(showgrid=False, showbackground=False),
            zaxis=dict(showgrid=False, showbackground=False)
            ),
            width=800,
            height=800
      )

      # Obtendo valores de rotação do usuário (se necessário)
      elev_I = float(js.document.getElementById("elev_I").value)
      azim_I = float(js.document.getElementById("azim_I").value)

      # Aplicando rotação da visualização
      fig.update_layout(scene_camera=dict(eye=dict(x=azim_I, y=elev_I, z=1)))

      # Exibir o gráfico no PyScript
      display(fig, target="mpl2", append=False)




      # # Criando uma grade no plano complexo
      # x = np.linspace(-6, 6, 1000)
      # y = np.linspace(-6, 6, 1000)
      # X, Y = np.meshgrid(x, y)

      # # Parte real da função f(z) = x^2 - y^2 + 1
      # Z = np.sqrt(X**2 - Y + 2)  # Parte real

      # # Cortando a superfície para Z > 3 e Z < 1
      # Z[Z > 3] = np.nan  # Define valores de Z > 3 como NaN
      # Z[Z < 1] = np.nan  # Define valores de Z < 1 como NaN

      # # Aplicando uma transformação para reduzir o intervalo de X e Y à medida que Z aumenta
      # # Fator de redução: exp(-k * Z), onde k controla a taxa de redução
      # k = 0.2  # Ajuste este valor para controlar a taxa de redução
      # X_transformed = X * np.exp(-k * Z)
      # Y_transformed = Y * np.exp(-k * Z)

      # # Criando a figura 3D
      # fig = plt.figure(figsize=(10, 10))
      # ax = fig.add_subplot(projection='3d')


      # # Plotando o plano X-Y em Z = 0
      # x_plane = np.linspace(-3, 3, 100)
      # y_plane = np.linspace(-3, 5, 100)
      # X_plane, Y_plane = np.meshgrid(x_plane, y_plane)
      # Z_plane = np.zeros_like(X_plane)  # Z = 0
      # ax.plot_surface(X_plane, Y_plane, Z_plane, color='gray', alpha=0.2, edgecolor='none')

      # # Plotando o plano X-Z em Y = -1 (por último para aparecer na frente)
      # x_plane2 = np.linspace(-3, 3, 100)
      # z_plane2 = np.linspace(0, 3, 100)
      # X_plane2, Z_plane2 = np.meshgrid(x_plane2, z_plane2)
      # Y_plane2 = np.full_like(X_plane2, -1)  # Y = -1
      # ax.plot_surface(X_plane2, Y_plane2, Z_plane2, color='gray', alpha=0.2, edgecolor='none')

      # # Destacando as raízes (0, ±1) no gráfico
      # ax.scatter(0, -1, 1, color='red', s=100, label="Raiz: $i$")

      # # Plotando a superfície para a parte real de f(z) com mapa de cores baseado em Y
      # surf = ax.plot_surface(X_transformed, Y_transformed, Z-1, 
      #                   facecolors=plt.cm.rainbow_r((Y - Y.min()) / (Y.max() - Y.min())), 
      #                   edgecolor='none', alpha=0.5)


      # # Rótulos e título
      # ax.set_xlabel("(x)")
      # ax.set_ylabel("(y)")
      # ax.set_zlabel("(z)")
      # ax.set_title("Superfície 3D com Plano X-Z Cortando a Superfície")

      # # Removendo as grades (grids)
      # ax.grid(False)  # Desativa as grades nos eixos X, Y e Z

      # # Removendo o preenchimento dos planos X, Y e Z
      # ax.xaxis.pane.fill = False
      # ax.yaxis.pane.fill = False
      # ax.zaxis.pane.fill = False

      # # Adicionando legenda
      # ax.legend()

      # elev_I = float(js.document.getElementById("elev_I").value)
      # azim_I = float(js.document.getElementById("azim_I").value)

      # ax.view_init(elev=elev_I, azim=azim_I)  # Rotaciona a visualização



      # # Mostrando o gráfico
      # display(fig, target="mpl2", append=False)

def exec_func3(e):

    # Criando uma grade no plano X-Y
    x = np.linspace(-4, 4, 500)
    y = np.linspace(-4, 4, 500)
    X, Y = np.meshgrid(x, y)

    # Calculando Z com a função dada
    Z = np.sqrt(X**2 - Y + 1)

    # Eliminando valores complexos ou indefinidos
    Z = np.where(np.isreal(Z), Z, np.nan)

    # Aplicando fator de redução para X e Y conforme Z sobe
    k = 0.2  # Controla a taxa de redução
    X_transformed = X * np.exp(-k * Z)
    Y_transformed = Y * np.exp(-k * Z)

    # Criando o gráfico de superfície com cores variando ao longo do eixo Y
    surface = go.Surface(
        x=X_transformed, 
        y=Y_transformed, 
        z=Z, 
        surfacecolor=Y,  # Cores baseadas no eixo Y
        colorscale=[[0, "red"], [1, "blue"]],  # De vermelho até azul
        showscale=True
    )

    # Criando o plano X-Y com Z = 0
    plane_xy = go.Surface(
        x=X, 
        y=Y, 
        z=np.zeros_like(X),  # Z = 0
        colorscale=[[0, 'gray'], [1, 'gray']],  # Plano cinza
        opacity=0.5,
        showscale=False
    )

    # Criando o plano X-Z em Y = -1
    x_plane = np.linspace(-3, 3, 100)
    z_plane = np.linspace(0, np.nanmax(Z), 100)  # Ajustando a altura do plano conforme a superfície
    X_plane, Z_plane = np.meshgrid(x_plane, z_plane)
    Y_plane = np.full_like(X_plane, 0)  # Y = -1 fixo

    plane_xz = go.Surface(
        x=X_plane, 
        y=Y_plane, 
        z=Z_plane, 
        colorscale=[[0, 'gray'], [1, 'gray']], 
        opacity=0.5,
        showscale=False
    )

    # Adicionando um ponto destacado em (0,0,1)
    point = go.Scatter3d(
        x=[0], 
        y=[0], 
        z=[1], 
        mode="markers+text",  
        marker=dict(size=10, color="yellow", symbol="circle"),  
        text=["Ponto (0,0,1)"],  
        textposition="bottom center"
    )

    # Criando a figura e adicionando os traços
    fig = go.Figure(data=[surface, plane_xy, plane_xz, point])

    # Configurando os eixos e layout
    fig.update_layout(
        title="Superfície Z = sqrt(X² - Y + 1) com Transformação Redutiva",
        scene=dict(
            xaxis_title="X",
            yaxis_title="Y",
            zaxis_title="Z"
        ),
        width=800,
        height=800
    )

    # Atualizando a visibilidade dos eixos
    fig.update_layout(
        scene = dict(
            xaxis = dict(visible=False),
            yaxis = dict(visible=False),
            zaxis = dict(visible=False)
        )
    )

    # Exibir no PyScript
    display(fig, target="mpl3", append=False)



def ex1(e):
    
    #(Vx - V1)/R1 + Vx/R3 + (Vx - Vy)/R2 - IFD_gain*ia = 0
    #(Vy - Vx)/R2 + Vy/R4 - I1 + IFD_gain*ia = 0
    #(V1 - Vx)/R1 = ia

    #Vx Vy ia
    from js import ex1
    
    sistema = np.array([
            [(1/ex1.R1 + 1/ex1.R3 + 1/ex1.R2),(-1/ex1.R2),(-ex1.IFD_gain)],
            [(-1/ex1.R2),(1/ex1.R2 + 1/ex1.R4),(ex1.IFD_gain)],
            [(-1/ex1.R1),(0),(-1)]
    ])

    termosIndependentes = np.array([
            (ex1.V1/ex1.R1), (ex1.I1), (-ex1.V1/ex1.R1)
    ])

    variaveis = np.linalg.solve(sistema, termosIndependentes)
 
    equation = "\[ V_{x}=" +repr(round(variaveis[0], 2))+ "V \quad V_{y}=" +repr(round(variaveis[1], 2))+ "V \quad i_{a}=" +repr(round(variaveis[2], 2))+ "\]"
    
    js.document.getElementById("eq2").innerHTML = equation
    js.MathJax.Hub.Typeset(js.document.getElementById("eq1"))


    equation = r"""
    \begin{cases}
            i_{1} + i_{2} + i_{3} + i_{4} = 0 \\
            i_{5} + i_{6} + i_{7} + i_{8} = 0 
    \end{cases}
    """   

    valores = {
        "R": "20",
        "V": "30",
        "I": "40"
    }

    # Convertendo para string JSON
    json_str = json.dumps(valores)

    # Passando a string JSON para o atributo data-json
    js.document.getElementById("HH").setAttribute("data-json", json_str)

    js.document.getElementById("eq1").innerHTML = equation
    js.MathJax.Hub.Typeset(js.document.getElementById("eq1"))


ex1("")