import style from "./itemContainer.module.css";
export default function ItemContainer({ children }) {
  return <div className={style.itemContainer}>{children}</div>;
}
