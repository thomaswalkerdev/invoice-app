import { useState } from "react";
import { Item } from "../../models/item.model";
import DeleteIcon from "../icons/delete-icon";
import NumberField from "./number-field";
import TextField from "./text-field";
import "../../styles/item-list.scss";
import Button from "../buttons/button";
import ButtonStyleEnum from "../../enums/button-style.enum";
import ButtonSizeEnum from "../../enums/button-size.enum";

function ItemList(props: IItemListProps) {
  let initialItems = props.items ?? [];

  const [items, updateItems] = useState(initialItems);

  function removeItemfromItems(index: number) {
    let itemsArr = [...items];
    itemsArr.splice(index, 1);
    updateItems(itemsArr);
  }

  return (
    <>
      <table className="form__item-list">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, i) => {
            return (
              <tr key={i} className="form__item-group">
                <td>
                  <TextField
                    defaultValue={item?.name}
                    onChange={(value) =>
                      updateItems(
                        items.map((item, index) =>
                          i === index ? { ...item, name: value } : item
                        )
                      )
                    }
                  />
                </td>
                <td>
                  <NumberField
                    defaultValue={item?.quantity}
                    onChange={(value) =>
                      updateItems(
                        items.map((item, index) =>
                          i === index
                            ? { ...item, quantity: parseInt(value) }
                            : item
                        )
                      )
                    }
                  />
                </td>
                <td>
                  <NumberField
                    defaultValue={item?.price}
                    onChange={(value) =>
                      updateItems(
                        items.map((item, index) =>
                          i === index
                            ? { ...item, price: parseInt(value) }
                            : item
                        )
                      )
                    }
                  />
                </td>
                <td>
                  <NumberField
                    defaultValue={item?.total}
                    onChange={(value) =>
                      updateItems(
                        items.map((item, index) =>
                          i === index
                            ? { ...item, total: parseInt(value) }
                            : item
                        )
                      )
                    }
                  />
                </td>
                <td>
                  <div className="item-list__delete">
                    <DeleteIcon onClick={() => removeItemfromItems(i)} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="item-list__add-item">
        <Button
          buttonStyle={ButtonStyleEnum.Add}
          buttonSize={ButtonSizeEnum.Small}
          onClick={() => updateItems([...items, new Item()])}
        >
          Add new item
        </Button>
      </div>
    </>
  );
}

export default ItemList;

interface IItemListProps {
  items?: Item[];
  onItemsUpdated?: (items: Item[]) => void;
}
