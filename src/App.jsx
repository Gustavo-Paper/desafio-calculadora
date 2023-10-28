import { GlobalStyles } from "./components/GlobalStyle";
import Button from "./components/Button";
import React from "react";


function App() {

  const [primeiroNumero, setPrimeiroNumero] = React.useState("");
  const [segundoNumero, setSegundoNumero] = React.useState("");

  const [operacao, setOperacao] = React.useState("");
  const [resultado, setResultado] = React.useState("");

  function numberClick(numero) {
    if (!operacao) {
      setPrimeiroNumero(primeiroNumero + numero);
    } else {

      setSegundoNumero(segundoNumero + numero);
    }

  }

  function clickOperador(operacao) {
    if (primeiroNumero && segundoNumero) {
      calcularResultado();
    }
    if (primeiroNumero) {
      setOperacao(operacao);
    }
  }

  function clickIgual() {
    if (primeiroNumero && segundoNumero) {
      calcularResultado();
    }
  }

  function calcularResultado() {
    const primeiro = Number(primeiroNumero);
    const segundo = Number(segundoNumero);

    let resultadoCalculado;

    if (operacao === "+") {
      resultadoCalculado = primeiro + segundo;
    } else if (operacao === "-") {
      resultadoCalculado = primeiro - segundo;
    } else if (operacao === "*") {
      resultadoCalculado = primeiro * segundo;
    } else if (operacao === "/") {
      resultadoCalculado = primeiro / segundo;
    } else if (operacao === "%") {
      resultadoCalculado = primeiro % segundo;
    }

    setResultado(resultadoCalculado);

  }



  return <>
    <GlobalStyles />
    <div>

      <div>
        <div>
          <h1>
            {primeiroNumero !== "" ? `${primeiroNumero} ${operacao} 
            ${segundoNumero}` : "0"}

          </h1>
        </div>


        <div>
          <h1>{resultado}</h1>
        </div>



        <div>
          <Button >CE</Button>
          <Button>C</Button>
          <Button event={() => clickOperador("%")} >%</Button>
          <Button event={() => clickOperador("/")} >/</Button>

        </div>

        <div>

          <Button event={() => numberClick("7")}>7</Button>
          <Button event={() => numberClick("8")}>8</Button>
          <Button event={() => numberClick("9")}>9</Button>
          <Button event={() => clickOperador("*")} >*</Button>

        </div>

        <div>

          <Button event={() => numberClick("4")} >4</Button>
          <Button event={() => numberClick("5")}>5</Button>
          <Button event={() => numberClick("6")}>6</Button>
          <Button event={() => clickOperador("-")} >-</Button>

        </div>


        <div>
          <Button event={() => numberClick("1")}>1</Button>
          <Button event={() => numberClick("2")} >2</Button>
          <Button event={() => numberClick("3")} >3</Button>
          <Button event={() => clickOperador("+")} >+</Button>

        </div>

        <div>
          <Button event={() => numberClick("0")}>0</Button>

          <Button event={() => clickIgual()} >=</Button>

        </div>

      </div>
    </div>

  </>
};

export default App;
