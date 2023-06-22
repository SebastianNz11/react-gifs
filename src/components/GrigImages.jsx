export const GrigImages = ({ images }) => {
  return (
    <div className="card">
      <img src={images.url} alt={images.title} />
      <h5>{images.title}</h5>
    </div>
  );
};
