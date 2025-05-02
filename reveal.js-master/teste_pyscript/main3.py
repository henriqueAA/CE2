import numpy as np
import matplotlib.pyplot as plt
import sympy as sp
import cmath

import warnings
warnings.filterwarnings("ignore")

from pyscript import display

# Definir variáveis 
s, t = sp.symbols('s t')

# Dados do circuito
R = 3125  # ohms
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
t_vals = np.linspace(0, 7e-3, 1000)  # Tempo de 0 a 7ms
v_func = sp.lambdify(t, Vc_inv, 'numpy')
Vt_vals = v_func(t_vals)

# Plotagem da resposta no tempo
fig, ax = plt.subplots()
ax.plot(t_vals * 1e3, Vt_vals, label="v(t)", color='b')
ax.set_xlabel("Tempo (ms)")
ax.set_ylabel("Tensão (V)")
ax.set_title("Transformada Inversa de Laplace de V(s)")
ax.legend()
ax.grid()

display(fig, target="mpl")
