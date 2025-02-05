import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  function handleInput(e) {
    setValue(value + e.target.value);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  function clearInput() {
    setValue("");
  }

  function deleteLast() {
    setValue(value.toString().slice(0, -1));
  }

  function calculateResult() {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  }

  function handleKeyDown(e) {
    if (/[\d+\-*/.=]/.test(e.key)) {
      e.preventDefault();
      setValue((prev) => prev + e.key);
    } else if (e.key === "Enter") {
      e.preventDefault();
      calculateResult();
    } else if (e.key === "Backspace") {
      e.preventDefault();
      deleteLast();
    } else if (e.key === "Escape") {
      e.preventDefault();
      clearInput();
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input
              type="text"
              ref={inputRef}
              value={value}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div>
            <input type="button" value="AC" onClick={clearInput} />
            <input type="button" value="DEL" onClick={deleteLast} />
            <input type="button" value="." onClick={handleInput} />
            <input type="button" value="/" onClick={handleInput} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleInput} />
            <input type="button" value="8" onClick={handleInput} />
            <input type="button" value="9" onClick={handleInput} />
            <input type="button" value="*" onClick={handleInput} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleInput} />
            <input type="button" value="5" onClick={handleInput} />
            <input type="button" value="6" onClick={handleInput} />
            <input type="button" value="+" onClick={handleInput} />
          </div>
          <div>
            <input type="button" value="1" onClick={handleInput} />
            <input type="button" value="2" onClick={handleInput} />
            <input type="button" value="3" onClick={handleInput} />
            <input type="button" value="-" onClick={handleInput} />
          </div>
          <div>
            <input type="button" value="00" onClick={handleInput} />
            <input type="button" value="0" onClick={handleInput} />
            <input type="button" value="=" className="equal" onClick={calculateResult} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
