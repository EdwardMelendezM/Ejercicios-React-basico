import { useState } from "react";
import { Link } from "react-router-dom";
import { usoAppContext } from "../store/Store";
const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = usoAppContext();

  const handleOnChangeFile = (e) => {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCover(reader.result.toString());
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };
    store.createItem(newBook);
  };
  //Todo para registrar
  const handleChange = (e) => {
    const name = e.target.name;
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "intro":
        setIntro(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Link to="/">Home</Link>

      <form onSubmit={handleSubmit}>
        <div>
          <div>Title</div>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            valor={title}
          />
        </div>
        <div>
          <div>Autor</div>
          <input
            type="text"
            name="author"
            onChange={handleChange}
            valor={author}
          />
        </div>
        <div>
          <div>Cover</div>
          <input type="file" name="cover" onChange={handleOnChangeFile} />
          <div>
            {!!cover ? <img src={cover} width="200px" alt="preview" /> : ""}
          </div>
        </div>
        <div>
          <div>Introduccion</div>
          <input
            type="text"
            name="intro"
            onChange={handleChange}
            valor={intro}
          />
        </div>
        <div>
          <div>Completed</div>
          <input
            type="checkbox"
            name="completed"
            onChange={handleChange}
            valor={completed}
          />
        </div>
        <div>
          <div>Review</div>
          <input
            type="text"
            name="review"
            onChange={handleChange}
            valor={review}
          />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};
export default Create;
