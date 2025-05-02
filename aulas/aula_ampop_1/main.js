
ex_AmpOp('reset');
ex_SG('reset');
ex_DAC('reset');
ex_DAC_refresh_input();

function ex_AmpOp(action) {
  const prefixo = ex_AmpOp.name;

  if (action == "reset") {
    reset(prefixo);
  }

  const VA = parseFloat(document.getElementById(`${prefixo}-VA`).value);
  const VB = parseFloat(document.getElementById(`${prefixo}-VB`).value);
  const MaisVcc = parseFloat(
    document.getElementById(`${prefixo}-MaisVCC`).value
  );
  const MenosVcc = parseFloat(
    document.getElementById(`${prefixo}-MenosVCC`).value
  );

  const RS = 25e3;
  const RF = 100e3;

  const Vo = VB - ((VA - VB) / RS) * RF;
  const Vo_str = Vo.toFixed(2);

  const equations = {
    "eq-1": `\\(V_{n}=V_{p}=AAA\\)`,
    "eq-2": `\\(i_{n}=i_{p}=0\\)`,
    "eq-3": `\\(V_{p}=V_{B}\\)`,
    "eq-4": `\\(V_{n}=V_{p}=V_{B}\\)`,
    "eq-5": `\\(i_{S}=\\dfrac{V_{A}-V_{n}}{R_{s}}=\\dfrac{V_{A}-V_{B}}{R_{S}}\\)`,
    "eq-6": `\\(i_{F}=\\dfrac{V_{n}-V_{o}}{R_{F}}=\\dfrac{V_{B}-V_{o}}{R_{F}}\\)`,
    "eq-7": `\\(i_{S}=i_{F}+i_{n}\\)`,
    "eq-8": `\\(i_{S}=i_{F}+0\\)`,
    "eq-9": `\\(\\dfrac{V_{A}-V_{B}}{R_{S}}=\\dfrac{V_{B}-V_{o}}{R_{F}}\\)`,
    "eq-10": `\\(R_{F} \\cdot \\left(\\dfrac{V_{A}-V_{B}}{R_{S}}\\right)-V_{B}=-V_{o}\\)`,
    "eq-11": `\\(V_{o}=V_{B}-R_{F} \\cdot \\left(\\dfrac{V_{A}-V_{B}}{R_{S}}\\right)\\)`,
    "eq-12": `\\(V_{o}=${VB}-100 \\cdot 10^{3} \\cdot \\left(\\dfrac{${VA}-${VB}}{25 \\cdot 10^{3}}\\right)=${Vo_str}V\\)`,
    "eq-13": `\\(\\begin{cases} as=\\dfrac{1}{3} \\\\[0.1pt]  \\\\ as=\\dfrac{1}{3} \\end{cases}\\)`,
  };

  for (const key in equations) {
    const elementId = `${prefixo}-${key}`;
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = equations[key];
      if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise([element]);
      }
    }
  }

  const data_parameters = {
    VA: VA.toFixed(2),
    VB: VB.toFixed(2),
    MaisVcc: MaisVcc.toFixed(2),
    MenosVcc: MenosVcc.toFixed(2),
  };

  const data_config = {
    components: ["V_{A}", "V_{B}", "+V_{cc}", "-V_{cc}"],
    units: ["V", "V", "V", "V"],
  };

  // Envie como JSON string
  const data_parameters_json = JSON.stringify(data_parameters);
  const data_config_json = JSON.stringify(data_config);

  if (typeof init_generic === "function") {
    init_generic(prefixo, data_parameters_json, data_config_json);
  }
}



