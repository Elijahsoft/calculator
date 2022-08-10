function App() {
  const [calc, setCalc] = React.useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    const operatorPattern = /[+\-*/]/;
    if (calc === "" && value === "0") {
      return;
    }
    if (value === ".") {
      const parts = calc.split(operatorPattern);
      if (parts[parts.length - 1].includes(".")) {
        return;
      }
    }
    if (value !== "-" && operatorPattern.test(value)) {
      const lastChar = calc[calc.length - 1] || "";
      const secondLastChar = calc[calc.length - 2] || "";
      if (operatorPattern.test(lastChar)) {
        if (lastChar === "-" && operatorPattern.test(secondLastChar)) {
          setCalc(calc.slice(0, -2) + value);
          return;
        }
        setCalc(calc.slice(0, -1) + value);
        return;
      }
    }

    setCalc(calc + value);
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const clearAll = () => {
    setCalc("");
  };

  return (
    <div className="App container">
      <div className="grid ">
        <div className="dis">
        <div className="display total" id="display">{calc || "0"}</div>
        </div>
        <div className="padButton tomato  AC" id="del" onClick={deleteLast}>DEL</div>
        <div className="padButton tomato  C" id="clear" onClick={clearAll}>AC</div>
        <div className="padButton div " id="divide" onClick={() => {updateCalc("/");}}>/</div>      
        <div className="padButton times" id="multiply" onClick={() => {updateCalc("*");}}>X</div>

        <div className="padButton  dark-btn" id="seven" onClick={() => {updateCalc("7");}}>7</div>
        <div className="padButton  dark-btn" id="eight" onClick={() => {updateCalc("8");}}>8</div>
        <div className="padButton  dark-btn"id="nine" onClick={() => {updateCalc("9");}}>9</div>
        <div className="padButton  minus" id="subtract" onClick={() => {updateCalc("-");}}>-</div>  

        <div className="padButton  dark-btn" id="four" onClick={() => {updateCalc("4"); }}>4</div>
        <div className="padButton  dark-btn" id="five"onClick={() => {updateCalc("5");}}>5</div>
        <div className="padButton dark-btn" id="six" onClick={() => { updateCalc("6");}}>6</div>
        <div className="padButton  plus" id="add" onClick={() => {updateCalc("+");}}>+</div>

        <div className="padButton  dark-btn" id="one" onClick={() => {updateCalc("1");}}>1</div>
        <div className="padButton dark-btn" id="two" onClick={() => { updateCalc("2");}}>2</div>
        <div className="padButton  dark-btn" id="three" onClick={() => {updateCalc("3");}}>3</div>       
        <div className="padButton dark-btn zero" id="zero" onClick={() => {updateCalc("0");}}>0</div>
        <div className="padButton  dark-btn equal" id="equals" onClick={calculate}>=</div>
        <div className="padButton dark-btn dot" id="decimal" onClick={() => {updateCalc(".");}}>.</div>
     
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
