import React from "react";
import "./styles/temp-default.scss";
import "./styles/base.scss";
import InvoiceList from "./views/invoice-list";
import { Sidebar } from "./components/sidebar/sidebar";
import { InvoiceProvider } from "./providers/invoice-provider";
import { ThemeProvider } from "./providers/theme-provider";
import ConfirmDeleteModal from "./components/modals/confirm-delete-modal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvoiceDetail from "./views/invoice-detail";
import { Layout } from "./components/layout/layout";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <InvoiceProvider>
          <Sidebar />
          <Layout>
            <Routes>
              <Route
                path="/"
                element={<InvoiceList value={InvoiceProvider.value} />}
              />
              <Route path={`/:invoiceId`} element={<InvoiceDetail />} />
            </Routes>
          </Layout>
        </InvoiceProvider>
      </ThemeProvider>
      {/* <ConfirmDeleteModal /> */}
    </Router>
  );
}

export default App;