function ex_SG(action) {
  const prefixo = ex_SG.name;

  if (action == "reset") {
    reset(prefixo);
  }

  const VS = parseFloat(document.getElementById(`${prefixo}-VS`).value);
  const RP = parseFloat(document.getElementById(`${prefixo}-RP`).value);
  const RA = parseFloat(document.getElementById(`${prefixo}-RA`).value);
  const RB = parseFloat(document.getElementById(`${prefixo}-RB`).value);
  const DeltaR = parseFloat(document.getElementById(`${prefixo}-DeltaR`).value);

  const RSGPos = RP + DeltaR;
  const RSGNeg = RP - DeltaR;


  let V2 = VS/2;

  let V1_Sup = VS*(RSGPos)/(RSGPos + RP);
  let V1_Inf = VS*(RSGNeg)/(RSGNeg + RP);
  
  let Vo_Min = (RB/RA)*(V2-V1_Sup);
  let Vo_Max = (RB/RA)*(V2-V1_Inf);
    
  let Vo_Min_Apx = -VS*(RB/RA)*(1/(4*RP))*DeltaR;
  let Vo_Max_Apx = VS*(RB/RA)*(1/(4*RP))*DeltaR;
  let ganho = RB/RA;

  V2 = V2.toFixed(2);

  V1_Sup = V1_Sup.toFixed(2);
  V1_Inf = V1_Inf.toFixed(2);
    
  Vo_Min = Vo_Min.toFixed(3);
  Vo_Max = Vo_Max.toFixed(3);
      
  Vo_Min_Apx = Vo_Min_Apx.toFixed(2);
  Vo_Max_Apx = Vo_Max_Apx.toFixed(2);
  
  ganho = ganho.toFixed(2);  

    
  equations = {
    "eq-1": `\\(V_{2}=V_{S} \\cdot \\left(\\dfrac{R_{P}}{R_{P}+R_{P}}\\right)=\\dfrac{V_{S}}{2}=${V2} V\\)`,
    "eq-2": `\\(V'_{1}=V_{S} \\cdot \\left(\\dfrac{R_{P}+\\Delta R}{R_{P}+\\Delta R+R_{P}}\\right)\\)`,
    "eq-3": `\\(V'_{1}=V_{S} \\cdot \\left(\\dfrac{R_{P}+\\Delta R}{2 \\cdot R_{P}+\\Delta R}\\right) = ${V1_Sup} V\\)`,
    "eq-4": `\\(V''_{1}=V_{S} \\cdot \\left(\\dfrac{R_{P}-\\Delta R}{R_{P}-\\Delta R+R_{P}}\\right)\\)`,
    "eq-5": `\\(V''_{1}=V_{S} \\cdot \\left(\\dfrac{R_{P}-\\Delta R}{2 \\cdot R_{P}-\\Delta R}\\right) = ${V1_Inf} V\\)`,
    "eq-6": `\\(Ganho = \\dfrac{R_{B}}{R_{A}} = \\dfrac{${RB} K}{${RA} K} = ${ganho}\\\)`,
    "eq-7": `\\(V'_{o}=\\dfrac{R_{B}}{R_{A}} \\cdot \\left(V_{2}-V'_{1}\\right)=-V_{S} \\cdot \\dfrac{R_{B}}{R_{A}} \\cdot \\left(\\dfrac{\\Delta R}{4 \\cdot R_{P}+2 \\cdot \\Delta R}\\right) = ${Vo_Min} V\\)`,
    "eq-8": `\\(V'_{o}\\approx -V_{S} \\cdot \\dfrac{R_{B}}{R_{A}} \\cdot \\left(\\dfrac{1}{4 \\cdot R_{P}}\\right) \\cdot \\Delta R = ${Vo_Min_Apx} V\\)`,
    "eq-9": `\\(V''_{o}=\\dfrac{R_{B}}{R_{A}} \\cdot \\left(V_{2}-V'_{1}\\right)=V_{S} \\cdot \\dfrac{R_{B}}{R_{A}} \\cdot \\left(\\dfrac{\\Delta R}{4 \\cdot R_{P}-2 \\cdot \\Delta R}\\right) = ${Vo_Max} V\\)`,
    "eq-10": `\\(V''_{o}\\approx V_{S} \\cdot \\dfrac{R_{B}}{R_{A}} \\cdot \\left(\\dfrac{1}{4 \\cdot R_{P}}\\right) \\cdot \\Delta R = ${Vo_Max_Apx} V\\)`,
    "eq-11": `\\(${Vo_Min_Apx} V\\)`,
    "eq-12": `\\(${Vo_Max_Apx} V\\)`,
 }

  for (const key in equations) {
    const elementId = `${prefixo}-${key}`;
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = equations[key];
      if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise([element]);
      }
    }
  }

  const data_parameters = {
    VS: VS.toFixed(2),
    RP: RP.toFixed(2),
    RA: RA.toFixed(2),
    RB: RB.toFixed(2),
    RSGPos: RSGPos.toFixed(2),
  };

  const data_config = {
    components: ["V_{S}", "R_{P}", "R_{A}", "R_{B}","R_{SG}"],
    units: ["V", "\\Omega", "K\\Omega", "K\\Omega", "\\Omega"],
  };

  // Envie como JSON string
  const data_parameters_json = JSON.stringify(data_parameters);
  const data_config_json = JSON.stringify(data_config);

  if (typeof init_generic === "function") {
    init_generic(prefixo, data_parameters_json, data_config_json);
  }
}


