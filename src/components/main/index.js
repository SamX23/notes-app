import { useState } from "react";
import getInitialData from "../../utils/data";
import CreateNotes from "../createNotes";
import Notes from "../Notes";
import toastSuccess from "../../utils/toastify";
import "./style.css";

const Main = () => {
  const [data, setData] = useState(getInitialData());
  const onDelete = (id) => {
    setData(data.filter((note) => note.id !== id));
    toastSuccess("Notes deleted!");
  };

  return (
    <main>
      <div className="form-container">
        <CreateNotes setData={setData} />
      </div>
      <Notes data={data} onDelete={onDelete} />
    </main>
  );
};

export default Main;
