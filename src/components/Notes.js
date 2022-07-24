import NotesContainer from "./notesContainer";

const Notes = ({ data }) => {
  return (
    <>
      <NotesContainer title="Notes" data={data} />
      <NotesContainer title="Archives" data={data} />
    </>
  );
};

export default Notes;
