import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";
import { GrigImages } from './GrigImages'

export const GetGifs = ({ nameCategory }) => {
  const [image, setimage] = useState([]);

  const gifs = async () => {
    const gifs = await getGifs(nameCategory);
    setimage(gifs);
  };

  useEffect(() => {
    gifs();
  }, []);

  return (
    <div className="card-grid">
      {image.map((image) => {
        return <GrigImages key={image.id} images = { image }/>;
      })}
    </div>
  );
};
