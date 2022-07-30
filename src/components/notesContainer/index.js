import Note from "../note";
import "./style.css";

const NotesContainer = ({ title, data, onDelete }) => {
  return (
    <div className="notes-container">
      {data.length > 0 && <h2 className="notes-containerTitle">{title}</h2>}

      <div className="notes-containerGrid">
        {data.length > 0 ? (
          data.map((item) => (
            <Note key={item.id} item={item} onDelete={onDelete} />
          ))
        ) : (
          <span className="notes-containerEmpty">
            {title} you add appear here
          </span>
        )}
      </div>
    </div>
  );
};

export default NotesContainer;
