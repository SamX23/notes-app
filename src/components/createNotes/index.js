import { useState } from "react";
import getCurrentDate from "../../utils/currentDate";
import "./style.css";

const CreateNotes = ({ setData }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [archived, setArchived] = useState(false);

  const onChangeTitleListener = (e) => {
    e.preventDefault();

    setTitle(e.currentTarget.value);
  };

  const onChangeBodyListener = (e) => setBody(e.currentTarget.value);

  const onChangeArchivedListener = (e) => setArchived(e.currentTarget.checked);

  const onSubmitListener = (e) => {
    e.preventDefault();

    const newData = {
      id: getCurrentDate() + 1,
      title: title,
      body: body,
      createdAt: getCurrentDate(),
      archived: archived,
    };

    setData((state) => [...state, newData]);
  };

  return (
    <div id="create-notes" className="notes__form">
      <form onSubmit={onSubmitListener}>
        <div className="notes__formGroup">
          <label htmlFor="notes-title">Title</label>
          <input
            type="text"
            maxLength="50"
            id="notes-title"
            value={title}
            placeholder="Title"
            onChange={onChangeTitleListener}
          />
        </div>
        <div className="notes__formGroup">
          <label htmlFor="notes-desc">Description</label>
          <textarea
            rows="1"
            id="notes-desc"
            value={body}
            placeholder="Take a note..."
            onChange={onChangeBodyListener}
          ></textarea>
        </div>

        <div className="notes__formFooter">
          <div className="notes__formCheckbox">
            <label htmlFor="notes-archive">Archive</label>
            <input
              type="checkbox"
              id="notes-archive"
              checked={archived}
              onChange={onChangeArchivedListener}
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateNotes;
