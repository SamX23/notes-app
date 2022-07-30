import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faArrowUpFromBracket,
  faArchive,
} from "@fortawesome/free-solid-svg-icons";
import formattedDate from "../../utils/formattedDate";
import Card from "../card";
import "./style.css";

const Note = ({ item, onDelete, setUnArchive, setArchive }) => {
  const { id, title, body, createdAt, archived } = item;

  return (
    <Card>
      <h3 className="note-title">{title}</h3>
      <h4 className="note-date">{formattedDate(createdAt)}</h4>
      <p className="note-description">{body}</p>
      <div className="note-btnGroup">
        {archived ? (
          <button
            className="note-archiveBtn"
            onClick={() => setUnArchive(id)}
            title="Un Archive"
          >
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </button>
        ) : (
          <button
            className="note-archiveBtn"
            onClick={() => setArchive(id)}
            title="Archive"
          >
            <FontAwesomeIcon icon={faArchive} />
          </button>
        )}
        <button
          className="note-deleteBtn"
          onClick={() => onDelete(id)}
          title="Delete"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </Card>
  );
};

export default Note;
