import { InvoiceStatus } from "../enums/invoice-status.enum";
import { PaymentTerms } from "../enums/payment-terms.enum";
import { Address } from "./address.model";
import { Client } from "./client.model";
import { Item } from "./item.model";

export class Invoice {
  id: string;
  address: Address;
  client: Client;
  invoiceDate: string;
  paymentTerms: PaymentTerms;
  productDescription: string;
  itemList: Item[];
  status: InvoiceStatus;
}
