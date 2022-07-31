import toastSuccess from "../../utils/toastify";
import Note from "../note";
import "./style.css";

const NotesContainer = ({ title, data, setData, onDelete }) => {
  const changeArchiveStatus = (id, value) =>
    setData((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id === id) {
          return { ...obj, archived: value };
        }

        return obj;
      });

      return newState;
    });

  const setArchive = (id, title) => {
    changeArchiveStatus(id, true);
    toastSuccess(`${title} moved to Archives!`);
  };

  const setUnArchive = (id, title) => {
    changeArchiveStatus(id, false);
    toastSuccess(`${title} moved to Notes!`);
  };

  return (
    <div className="notes-container">
      {data.length > 0 && <h2 className="notes-containerTitle">{title}</h2>}

      <div className="notes-containerGrid">
        {data.length > 0 ? (
          data.map((item) => (
            <Note
              key={item.id}
              item={item}
              onDelete={onDelete}
              setArchive={setArchive}
              setUnArchive={setUnArchive}
            />
          ))
        ) : (
          <span className="notes-containerEmpty">
            {title} you add appear here
          </span>
        )}
      </div>
    </div>
  );
};

export default NotesContainer;
