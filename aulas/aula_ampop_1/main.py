import js
import numpy as np # type: ignore
#import matplotlib.pyplot as plt

import sympy as sp # type: ignore
import cmath

import plotly.graph_objects as go # type: ignore

import json

import warnings
warnings.filterwarnings("ignore")

from pyscript import display # type: ignore

js.document.getElementById("pyscript-ready").setAttribute("ready", "true")


 
def ampop(e):     
    
    # Definir os parâmetros
    MaisVcc = 10
    MenosVcc = -15

    VN_cos_amplitude = 5
    VN_cos_freq = 10
    VN_cos_phase = 0
    VP_DC = 2
    A = float(js.document.getElementById("A_Gain").value)

    #A = 10  # Fator de amplificação

    # Calcular os limites de saturação
    MaisVcc_A = MaisVcc / A
    MenosVcc_A = MenosVcc / A

    # Gerar dados para o gráfico com 1000 pontos, limitando x até 2
    x = np.linspace(0, 1.2, 1000)  # Limitar o eixo x até 2
    y_cos = VN_cos_amplitude * np.cos(VN_cos_freq * x + VN_cos_phase)  # Senoide

    # Calcular a terceira onda Vo = A * (VP - VN) sem saturação
    Vo_without_saturation = A * (VP_DC - y_cos)

    # Aplicar saturação para Vo (limites de MaisVcc e MenosVcc)
    Vo = np.clip(Vo_without_saturation, MenosVcc, MaisVcc)

    # Criar figura
    fig = go.Figure(data=go.Scatter(x=x, y=y_cos, mode='lines', name='VN'))

    # Adicionar a linha de VP_DC
    fig.add_trace(go.Scatter(
        x=[x[0], x[-1]],  # Posições no eixo x
        y=[VP_DC, VP_DC],  # Posições no eixo y (valor constante VP_DC)
        mode='lines',  # Tipo de gráfico (linha)
        name='VP',  # Nome da linha
        line=dict(color='red')  # Linha contínua vermelha
    ))

    # Adicionar a terceira onda Vo (com saturação)
    fig.add_trace(go.Scatter(
        x=x, 
        y=Vo, 
        mode='lines', 
        name='Vo', 
        line=dict(color='green')  # Linha contínua verde
    ))

    # Adicionar linha vertical interativa para Vo sem saturação
    fig.update_layout(
        xaxis_title='tempo(s)',  # Troca de 'x' por 'tempo(s)'
        yaxis_title='Tensão(V)',  # Troca de 'Valores' por 'Tensão(V)'
        xaxis=dict(range=[0, 1.2]),  # Limitar o eixo x até 2
        hovermode='closest',  # Ativar hover para o ponto mais próximo
        showlegend=True,  # Exibe a legenda
    )

    # Função para atualizar a linha vertical ao mover o cursor
    fig.update_layout(
        shapes=[dict(
            type='line',
            x0=0,  # Começo da linha no eixo x
            x1=0,  # Fim da linha no eixo x (a linha será vertical)
            y0=MenosVcc,  # Começo da linha no eixo y
            y1=MaisVcc,  # Fim da linha no eixo y
            line=dict(color='black', dash='dot')  # Linha preta pontilhada
        )]
    )

    # Adicionar valores de Vo sem saturação no customdata
    fig.update_traces(
        customdata=np.vstack([Vo_without_saturation, y_cos]).T,  # Empilha Vo sem saturação e senoide para o customdata
        hovertemplate=(
            '<b style="font-size: 24px;">Tempo: %{x:.2f}s</b><br>' +
            '<span style="font-size: 24px;">A = ' + str(A) + '</span><br>' + 
            '<span style="font-size: 24px;">VN = %{customdata[1]:.2f}V</span><br>' +  # Agora, o valor de VN é a senoide na posição x
            '<span style="font-size: 24px;">VP: ' + str(VP_DC) + 'V</span><br>' +  # Valor fixo de VP_DC
            '<span style="font-size: 24px;">Vo = A(VP-VN) (sem saturação): %{customdata[0]:.2f}V</span><br>' +  # Valor Vo (sem saturação)
            '<span style="font-size: 24px;">Vo = A(VP-VN) (com saturação): %{y:.2f}V</span><br>'  # Valor Vo (com saturação)
        )
    )

    # Ajustar o layout do gráfico para ter mais espaço
    fig.update_layout(
        hoverlabel=dict(
                font_size=24,
                bgcolor='rgba(255, 255, 255, 0.5)'  # Fundo branco com 50% de transparência
            ),  # Ajustar o tamanho da fonte do hover        
        font=dict(size=24),
        margin=dict(l=20, r=20, t=50, b=20)  # Margens para evitar corte
    )

    display(fig, target="goComparador", append=False)