function ex_DAC_refresh_input() {

  const prefixo = "ex_DAC";

  const bit_on = parseFloat(document.getElementById("ex_DAC-Bit-ON").value);
  
  const toogleV1 = document.getElementById("ex_DAC_toogle_V1");
  const toogleV2 = document.getElementById("ex_DAC_toogle_V2");
  const toogleV3 = document.getElementById("ex_DAC_toogle_V3");
  const toogleV4 = document.getElementById("ex_DAC_toogle_V4");
  
  let bitV1 = 0;
  let bitV2 = 0;
  let bitV3 = 0;
  let bitV4 = 0;
  
  if (toogleV1.checked) bitV1 = bit_on;
  if (toogleV2.checked) bitV2 = bit_on;
  if (toogleV3.checked) bitV3 = bit_on;
  if (toogleV4.checked) bitV4 = bit_on;
  
  equations = {
    "label-V1": `\\(=${bitV1}V\\)`,
    "label-V2": `\\(=${bitV2}V\\)`,
    "label-V3": `\\(=${bitV3}V\\)`,
    "label-V4": `\\(=${bitV4}V\\)`,    
  }

  for (const key in equations) {
    const elementId = `${prefixo}-${key}`;
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = equations[key];
      if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise([element]);
      }
    }
  }
}

function ex_DAC(action, mode = null) {
  const prefixo = ex_DAC.name;

  if (action == "reset") {
    reset(prefixo);
  }
  
  const bit_on = parseFloat(document.getElementById("ex_DAC-Bit-ON").value);
  
  const toogleV1 = document.getElementById("ex_DAC_toogle_V1");
  const toogleV2 = document.getElementById("ex_DAC_toogle_V2");
  const toogleV3 = document.getElementById("ex_DAC_toogle_V3");
  const toogleV4 = document.getElementById("ex_DAC_toogle_V4");
  
  let bitV1 = 0;
  let bitV2 = 0;
  let bitV3 = 0;
  let bitV4 = 0;
  
  if (toogleV1.checked) bitV1 = bit_on;
  if (toogleV2.checked) bitV2 = bit_on;
  if (toogleV3.checked) bitV3 = bit_on;
  if (toogleV4.checked) bitV4 = bit_on;

  const R1_mode1 = parseFloat(document.getElementById(`${prefixo}-R1-mode1`).value);
  const RF_mode1 = parseFloat(document.getElementById(`${prefixo}-RF-mode1`).value);

  const Vo_mode2 = parseFloat(document.getElementById(`${prefixo}-Vo-mode2`).value);
  const R1_mode2 = parseFloat(document.getElementById(`${prefixo}-R1-mode2`).value);

  let R1 = R1_mode1;
  let RF = RF_mode1;

  if(mode == 2){
    R1 = R1_mode2;
  }
  
  const R2 = R1*2;
  const R3 = R1*4;
  const R4 = R1*8;

  if(mode == 2){
    RF = Vo_mode2/((bit_on/R1)+(bit_on/R2)+(bit_on/R3)+(bit_on/R4));
  }

  const Vo = RF*((bitV1/R1)+(bitV2/R2)+(bitV3/R3)+(bitV4/R4));
  
  const data_parameters = {
    V1: bitV1.toFixed(2),
    V2: bitV2.toFixed(2),
    V3: bitV3.toFixed(2),
    V4: bitV4.toFixed(2),    
    R1: R1.toFixed(2),
    R2: R2.toFixed(2),
    R3: R3.toFixed(2),
    R4: R4.toFixed(2), 
    RF: RF.toFixed(2),    
    Vo: Vo.toFixed(4),           
  };

  const data_config = {
    components: ["V_{1}", "V_{2}", "V_{3}", "V_{4}","R_{1}", "R_{2}", "R_{3}", "R_{4}", "R_{F}", "-V_{o}"],
    units: ["V","V","V","V", "K\\Omega", "K\\Omega", "K\\Omega", "K\\Omega", "K\\Omega", "V"],
  };

  // Envie como JSON string
  const data_parameters_json = JSON.stringify(data_parameters);
  const data_config_json = JSON.stringify(data_config);

  if (typeof init_generic === "function") {
    init_generic(prefixo, data_parameters_json, data_config_json);
  }


}
