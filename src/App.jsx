import { use, useState } from "react";
import BotaoJuros from "./componentes/BotaoJuros";
import BotaoLimpar from "./componentes/BotaoLimpar";
import Tabela from "./componentes/Tabela";
import {calcularJurosSimples, calcularJurosCompostos} from "./componentes/calculos/Juros";
import logo from './assets/imagens/logo.png'


function App() {

  const [capital, setCapital] = useState("");
  const [taxa, setTaxa] = useState("");
  const [tempo, setTempo] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("")

  function handleCalcular(){
    console.log("botão funcionando")
    if (!capital || !tempo || !taxa){
      setErro("preencha todos os campos")
      setResultado(null)
      
      return
    } else if (taxa <= 0 || tempo <= 0 || capital <= 0){
      setErro("Valore(s) invalido(s)")
      setResultado(null)

      return
    }

    const simples= calcularJurosSimples({capital, taxa, tempo});
    const composto= calcularJurosCompostos({capital, taxa, tempo});
    setResultado({simples, composto});
  };

  function Limpar() {
    setCapital("");
    setErro("");
    setResultado(null)
    setTaxa("")
    setTempo("")
  };

  return(
    <div>
      <img src={logo} alt="imagem de uma calculadora" />
      <h1>Calculadora de juros</h1>

      <label htmlFor="capital">Capital:</label>
      <input 
        id="capital"
        type="number" 
        value={capital}
        step="0.01"
        placeholder="Ex: 140.94"
        onChange={(e) => setCapital(e.target.value)}
      />

      <label htmlFor="taxa">Taxa:</label>
      <input 
        id="taxa"
        type="number" 
        value={taxa}
        step="0.01"
        placeholder="Ex: 5.5 / 5 "
        onChange={e => setTaxa(e.target.value)}
      />

      <label htmlFor="tempo">Tempo(em meses):</label>
      <input 
        id="tempo"
        type="number" 
        value={tempo}
        step={1}
        min={1}
        placeholder="Ex: 5 / 4"
        onChange={e => setTempo(e.target.value)} 
      />

      <BotaoJuros onCalcular = {handleCalcular}/>
      <BotaoLimpar limpar={Limpar}/>

      {erro &&(
        <p>{erro}</p>
      )}

      {resultado &&(
        <Tabela 
          capital={capital}
          taxa={taxa} 
          simples={resultado.simples} 
          composto={resultado.composto}
      />
    )}
    </div>
  );

};

export default App;
