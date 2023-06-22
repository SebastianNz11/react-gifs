import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { ListGif } from "./ListGif";
import { GetGifs } from "./GetGifs";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["Dragon Ball"]);

  const handlerAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories([...categories, newCategory]);
  };

  return (
    /*Titulo*/
    <>
      <h1>GifExpertApp</h1>

      {/*Input*/}
      <AddCategory handlerAddCategory={(valor) => handlerAddCategory(valor)} />

      {/*Listar*/}
      {categories.map((category) => {
        return (
          <div key={category}>
            <ListGif category={category} />
            <GetGifs nameCategory={category} />
          </div>
        );
      })}
    </>
  );
};
