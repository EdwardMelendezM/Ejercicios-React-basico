const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__fadeInDown">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};

export default GifGridItem;
