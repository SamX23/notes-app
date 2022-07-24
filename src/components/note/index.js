import formattedDate from "../../utils/formattedDate";
import Card from "../card";
import "./style.css";

const Note = ({ item }) => {
  const { title, body, createdAt, archived } = item;

  return (
    <Card>
      <h3 className="note-title">{title}</h3>
      <h4 className="note-date">{formattedDate(createdAt)}</h4>
      <p className="note-description">{body}</p>
      <div>
        <button>Delete</button>
        {archived ? <button>Un Archive</button> : <button>Archive</button>}
      </div>
    </Card>
  );
};

export default Note;
