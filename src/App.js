import React from "react";
import "./styles/temp-default.scss";
import "./styles/base.scss";
import InvoiceList from "./views/invoice-list.tsx";
import { Sidebar } from "./components/sidebar/sidebar.tsx";

function App() {
  return (
    <>
      <Sidebar />
      <div className="App">
        <InvoiceList />
      </div>
    </>
  );
}

export default App;