# Convertido para JS
def ex_AmpOp(e):
    
    prefixo = "ex_AmpOp"

    # VA = float(js.document.getElementById("ex_AmpOp-VA").value)
    # VB = float(js.document.getElementById("ex_AmpOp-VB").value)
    
    # MaisVcc = float(js.document.getElementById("ex_AmpOp-MaisVcc").value)
    # MenosVcc = float(js.document.getElementById("ex_AmpOp-MenosVcc").value)
    
    VA = float(js.document.getElementById(prefixo+"-"+"VA").value)
    VB = float(js.document.getElementById(prefixo+"-"+"VB").value)
    
    MaisVcc = float(js.document.getElementById(prefixo+"-"+"MaisVCC").value)
    MenosVcc = float(js.document.getElementById(prefixo+"-"+"MenosVCC").value)


    RS = 25*1e3
    RF = 100*1e3

    Vo = VB - ((VA-VB)/(RS))*RF

    Vo_str = repr(round(Vo, 2))

    equations = {
        "eq-1": "\(V_{n}=V_{p}=AAA\)",
        "eq-2": "\(i_{n}=i_{p}=0\)",
        "eq-3": "\(V_{p}=V_{B}\)",
        "eq-4": "\(V_{n}=V_{p}=V_{B}\)",
        "eq-5": "\(i_{S}=\\dfrac{V_{A}-V_{n}}{R_{s}}=\\dfrac{V_{A}-V_{B}}{R_{S}}\)",
        "eq-6": "\(i_{F}=\\dfrac{V_{n}-V_{o}}{R_{F}}=\\dfrac{V_{B}-V_{o}}{R_{F}}\)",
        "eq-7": "\(i_{S}=i_{F}+i_{n}\)",
        "eq-8": "\(i_{S}=i_{F}+0\)",
        "eq-9": "\(\\dfrac{V_{A}-V_{B}}{R_{S}}=\\dfrac{V_{B}-V_{o}}{R_{F}}\)",
        "eq-10": "\(R_{F} \\cdot \\left(\\dfrac{V_{A}-V_{B}}{R_{S}}\\right)-V_{B}=-V_{o}\)",
        "eq-11": "\(V_{o}=V_{B}-R_{F} \\cdot \\left(\\dfrac{V_{A}-V_{B}}{R_{S}}\\right)\)",
        "eq-12": "\(V_{o}="+str(VB)+"-100 \\cdot 10^{3} \\cdot \\left(\\dfrac{"+str(VA)+"-"+str(VB)+"}{25 \\cdot 10^{3}}\\right)="+str(Vo_str)+"V\)",
        "eq-13": "\(\\begin{cases} as=\\dfrac{1}{3} \\\\[0.1pt]  \\\\ as=\\dfrac{1}{3} \\end{cases}\)",

    }


    for key, equation in equations.items():
        element_id = f"{prefixo}-{key}"
        element = js.document.getElementById(element_id)
        if element:
            element.innerHTML = equation
            js.MathJax.Hub.Typeset(js.document.getElementById(element_id))



    # Dados como dicionários Python
    data_parameters = {'VA': repr(round(VA,2)), 'VB': repr(round(VB,2)), 'MaisVcc': repr(round(MaisVcc,2)), 'MenosVcc': repr(round(MenosVcc,2))}
    data_config = {
        'components': ['V_{A}', 'V_{B}', '+V_{cc}', '-V_{cc}'],
        'units': ['V', 'V', 'V', 'V']
    }

    # Converte os dicionários para objetos JS
    data_parameters_json = json.dumps(data_parameters)
    data_config_json = json.dumps(data_config)

    # Chama a função init_generic definida em JavaScript
    js.init_generic(prefixo, data_parameters_json, data_config_json)


ampop("")
ex_AmpOp("")
