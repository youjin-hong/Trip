import { useState } from "react";
import "./InputFild.css";

export default function InputFild({ setList }) {
  // console.log("setList", setList);
  const [inputText, setInputText] = useState("");

  const inputItem = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };
  console.log("inputText", inputText);

  const addItem = () => {
    // 공백 제거, 글자 수가 0이면 추가하지 않음 (경고창)
    if (inputText.trim().length < 2) {
      alert(
        inputText.trim() === ""
          ? "내용을 입력해주세요"
          : "2글자 이상 입력해주세요"
      );
      document.querySelector(".tripInput").focus();
      return;
    }

    // setList((prev) => [inputText, ...prev]);
    setList((prev) => {
      const newList = [inputText, ...prev];
      localStorage.setItem("tripLists", JSON.stringify(newList));
      return newList;
    });

    setInputText("");
    document.querySelector(".tripInput").focus();
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div className="inputfild mw">
      <input
        className="tripInput"
        value={inputText}
        type="text"
        placeholder="여행지를 입력해주세요"
        onChange={inputItem}
        onKeyUp={handleKeyUp}
      ></input>
      <button onClick={addItem}>검색</button>
    </div>
  );
}
