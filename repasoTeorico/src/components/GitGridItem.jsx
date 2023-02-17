const GifGridItem = ({ title, url }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={url} alt={title} />
    </div>
  );
};

export default GifGridItem;
