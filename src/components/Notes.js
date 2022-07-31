import toastSuccess from "../utils/toastify";
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

  const onDelete = (id) => {
    setData(data.filter((note) => note.id !== id));
    toastSuccess("Notes deleted!");
  };

  return (
    <>
      <NotesContainer
        title="Notes"
        data={getActiveNotes()}
        setData={setData}
        onDelete={onDelete}
      />

      {/* Sengaja dihide jika tidak ada archived notes demi UX yang lebih baik, menurut saya */}
      {getArchivedNotes().length > 0 && (
        <NotesContainer
          title="Archives"
          data={getArchivedNotes()}
          setData={setData}
          onDelete={onDelete}
        />
      )}
    </>
  );
};

export default Notes;
