import { useState } from "react";
import getCurrentDate from "../../utils/currentDate";
import Card from "../card";
import "./style.css";

const CreateNotes = ({ setData }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [archived, setArchived] = useState(false);
  const [visibilityClass, setVisibilityClass] = useState("notes__portable");
  const [currentTitleLength, setCurrentTitleLength] = useState(0);
  const [currentDescLength, setCurrentDescLength] = useState(0);

  let titleLength = 35;
  let descLength = 1500;

  const onChangeTitleListener = (e) => {
    e.preventDefault();
    const inputLength = e.currentTarget.value.length;

    if (inputLength <= titleLength) {
      setCurrentTitleLength(inputLength);
      setTitle(e.currentTarget.value);
    }
  };

  const onChangeBodyListener = (e) => {
    const inputLength = e.currentTarget.value.length;

    e.currentTarget.style.height = "auto";
    e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";

    if (inputLength <= descLength) {
      setCurrentDescLength(inputLength);
      setBody(e.currentTarget.value);
    }
  };

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

    if (body.length !== 0) {
      setData((state) => [...state, newData]);
      setTitle("");
      setBody("");
      setArchived(false);
      setVisibilityClass("notes__portable");
    }
  };

  return (
    <Card id="create-notes">
      <form
        onSubmit={onSubmitListener}
        className={`notes__form ${visibilityClass}`}
      >
        <div className="notes__formGroup">
          <label htmlFor="notes-title">Title</label>
          <input
            type="text"
            id="notes-title"
            value={title}
            placeholder="Title"
            onChange={onChangeTitleListener}
          />
          <span className="counter">
            {currentTitleLength}/{titleLength}
          </span>
        </div>

        <div className="notes__formGroup">
          <label htmlFor="notes-desc">Description</label>
          <textarea
            rows="1"
            id="notes-desc"
            value={body}
            placeholder="Take a note..."
            onChange={onChangeBodyListener}
            onFocus={() => setVisibilityClass("")}
          ></textarea>
          <span className="counter">
            {currentDescLength}/{descLength}
          </span>
        </div>

        <div className="notes__formFooter">
          <div className="notes__formCheckbox">
            <label htmlFor="notes-archive">Archive ?</label>
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
    </Card>
  );
};

export default CreateNotes;
