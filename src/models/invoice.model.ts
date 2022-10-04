import { Address } from "./address.model";
import { Item } from "./item.model";

export class Invoice {
  id?: string;
  createdAt?: string;
  paymentDue?: string;
  senderAddress: Address = new Address();
  clientAddress: Address = new Address();
  clientName?: string;
  clientEmail?: string;
  paymentTerms?: number;
  description?: string;
  items?: Item[];
  total?: number;
  status: string = "Draft";
}
