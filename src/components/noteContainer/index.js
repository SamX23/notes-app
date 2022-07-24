import Note from "../note";

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
    <div className="active-notes">
      <h2>{title}</h2>
      <div className="notes-container">
        {title == "Notes" ? activeNotes : archivedNotes}
      </div>
    </div>
  );
};

export default NotesContainer;
