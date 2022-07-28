import NotesContainer from "./notesContainer";

const Notes = ({ data, onDelete }) => {
  const getActiveNotes = () => {
    let newData = [];
    data.map((item) => !item.archived && newData.push(item));

    return newData;
  };

  const getArchivedNotes = () => {
    let newData = [];
    data.map((item) => item.archived && newData.push(item));

    return newData;
  };

  return (
    <>
      <NotesContainer
        title="Notes"
        data={getActiveNotes()}
        onDelete={onDelete}
      />
      {getArchivedNotes().length > 0 && (
        <NotesContainer
          title="Archives"
          data={getArchivedNotes()}
          onDelete={onDelete}
        />
      )}
    </>
  );
};

export default Notes;
