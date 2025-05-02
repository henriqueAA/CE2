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

def aula1_exemplo_1(e):

    prefixo = "aula1_exemplo_1"

    # Gerando valores de tensão
    v_values = np.linspace(-100, 100, 500)  # De -10V a +10V

    # Parâmetros do circuito
    R1 = float(js.document.getElementById("RValue").value)
    VCalculado = R1*2
    PCalculado = VCalculado*2
    WCalculado = PCalculado*3

    equations = {
        "eq-1": "\(R_{1}="+str(R1)+"\\Omega\)",    
        "eq-2": "\(V=R \\cdot I="+str(R1)+" \\cdot 2="+repr(round(VCalculado, 2))+" V\)",
        "eq-3": "\(P=V \\cdot I="+repr(round(VCalculado, 2))+" \\cdot 2=+"+repr(round(PCalculado, 2))+" W\)",
        "eq-4": "\(\\normalsize\\omega = \\LARGE\\int_{t_{\\normalsize 0}}^{\\normalsize t_{f}}\\normalsize Pdt=\\LARGE\\int_{\\normalsize 0}^{\\normalsize 3}\\normalsize "+repr(round(PCalculado, 2))+" dt = "+repr(round(PCalculado, 2))+" \\cdot t= "+repr(round(WCalculado, 2))+"J\)",
        "eq-5": "\(P=\\dfrac{V^2}{R}=\\dfrac{"+repr(round(VCalculado, 2))+"^{2}}{"+str(R1)+"}=+"+repr(round(PCalculado, 2))+"W\)",
        "eq-6": "\(P=I^{2} \\cdot R=2^{2} \\cdot "+str(R1)+"=+"+repr(round(PCalculado, 2))+"W\)",
    }

    for key, equation in equations.items():
        element_id = f"{prefixo}-{key}"
        element = js.document.getElementById(element_id)
        if element:
            element.innerHTML = equation
            js.MathJax.Hub.Typeset(js.document.getElementById(element_id))

    # Calculando corrente (Lei de Ohm: I = V/R)
	# Calculando corrente (Lei de Ohm: I = V/R)
    i_values = v_values / R1

    # Criando o gráfico
    fig = go.Figure()

    # Adicionando a curva V x I
    fig.add_trace(go.Scatter(
        x=v_values,
        y=i_values,
        mode='lines',
        name=f'R = {R1} Ω',
        line=dict(color='royalblue', width=3),
        hoverlabel=dict(
            font_size=16,
            font_family="Arial"
        )
    ))

    # Adicionando eixo x (linha horizontal em y=0)
    fig.add_trace(go.Scatter(
        x=[-20, 20],
        y=[0, 0],
        mode='lines',
        line=dict(color='black', width=1.5),
        showlegend=False,
        hoverinfo='none'
    ))

    # Adicionando eixo y (linha vertical em x=0)
    fig.add_trace(go.Scatter(
        x=[0, 0],
        y=[-2.5, 2.5],
        mode='lines',
        line=dict(color='black', width=1.5),
        showlegend=False,
        hoverinfo='none'
    ))

    # Personalizando o layout com fontes aumentadas e escala fixa
    fig.update_layout(
        title=dict(
            text=f'Equação Característica de um Resistor - Lei de Ohm<br>V = R * I',
            font=dict(size=24, family='Arial'),
            x=0.5,
            xanchor='center'
        ),        
        xaxis_title='Corrente (I)',
        yaxis_title='Tensão (V)',
        plot_bgcolor='white',
        font=dict(size=16, family='Arial'),
        xaxis=dict(
            gridcolor='lightgray',
            title_font=dict(size=18),
            tickfont=dict(size=14),
            range=[-20, 20],
            zeroline=False
        ),
        yaxis=dict(
            gridcolor='lightgray',
            title_font=dict(size=18),
            tickfont=dict(size=14),
            range=[-2.5, 2.5],
            zeroline=False
        ),
        showlegend=False,
        hoverlabel=dict(
            bgcolor="white",
            font_size=36,
            font_family="Arial"
        ),
        # Adicionando as setas nos eixos
        annotations=[
            # Seta no eixo x (direita)
            dict(
                x=20,
                y=0,
                xref="x",
                yref="y",
                text="",
                showarrow=True,
                axref="x",
                ayref='y',
                ax=18,  # Comprimento da seta (ajuste conforme necessário)
                ay=0,
                arrowhead=3,
                arrowwidth=1.5,
                arrowcolor='black'
            ),
            # Seta no eixo y (topo)
            dict(
                x=0,
                y=2.5,
                xref="x",
                yref="y",
                text="",
                showarrow=True,
                axref="x",
                ayref='y',
                ax=0,
                ay=2.3,  # Comprimento da seta (ajuste conforme necessário)
                arrowhead=3,
                arrowwidth=1.5,
                arrowcolor='black'
            )
        ]
    )

    display(fig, target="exemplo_1", append=False)




