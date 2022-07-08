import formattedDate from "../utils/formattedDate";

const ArchivedNote = ({ item }) => {
  const { title, body, createdAt } = item;

  return (
    <div className="note-card">
      <h3>{title}</h3>
      <p>{body}</p>
      <h4>Created on {formattedDate(createdAt)}</h4>
      <div>
        <button>Delete</button>
        <button>Un Archive</button>
      </div>
    </div>
  );
};

export default ArchivedNote;
