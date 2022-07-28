import { useState } from "react";
import getInitialData from "../../utils/data";
import CreateNotes from "../createNotes";
import Notes from "../Notes";
import { toast } from "react-toastify";
import "./style.css";

const Main = () => {
  const [data, setData] = useState(getInitialData());
  const onDelete = (id) => {
    setData(data.filter((note) => note.id !== id));

    toast.success("Notes deleted!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
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
