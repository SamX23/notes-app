import ActiveNotes from "./ActiveNotes";
import ArchivedNotes from "./ArchivedNotes";

const Notes = ({ data }) => {
  return (
    <div className="container">
      <ActiveNotes data={data} />
      <ArchivedNotes data={data} />
    </div>
  );
};

export default Notes;
