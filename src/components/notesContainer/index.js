import Note from "../note";
import "./style.css";

const NotesContainer = ({ title, data }) => {
  const activeNotes =
    data.length > 0 ? (
      data.map((item) => !item.archived && <Note key={item.id} item={item} />)
    ) : (
      <span>No active notes</span>
    );

  const archivedNotes =
    data.length > 0 ? (
      data.map((item) => item.archived && <Note key={item.id} item={item} />)
    ) : (
      <span>No archived notes</span>
    );

  return (
    <div class="notes-container">
      <h2 className="notes-containerTitle">{title}</h2>
      <div className="notes-containerGrid">
        {title === "Notes" ? activeNotes : archivedNotes}
      </div>
    </div>
  );
};

export default NotesContainer;
