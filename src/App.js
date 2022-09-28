import logo from "./logo.svg";
import Button from "./components/buttons/button.tsx";
import ButtonStyleEnum from "./enums/button-style.enum.ts";
import ButtonSizeEnum from "./enums/button-size.enum.ts";
import React from "react";
import "./styles/temp-default.scss";
import "./styles/base.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button
          buttonStyle={ButtonStyleEnum.Add}
          buttonSize={ButtonSizeEnum.Small}
        >
          Button
        </Button>
        <Button
          buttonStyle={ButtonStyleEnum.Icon}
          buttonSize={ButtonSizeEnum.Medium}
        >
          Button
        </Button>

        <Button
          buttonStyle={ButtonStyleEnum.PrimaryAction}
          buttonSize={ButtonSizeEnum.Large}
        >
          Button
        </Button>
      </header>
    </div>
  );
}

export default App;
