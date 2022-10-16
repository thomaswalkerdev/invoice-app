import { Item } from "../../models/item.model";
import "../../styles/view-invoice.scss";
import "../../styles/forms.scss";

function ViewInvoiceItems(props: IViewInvoiceItemsProps) {
  return (
    <div className="view-invoice__items">
      <table className="view-invoice__items-table">
        <tr className="view-invoice__items-row">
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        {props?.items.map((item, index) => {
          return (
            <tr key={index} className="view-invoice__items-row">
              <td>{item?.name}</td>
              <td>{item?.quantity}</td>
              <td>{item?.price}</td>
              <td>{item?.total}</td>
            </tr>
          );
        })}
      </table>
      <div className="view-invoice__amount-wrapper">
        <div className="view-invoice__amount">
          <span>Amount Due:</span>
          <span>{props?.total ?? 0}</span>
        </div>
      </div>
    </div>
  );
}

export default ViewInvoiceItems;

interface IViewInvoiceItemsProps {
  items: Item[];
  total: number;
}
