import React, { useState } from "react";
import "./styles/temp-default.scss";
import "./styles/base.scss";
import InvoiceList from "./views/invoice-list";
import { Sidebar } from "./components/sidebar/sidebar";
import { InvoiceProvider } from "./providers/invoice-provider";
import { ThemeProvider } from "./providers/theme-provider";

function App() {
  // const [createInvoiceToggle, setCreateInvoice] = useState(false);
  const [count, setCount] = useState(false);

  return (
    <ThemeProvider>
      <InvoiceProvider>
        <Sidebar />
        <div className="App">
          <InvoiceList value={InvoiceProvider.value} />
          <button
            onClick={() => {
              setCount(!count);
              console.log("on click", count);
            }}
          >
            Toggle
          </button>
          open: {count}
        </div>
      </InvoiceProvider>
    </ThemeProvider>
  );
}

export default App;