def aula1_divisores(e):

    prefixo = "aula1_divisores"

    # Parâmetros do circuito - Tessçao
    R2V = 1.1**(float(js.document.getElementById("R2ValueV").value))

    if(float(js.document.getElementById("R2ValueV").value) == 72):
        R2V = 1000

    if(float(js.document.getElementById("R2ValueV").value) == 0):
        R2V = 0

    if(float(js.document.getElementById("R2ValueV").value) == 150):
        R2V = 10000000


    # Parâmetros do circuito - Tessçao
    R2I = 1.1**(float(js.document.getElementById("R2ValueI").value))

    if(float(js.document.getElementById("R2ValueI").value) == 72):
        R2I = 1000

    if(float(js.document.getElementById("R2ValueI").value) == 0):
        R2I = 0

    if(float(js.document.getElementById("R2ValueI").value) == 150):
        R2I = 10000000



    VA = 100*((1000)/(1000+R2V))
    VB = 100*((R2V)/(1000+R2V))

    IA = 20*((R2I)/(1000+R2I))
    IB = 20*((1000)/(1000+R2I))

    equations = {
        "eq-1": "\(V_{1}=V_{s} \cdot \dfrac{R_{1}}{R_{1}+R_{2}} \\quad \\therefore \\quad V_{1}= 100 \\cdot \\dfrac{1K}{1K+" + repr(round(R2V/1000, 2)) + "K} = \\color{red}{\\boldsymbol{" + repr(round(VA, 2)) + "}~V} \)",
        "eq-2": "\(V_{2}=V_{s} \cdot \dfrac{R_{2}}{R_{1}+R_{2}} \\quad \\therefore \\quad V_{2}= 100 \\cdot \\dfrac{" + repr(round(R2V/1000, 2)) + "K}{1K+" + repr(round(R2V/1000, 2)) + "K} = \\color{red}{\\boldsymbol{" + repr(round(VB, 2)) + "}~V} \)",

        "eq-3": "\(I_{1}=I_{s} \cdot \dfrac{R_{2}}{R_{1}+R_{2}} \\quad \\therefore \\quad I_{1}= 20 \\cdot \\dfrac{" + repr(round(R2I/1000, 2)) + "K}{1K+" + repr(round(R2I/1000, 2)) + "K} = \\color{red}{\\boldsymbol{" + repr(round(IA, 2)) + "}~A} \)",
        "eq-4": "\(I_{2}=I_{s} \cdot \dfrac{R_{1}}{R_{1}+R_{2}} \\quad \\therefore \\quad I_{2}= 20 \\cdot \\dfrac{1K}{" + repr(round(R2I/1000, 2)) + "K+ 1K} = \\color{red}{\\boldsymbol{" + repr(round(IB, 2)) + "}~A} \)",

        "eq-5": "\(R_{2}="+repr(round(R2V/1000, 2))+" K\\Omega \)",
        "eq-6": "\(R_{2}="+repr(round(R2I/1000, 2))+" K\\Omega \)",
    }

    for key, equation in equations.items():
        element_id = f"{prefixo}-{key}"
        element = js.document.getElementById(element_id)
        if element:
            element.innerHTML = equation
            js.MathJax.Hub.Typeset(js.document.getElementById(element_id))


