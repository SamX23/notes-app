import { useState } from "react";
import getCurrentDate from "../utils/currentDate";

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
    <div id="create-notes">
      <form onSubmit={onSubmitListener}>
        <label htmlFor="notes-title">Title</label>
        <input
          type="text"
          maxLength="50"
          id="notes-title"
          value={title}
          onChange={onChangeTitleListener}
        />

        <label htmlFor="notes-desc">Description</label>
        <textarea
          rows="3"
          id="notes-desc"
          value={body}
          onChange={onChangeBodyListener}
        ></textarea>

        <label htmlFor="notes-archive">Archive</label>
        <input
          type="checkbox"
          id="notes-archive"
          checked={archived}
          onChange={onChangeArchivedListener}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateNotes;
