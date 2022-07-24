import NotesContainer from "./noteContainer";

const Notes = ({ data }) => {
  return (
    <div className="container">
      <NotesContainer title="Notes" data={data} />
      <NotesContainer title="Archives" data={data} />
    </div>
  );
};

export default Notes;
