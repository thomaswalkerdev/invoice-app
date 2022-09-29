import React from "react";
import "./styles/temp-default.scss";
import "./styles/base.scss";
import InvoiceList from "./views/invoice-list";
import { Sidebar } from "./components/sidebar/sidebar";
import { InvoiceProvider } from "./providers/invoice-provider";

function App() {
  return (
    <InvoiceProvider>
      <Sidebar />
      <div className="App">
        <InvoiceList value={InvoiceProvider.value} />
      </div>
    </InvoiceProvider>
  );
}

export default App;
