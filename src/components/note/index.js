import formattedDate from "../../utils/formattedDate";
import Card from "../card";
import "./style.css";

const Note = ({ item, onDelete, setUnArchive, setArchive }) => {
  const { id, title, body, createdAt, archived } = item;

  return (
    <Card>
      <h3 className="note-title">{title}</h3>
      <h4 className="note-date">{formattedDate(createdAt)}</h4>
      <p className="note-description">{body}</p>
      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
        {archived ? (
          <button onClick={() => setUnArchive(id)}>Un Archive</button>
        ) : (
          <button onClick={() => setArchive(id)}>Archive</button>
        )}
      </div>
    </Card>
  );
};

export default Note;
