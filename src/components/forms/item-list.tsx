import { Item } from "../../models/item.model";

function ItemList(props: IItemListProps) {
  <div>
    {props?.items?.map((item, i) => {
      return <div></div>;
    })}
  </div>;
}

export default ItemList;

interface IItemListProps {
  items?: Item[];
}
