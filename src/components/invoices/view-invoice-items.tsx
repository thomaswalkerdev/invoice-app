import { Item } from "../../models/item.model";
import "../../styles/view-invoice.scss";
import "../../styles/forms.scss";

function ViewInvoiceItems(props: IViewInvoiceItemsProps) {
  return (
    <div className="view-invoice__items">
      <table>
        <tr>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        {props?.items.map((item, index) => {
          return (
            <tr className="form__group">
              <td>{item?.name}</td>
              <td>{item?.quantity}</td>
              <td>{item?.price}</td>
              <td>{item?.total}</td>
            </tr>
          );
        })}
      </table>
      <div>Amount Due: {props?.total ?? 0}</div>
    </div>
  );
}

export default ViewInvoiceItems;

interface IViewInvoiceItemsProps {
  items: Item[];
  total: number;
}