def aula1_LK(e):
    
    prefixo = "aula1_LK"

    
    #from js import aula1_LK    

    VS = float(js.document.getElementById("aula1_LK-VS").value)


    sistema = np.array([
            [(1/70 + 1/5 + 1/10),(-1/10)],
            [(-1/10),(1/10 + 1/25 + 1/8)]        
    ])

    termosIndependentes = np.array([
            (VS/5), (VS/25)
    ])

    variaveis = np.linalg.solve(sistema, termosIndependentes)

    V1 = variaveis[0]
    V2 = variaveis[1]
    IA = (VS-V2)/25
    
    IX = V1/70

    VR2 = 25*IA #etapa 1
    VR5 = VS-VR2 #etapa 2
    IR5 = VR5/8 #etapa 3
    IR3 = IR5-IA #etapa 4
    VR3 = IR3*10 #etapa 5
    VR4 = VR3+VR5 #etapa 6
    IX_resposta = VR4/70 #etapa 7

    equations = {
        "eq-1": "\(I_{x}="+repr(round(IX, 2))+"A\)",            
        "eq-2": "\(V_{R2}=25 \\cdot "+repr(round(IX,2))+" = "+repr(round(VR2,2))+"V\)",
        "eq-3": "\(V_{R5}="+repr(round(VS,2))+"-"+repr(round(VR2,2))+" = "+repr(round(VR5,2))+"V\)",
        "eq-4": "\(I_{R5}=\\dfrac{"+repr(round(VR5,2))+"}{8} = "+repr(round(IR5,2))+"A\)",
        "eq-5": "\(I_{R3}="+repr(round(IR5,2))+"-"+repr(round(IA,2))+" = "+repr(round(IR3,2))+"A\)",
        "eq-6": "\(V_{R3}="+repr(round(IR3,2))+" \\cdot 10="+repr(round(VR3,2))+"V\)",
        "eq-7": "\(V_{R4}="+repr(round(VR3,2))+"+"+repr(round(VR5,2))+" = "+repr(round(VR4,2))+"V\)",
        "eq-8": "\(I_{x}=\\dfrac{"+repr(round(VR4,2))+"}{70}="+repr(round(IX_resposta,2))+"A\)",
    }

    for key, equation in equations.items():
        element_id = f"{prefixo}-{key}"
        element = js.document.getElementById(element_id)
        if element:
            element.innerHTML = equation
            js.MathJax.Hub.Typeset(js.document.getElementById(element_id))


    # Dados como dicionários Python
    data_parameters = {'VS': repr(round(VS,2)), 'IA': repr(round(IA,2)), 'VR2': repr(round(VR2,2)), 'VR3': repr(round(VR3,2)), 'VR4': repr(round(VR4,2)), 'VR5': repr(round(VR5,2)), 'IR3': repr(round(IR3,2)), 'IR5': repr(round(IR5,2))}
    data_config = {
        'components': ['V_{s}', 'I_{A}', 'V_{R2}', 'V_{R3}', 'V_{R4}', 'V_{R5}', 'I_{R3}', 'I_{R5}'],
        'units': ['V', 'A', 'V', 'V', 'V', 'V', 'A', 'A']
    }

    # Converte os dicionários para objetos JS
    data_parameters_json = json.dumps(data_parameters)
    data_config_json = json.dumps(data_config)

    # Chama a função init_generic definida em JavaScript
    js.init_generic('aula1_LK', data_parameters_json, data_config_json)


def ex_CF(e):
        
    prefixo = "ex_CF"

    Ia = float(js.document.getElementById("input_Ia_ex_CF").value)
    Vx = float(js.document.getElementById("input_Vx_ex_CF").value)

    Ia_initial = 3
    Vx_initial = 12

    Va1 = Ia*4
    Ix1 = Vx/3

    Ia2 = Va1/6

    Iax = Ix1 - Ia2

    Vo = Iax*((2*8)/(2+8))

    # print(Va1)
    # print(Ix1)
    # print(Ia2)
    # print(Iax)
    # print(Vo)

    equations = {
        "eq-1": "\(V_{o}="+repr(round(Vo,2))+" V\)",
        "eq-2": "\(V_{a1}="+repr(round(Ia,2))+" \\cdot 4 = "+repr(round(Va1,2))+" V\)",
        "eq-3": "\(I_{x1}=\\dfrac{"+repr(round(Vx,2))+"}{3} = "+repr(round(Ix1,2))+" A\)",
        "eq-4": "\(I_{ax}="+repr(round(Ix1,2))+"-"+repr(round(Ia2,2))+"  = "+repr(round(Iax,2))+" A\)",
        "eq-5": "\(V_{o}="+repr(round(Iax,2))+" \\cdot \\left(\\dfrac{2 \\cdot 8}{2+8}\\right)="+repr(round(Vo,2))+" V\)",
    }

    for key, equation in equations.items():
        element_id = f"{prefixo}-{key}"
        element = js.document.getElementById(element_id)
        if element:
            element.innerHTML = equation
            js.MathJax.Hub.Typeset(js.document.getElementById(element_id))


    # Dados como dicionários Python

    data_parameters = {'Ia': repr(round(Ia,2)), 'Vx': repr(round(Vx,2)), 'Va1': repr(round(Va1,2)), 'Ix1': repr(round(Ix1,2)), 'Ia2': repr(round(Ia2,2)), 'Iax': repr(round(Iax,2)), 'Vo': repr(round(Vo,2))}
    data_config = {
        'components': ['I_{a}', 'V_{x}', 'V_{a1}', 'I_{x1}', 'I_{a2}', 'I_{ax}', 'V_{o}'],
        'units': ['A', 'V', 'V', 'A', 'A', 'A', 'V']
    }

    # Converte os dicionários para objetos JS
    data_parameters_json = json.dumps(data_parameters)
    data_config_json = json.dumps(data_config)

    # Chama a função init_generic definida em JavaScript
    js.init_generic('ex_CF', data_parameters_json, data_config_json)




