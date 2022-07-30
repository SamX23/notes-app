import NotesContainer from "./notesContainer";

const Notes = ({ data, setData }) => {
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
      <NotesContainer title="Notes" data={getActiveNotes()} setData={setData} />

      {/* Sengaja dihide jika tidak ada archived notes demi UX yang lebih baik, menurut saya */}
      {getArchivedNotes().length > 0 && (
        <NotesContainer
          title="Archives"
          data={getArchivedNotes()}
          setData={setData}
        />
      )}
    </>
  );
};

export default Notes;
