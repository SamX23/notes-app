import Note from "../note";
import "./style.css";

const NotesContainer = ({ title, data, onDelete }) => {
  return (
    <div className="notes-container">
      <h2 className="notes-containerTitle">{title}</h2>
      <div className="notes-containerGrid">
        {data.length > 0 ? (
          data.map((item) => (
            <Note key={item.id} item={item} onDelete={onDelete} />
          ))
        ) : (
          <span className="notes-containerEmpty">No {title} notes</span>
        )}
      </div>
    </div>
  );
};

export default NotesContainer;