def Eq_Th(e):

    prefixo = "Eq_Th"

    Vs = float(js.document.getElementById("input_Vs_Eq_Th").value)
    Is = float(js.document.getElementById("input_Is_Eq_Th").value)

    Vs_initial = 12
    Is_initial = 8

    V1 = ((Vs/12)+Is)/((1/12)+(1/6))

    V2ohm = Is*2
    Vth = V1 + V2ohm

    V1_isc = ((Vs/12))/((1/12)+(1/6)+(1/2))

    i3_isc = V1_isc/2

    isc = Is + i3_isc

    Rth = Vth/isc

    Rth_metodo2 = ((12*6)/(12+6))+2


    equations = {
        "eq-1": "\(i_{1}+i_{2}+i_{3}=0\)",
        "eq-2": "\(\\dfrac{V_{1}-"+ repr(round(Vs, 2)) +"}{12}+\\dfrac{V_{1}}{6}-"+ repr(round(Is, 2)) +"=0\)",
        "eq-3": "\(V_{1}="+ repr(round(V1, 2)) +" V\)",
        "eq-4": "\(V_{a-b}=V_{Th}=V_{1}+V_{2\\Omega}\)",
        "eq-5": "\(V_{Th}="+ repr(round(V1, 2)) +"+"+ repr(round(V2ohm, 2)) +" = "+ repr(round(Vth, 2)) +" V\)",
        "eq-6": "\(i_{1}+i_{2}+i_{3}=0\)",
        "eq-7": "\(\\dfrac{V'_{1}-"+ repr(round(Vs, 2)) +"}{12}+\\dfrac{V'_{1}}{6}+\\dfrac{V'_{1}}{2}=0\)",
        "eq-8": "\(V'_{1}="+ repr(round(V1_isc, 2)) +" V\)",
        "eq-9": "\(i_{sc}=i_{3}+I_{s}\)",
        "eq-10": "\(i_{3}=\\dfrac{V'_{1}}{2}=\\dfrac{"+ repr(round(V1_isc, 2)) +"}{2}="+ repr(round(i3_isc, 2)) +" A\)",
        "eq-11": "\(i_{sc}="+ repr(round(i3_isc, 2)) +"+"+ repr(round(Is, 2)) +"="+ repr(round(isc, 2)) +" A\)",        
        "eq-12": "\(R_{Th}=\\dfrac{V_{Th}}{i_{sc}}\)",
        "eq-13": "\(R_{Th}=\\dfrac{V_{Th}}{i_{sc}}=\\dfrac{"+ repr(round(Vth, 2)) +"}{"+ repr(round(isc, 2)) +"}="+ repr(round(Rth, 2)) +" \\Omega\)",
        "eq-14": "\(R_{Th}=(12||6)+2\)",
        "eq-15": "\(R_{Th}=\\dfrac{12 \\cdot 6}{12+6}+2="+ repr(round(Rth_metodo2, 2)) +" \\Omega\)",
        "eq-16": "\(V_{Th} = "+ repr(round(Vth, 2)) +" V  \\quad R_{Th}= "+ repr(round(Rth, 2)) +" \\Omega\)",

    }    


    for key, equation in equations.items():
        element_id = f"{prefixo}-{key}"
        element = js.document.getElementById(element_id)
        if element:
            element.innerHTML = equation
            js.MathJax.Hub.Typeset(js.document.getElementById(element_id))



    data_parameters = {'Vs': repr(round(Vs,2)), 'Is': repr(round(Is,2))}
    data_config = {
        'components': ['V_{s}', 'I_{s}'],
        'units': ['V', 'A']
    }

    # Converte os dicionários para objetos JS
    data_parameters_json = json.dumps(data_parameters)
    data_config_json = json.dumps(data_config)

    # Chama a função init_generic definida em JavaScript
    js.init_generic('Eq_Th', data_parameters_json, data_config_json)


