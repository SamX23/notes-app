import formattedDate from "../../utils/formattedDate";
import "./style.css";

const Note = ({ item }) => {
  const { title, body, createdAt, archived } = item;

  return (
    <div className="note-card">
      <h3>{title}</h3>
      <p>{body}</p>
      <h4>Created on {formattedDate(createdAt)}</h4>
      <div>
        <button>Delete</button>
        {archived ? <button>Un Archive</button> : <button>Archive</button>}
      </div>
    </div>
  );
};

export default Note;
