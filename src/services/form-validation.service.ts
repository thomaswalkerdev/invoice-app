import { Invoice } from "../models/invoice.model";

export function validateForm(formData: Invoice, cb: () => void) {
  if (formData.clientAddress) {
    Object.values(formData.clientAddress).forEach((val) => {
      if (!val) {
        cb();
        return;
      }
    });
  }

  if (formData.senderAddress) {
    Object.values(formData.clientAddress).forEach((val) => {
      if (!val) {
        cb();
        return;
      }
    });
  }

  if (formData.items != null && formData.items.length > 0) {
    formData.items.forEach((item) => {
      Object.values(item).forEach((val) => {
        if (!val) {
          cb();
          return;
        }
      });
    });
  }

  if (
    !formData.clientEmail ||
    !formData.description ||
    !formData.paymentTerms
  ) {
    cb();
    return;
  }
}