def Ex_Superposicao(e):

    prefixo = "Ex_Superposicao"

    V1 = float(js.document.getElementById(prefixo+"-"+"V1").value)
    V2 = float(js.document.getElementById(prefixo+"-"+"V2").value)
    I1 = float(js.document.getElementById(prefixo+"-"+"I1").value)

    # V1 = 24
    # V2 = 12
    # I1 = 3

    Req = ((4+8)*4)/((4+8)+4)

    i_L1 = V2/(Req+3)

    V_TN_1 = (-V1/12)/((1/3)+(1/4)+(1/12))
    i_L2 = V_TN_1/(3)

    sistema = np.array([
            [(-4),(7)],
            [(16),(-4)]
    ])

    termosIndependentes = np.array([
            (-3*I1), (-4*I1)
    ])

    variaveis = np.linalg.solve(sistema, termosIndependentes)

    # ia = variaveis[0]
    ib = variaveis[1]

    i_L3 = ib + I1

    i_final = i_L1 + i_L2 + i_L3


    equations = {
        "eq-1": "\(i="+ repr(round(i_final, 2)) +" A\)",
        "eq-2": "\(R_{eq}=(4+8)||4 = \\dfrac{12 \\cdot 4}{12+4}="+ repr(round(Req, 2)) +" \\Omega\)",
        "eq-3": "\(i'=\\dfrac{"+ repr(round(V2, 2)) +"}{"+ repr(round(Req, 2)) +"+3}="+ repr(round(i_L1, 2)) +"A\)",
        "eq-4": "\(\\dfrac{V_{1}}{3}+\\dfrac{V_{1}}{4}+\\dfrac{V_{1}+"+ repr(round(V1, 2)) +"}{12}=0\)",
        "eq-5": "\(V_{1} \\cdot \\left(\\dfrac{1}{3}+\\dfrac{1}{4}+\\dfrac{1}{12}\\right)=-\\dfrac{"+ repr(round(V1, 2)) +"}{12}\)",
        "eq-6": "\(V_{1}="+ repr(round(V_TN_1, 2)) +" V\)",
        "eq-7": "\(i''=\\dfrac{"+ repr(round(V_TN_1, 2)) +"}{3} = "+ repr(round(i_L2, 2)) +" A\)",
        "eq-8": "\(\\begin{cases} i_{c}=-"+ repr(round(I1, 2)) +" A \\\\[0.1pt]  \\\\ 4 \\cdot \\left(i_{b}-i_{a}\\right)+3 \\cdot \\left(i_{b}+"+ repr(round(I1, 2)) +"\\right)=0 \\\\[0.1pt]  \\\\ 4 \\cdot \\left(i_{a}-i_{b}\\right)+8 \\cdot i_{a}+4 \\cdot \\left(i_{a}+"+ repr(round(I1, 2)) +"\\right)=0 \\end{cases}\)",
        "eq-9": "\(i_{b}="+ repr(round(ib, 2)) +" A\)",
        "eq-10": "\(i'''=i_{b}-i_{c}="+ repr(round(ib, 2)) +"+"+ repr(round(I1, 2)) +"="+ repr(round(i_L3, 2)) +" A\)",
        "eq-11": "\(i = i'+i''+i'''="+ repr(round(i_L1, 2)) +"+"+ repr(round(i_L2, 2)) +"+"+ repr(round(i_L3, 2)) +" = "+ repr(round(i_final, 2)) +" A\)",
    }


    for key, equation in equations.items():
        element_id = f"{prefixo}-{key}"
        element = js.document.getElementById(element_id)
        if element:
            element.innerHTML = equation
            js.MathJax.Hub.Typeset(js.document.getElementById(element_id))



    data_parameters = {'V1': repr(round(V1,2)), 'V2': repr(round(V2,2)), 'I1': repr(round(I1,2))}
    data_config = {
        'components': ['V_{1}', 'V_{2}', 'I_{1}'],
        'units': ['V', 'V', 'A']
    }

    # Converte os dicionários para objetos JS
    data_parameters_json = json.dumps(data_parameters)
    data_config_json = json.dumps(data_config)

    # Chama a função init_generic definida em JavaScript
    js.init_generic("Ex_Superposicao", data_parameters_json, data_config_json)    


