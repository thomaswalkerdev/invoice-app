import invoices from "../assets/invoice-data.json";
import { Invoice } from "../models/invoice.model";

export class InvoiceService {
  loadInvoices() {
    return invoices as Invoice[];
  }
}
