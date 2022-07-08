import ArchivedNote from "./ArchivedNote";

const ArchivedNotes = ({ data }) => {
  return (
    <div className="archived-notes">
      <h2>Archive</h2>
      <div className="archive-container">
        {data.length > 0 ? (
          data.map(
            (item) =>
              item.archived && <ArchivedNote key={item.id} item={item} />
          )
        ) : (
          <span>No archived notes</span>
        )}
      </div>
    </div>
  );
};

export default ArchivedNotes;
