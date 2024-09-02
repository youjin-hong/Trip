import "./list.css";
export default function List({ list, setList, index }) {
  const removeItem = () => {
    setList((prev) => {
      const newLists = prev.filter((_, i) => i !== index);
      localStorage.setItem("tripLists", JSON.stringify(newLists));
      return newLists;
    });
  };
  return (
    <li className="list">
      <p>{list}</p>
      <i className="fa-solid fa-trash" onClick={removeItem}></i>
    </li>
  );
}