def ex1(e):
    
    prefixo = "ex1"


    VS = float(js.document.getElementById(prefixo + "-" + "VS").value)
    IS = float(js.document.getElementById(prefixo + "-" + "IS").value)
    IFD_gain = float(js.document.getElementById(prefixo + "-" + "IFD_gain").value)

    R1 = float(js.document.getElementById(prefixo + "-" + "R1").value)
    R2 = float(js.document.getElementById(prefixo + "-" + "R2").value)
    R3 = float(js.document.getElementById(prefixo + "-" + "R3").value)
    R4 = float(js.document.getElementById(prefixo + "-" + "R4").value)
    

    #(Vx - V1)/R1 + Vx/R3 + (Vx - Vy)/R2 - IFD_gain*ia = 0
    #(Vy - Vx)/R2 + Vy/R4 - I1 + IFD_gain*ia = 0
    #(V1 - Vx)/R1 = ia

    #Vx Vy ia


    const_V1_eq1 = 1/R1 + 1/R2 + 1/R3 + IFD_gain/R1
    const_V2_eq1 = -1/R2
    independente_eq1 = (IFD_gain*VS)/R1 + VS/R1
    
    const_V1_eq2 = -1/R2 - IFD_gain/R1
    const_V2_eq2 = 1/R2 + 1/R4
    independente_eq2 = -(IFD_gain*VS)/R1 + IS

    
    sistema = np.array([
            [(1/R1 + 1/R3 + 1/R2),(-1/R2),(-IFD_gain)],
            [(-1/R2),(1/R2 + 1/R4),(IFD_gain)],
            [(-1/R1),(0),(-1)]
    ])

    termosIndependentes = np.array([
            (VS/R1), (IS), (-VS/R1)
    ])

    variaveis = np.linalg.solve(sistema, termosIndependentes)

    V1 = variaveis[0]
    V2 = variaveis[1]
    iA = variaveis[2]
        

    equations = {

        "eq-1": "\(-V_{1}+"+str(R1)+"\cdot i_{1} + "+str(VS)+" = 0\)",
        "eq-2": "\(i_{1}=\\dfrac{V_{1}-"+str(VS)+"}{"+str(R1)+"}\)",
        
        "eq-3": "\(-V_{1}+"+str(R2)+"\cdot i_{2} + V_{2} = 0\)",
        "eq-4": "\(i_{2}=\\dfrac{V_{1}-V_{2}}{"+str(R2)+"}\)",
        
        "eq-5": "\(-V_{1}+"+str(R3)+"\cdot i_{3} + 0 = 0\)",
        "eq-6": "\(i_{3}=\\dfrac{V_{1}}{"+str(R3)+"}\)",
        
        "eq-7": "\(i_{4}=-"+str(IFD_gain)+"\cdot i_{a}\)",

        "eq-8": "\(-V_{2}+"+str(R2)+"\cdot i_{5} - V_{1} = 0\)",
        "eq-9": "\(i_{5}=\\dfrac{V_{2} - V_{1}}{"+str(R2)+"}\)",
        
        "eq-10": "\(i_{6}=-"+str(IS)+"\)",
        
        "eq-11": "\(-V_{2}+"+str(R4)+"\cdot i_{7} + 0 = 0\)",
        "eq-12": "\(i_{7}=\\dfrac{V_{2}}{"+str(R4)+"}\)",

        "eq-13": "\(i_{8}="+str(IFD_gain)+"\cdot i_{a}\)",

        "eq-14": "\(-"+str(VS)+"+"+str(R1)+"\cdot i_{a} + V_{1} = 0\)",
        "eq-15": "\(i_{a}=\\dfrac{"+str(VS)+" - V_{1}}{"+str(R1)+"}\)",


        "eq-16": r"""
            \begin{cases}
                i_{1} + i_{2} + i_{3} + i_{4} = 0 \\
                \\[0.5pt]
                i_{5} + i_{6} + i_{7} + i_{8} = 0 
            \end{cases}
        """,

        "eq-17": (
            "\\begin{cases} "          
            + "\\dfrac{V_{1} - " + str(VS) + "}{"+str(R1) + "} + "
            + "\\dfrac{V_{1} - V_{2}}{"+str(R2) + "} + "
            + "\\dfrac{V_{1}}{"+str(R3) + "} + -" + str(IFD_gain) + " \\cdot i_{a} = 0 \\\\ "
            + "\\\[0.1pt]" 
            + "\\dfrac{V_{2} - V_{1}}{"+str(R2) + "} + -" + str(IS) + " + "
            + "\\dfrac{V_{2}}{"+str(R4) + "} + " + str(IFD_gain) + " \\cdot i_{a} = 0 "            
            + "\\end{cases}"
        ),
        
        "eq-18": "\[i_{a}=\\dfrac{"+str(VS)+" - V_{1}}{"+str(R1)+"}\]",        
        
        "eq-19": (
            "\\begin{cases} "
            + "V_{1} \\cdot \\left(\\dfrac{1}{"+str(R1)+"} + \\dfrac{1}{"+str(R2)+"} + \\dfrac{1}{"+str(R3)+"} + \\dfrac{" + str(IFD_gain) + "}{"+str(R1) +" }\\right) + "
            + "V_{2} \\cdot \\left(-\\dfrac{1}{"+str(R2)+"}\\right) = \\dfrac{"+str(IFD_gain)+" \\cdot "+str(VS)+"}{"+str(R1)+"} + \\dfrac{"+str(VS)+"}{"+str(R1)+"} \\\\ "
            + "\\\[0.1pt]" 
            + "V_{1} \\cdot \\left(-\\dfrac{1}{"+str(R2)+"} - \\dfrac{" + str(IFD_gain) + "}{"+str(R1)+"}\\right) + "
            + "V_{2} \\cdot \\left(\\dfrac{1}{"+str(R2)+"} + \\dfrac{1}{"+str(R4)+"}\\right) = - \\dfrac{"+str(IFD_gain)+" \\cdot "+str(VS)+"}{"+str(R1)+"} + "+str(IS)+""            
            + "\\end{cases}"
        ),
        
        "eq-20": (
            "\\begin{cases} "
            + "V_{1} \\cdot \\left(" +repr(round(const_V1_eq1, 3))+ "\\right) + V_{2} \\cdot \\left(" +repr(round(const_V2_eq1, 3))+ "\\right) = " +repr(round(independente_eq1, 3))+ " \\\\ "
            + "\\\[0.1pt]"             
            + "V_{1} \\cdot \\left(" +repr(round(const_V1_eq2, 3))+ "\\right) + V_{2} \\cdot \\left(" +repr(round(const_V2_eq2, 3))+ "\\right) = " +repr(round(independente_eq2, 3))+ ""
            + "\\end{cases}"
        ),
        
        "eq-21": "\(V_{1}="+repr(round(V1, 2))+"V \\quad\\quad V_{2}="+repr(round(V2, 2))+"V \\quad\\quad  i_{A} = \\dfrac{"+str(VS)+" - "+repr(round(V1, 2))+"}{"+str(R1)+"} = "+repr(round(iA, 2))+"A \)",
        
        "eq-22": "\(\\begin{cases} i_{1}+i_{2}+i_{3}+i_{4}=0 \\\\[0.1pt]  \\\\ i_{5}+i_{6}+i_{7}+i_{8}=0 \\end{cases}\)",
        "eq-23": "\( V_{1}=" +repr(round(variaveis[0], 2))+ "V \quad V_{2}=" +repr(round(variaveis[1], 2))+ "V \quad i_{a}=" +repr(round(variaveis[2], 2))+ "A\)",

    }

    for key, equation in equations.items():
        element_id = f"{prefixo}-{key}"
        element = js.document.getElementById(element_id)
        if element:
            element.innerHTML = equation
            js.MathJax.Hub.Typeset(js.document.getElementById(element_id))


    data_parameters = {'VS': repr(round(VS,2)), 'IS': repr(round(IS,2)), 'IFD_gain': repr(round(IFD_gain,2)), 'R1': repr(round(R1,2)), 'R2': repr(round(R2,2)), 'R3': repr(round(R3,2)), 'R4': repr(round(R4,2))}
    data_config = {
        'components': ['V_{S}', 'I_{S}', 'I_{FD}', 'R_{1}', 'R_{2}', 'R_{3}', 'R_{4}'],
        'units': ['V', 'A','\\cdot i_{a}','\\Omega','\\Omega','\\Omega','\\Omega']
    }

    # Converte os dicionários para objetos JS
    data_parameters_json = json.dumps(data_parameters)
    data_config_json = json.dumps(data_config)

    # Chama a função init_generic definida em JavaScript
    js.init_generic('ex1', data_parameters_json, data_config_json)



