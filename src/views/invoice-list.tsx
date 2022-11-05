import { InvoiceHeader } from "../components/invoices/invoice-header";
import { InvoiceEntry } from "../components/invoices/invoice-entry";
import { useInvoice } from "../providers/invoice-provider";
import React, { useEffect, useState } from "react";
import { Invoice } from "../models/invoice.model";
import { NoInvoices } from "../components/invoices/no-invoices";

export function InvoiceList({ ...props }) {
  const { state } = useInvoice();
  const [filter, setFilter] = useState("");
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    setInvoices(
      !filter ? state : state.filter((invoice) => invoice.status === filter)
    );
  }, [filter, state]);

  return (
    <>
      <InvoiceHeader
        filterChanged={(e) => {
          setFilter(e);
        }}
      />
      <div className="invoices__list-wrapper">
        {invoices?.length > 0 ? (
          invoices.map((invoice, i) => {
            return (
              <div key={i}>
                <InvoiceEntry invoice={invoice} />
              </div>
            );
          })
        ) : (
          <NoInvoices />
        )}
      </div>
    </>
  );
}

export default InvoiceList;
