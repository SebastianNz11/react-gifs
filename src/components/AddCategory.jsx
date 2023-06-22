import { useState } from "react";

export const AddCategory = ({ handlerAddCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const onChange = (e) => {
    setinputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    handlerAddCategory(inputValue.trim());
    setinputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onChange}
      />
    </form>
  );
};