def ex_CM(e):

    prefixo = "ex_CM"

    VS = float(js.document.getElementById(prefixo+"-"+"VS").value)
    IS = float(js.document.getElementById(prefixo+"-"+"IS").value)

    sistema = np.array([
            [(11),(-2)],
            [(-2),(19)]
    ])

    termosIndependentes = np.array([
            (VS), (-5*IS)
    ])

    variaveis = np.linalg.solve(sistema, termosIndependentes)

    ia = variaveis[0]
    ib = variaveis[1]

    i_2ohm = ia-ib

    p_2ohm = i_2ohm**2*2


    equations = {
        "eq-1": "\(\\begin{cases} -"+ repr(round(VS, 2)) +"+3 \\cdot i_{a}+2 \\cdot \\left(i_{a}-i_{b}\\right)+6 \\cdot i_{a}=0 \\\\[0.1pt]  \\\\ 2 \\cdot \\left(i_{b}-i_{a}\\right)+8 \\cdot i_{b}+5 \\cdot \\left(i_{b}-i_{c}\\right)+4 \\cdot i_{b}=0 \\\\[0.1pt]  \\\\ i_{c}=-"+ repr(round(IS, 2)) +" A \\end{cases}\)",
        "eq-2": "\(\\begin{cases} 11 \\cdot i_{a}-2 \\cdot i_{b}="+ repr(round(VS, 2)) +" \\\\[0.1pt]  \\\\ -2 \\cdot i_{a}+19 \\cdot i_{b}=-5 \\cdot "+ repr(round(IS, 2)) +" \\end{cases}\)",
        "eq-3": "\(i_{a}="+ repr(round(ia, 2)) +" A\)",
        "eq-4": "\(i_{b}="+ repr(round(ib, 2)) +" A\)",
        "eq-5": "\(i_{2\\Omega}=i_{a}-i_{b}="+ repr(round(ia, 2)) +"-"+ repr(round(ib, 2)) +"= "+ repr(round(i_2ohm, 2)) +" A\)",
        "eq-6": "\(P_{2\\Omega} = i_{2\\Omega}^{2} \\cdot 2="+ repr(round(p_2ohm, 2)) +" W\)",
        "eq-7": "\(P_{2\\Omega} ="+ repr(round(p_2ohm, 2)) +" W\)",
        "eq-8": "\(i_{c}=-"+ repr(round(IS, 2)) +" A\)",
    }


    for key, equation in equations.items():
        element_id = f"{prefixo}-{key}"
        element = js.document.getElementById(element_id)
        if element:
            element.innerHTML = equation
            js.MathJax.Hub.Typeset(js.document.getElementById(element_id))



    data_parameters = {'VS': repr(round(VS,2)), 'IS': repr(round(IS,2))}
    data_config = {
        'components': ['V_{S}', 'I_{S}'],
        'units': ['V', 'A']
    }

    # Converte os dicionários para objetos JS
    data_parameters_json = json.dumps(data_parameters)
    data_config_json = json.dumps(data_config)

    # Chama a função init_generic definida em JavaScript
    js.init_generic(prefixo, data_parameters_json, data_config_json)    



ex1("")
aula1_exemplo_1("")
aula1_divisores("")
aula1_LK("")
ex_CF("")
Eq_Th("")
Ex_Superposicao("")
ex_CM("")