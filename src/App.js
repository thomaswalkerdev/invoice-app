import React from "react";
import "./styles/temp-default.scss";
import "./styles/base.scss";
import InvoiceList from "./views/invoice-list";
import { Sidebar } from "./components/sidebar/sidebar";
import { InvoiceProvider } from "./providers/invoice-provider";
import { ThemeProvider } from "./providers/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <InvoiceProvider>
        <Sidebar />
        <div className="App">
          <InvoiceList value={InvoiceProvider.value} />
        </div>
      </InvoiceProvider>
    </ThemeProvider>
  );
}

export default App;
