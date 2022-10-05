import { Item } from "../../models/item.model";

function ViewInvoiceItems(props: IViewInvoiceItemsProps) {
  return (
    <div>
      <table>
        <tr>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        {props?.items.map((item, index) => {
          return (
            <tr>
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
