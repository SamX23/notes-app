import ActiveNote from "./ActiveNote";

const ActiveNotes = ({ data }) => {
  return (
    <div className="active-notes">
      <h2>Notes</h2>
      <div className="notes-container">
        {data.length > 0 ? (
          data.map(
            (item) => !item.archived && <ActiveNote key={item.id} item={item} />
          )
        ) : (
          <span>No active notes</span>
        )}
      </div>
    </div>
  );
};

export default ActiveNotes;
