import { useState } from "react";
import getInitialData from "../../utils/data";
import CreateNotes from "../createNotes";
import Notes from "../Notes";
import "./style.css";

const Main = () => {
  const [data, setData] = useState(getInitialData());

  return (
    <main>
      <div className="form-container">
        <CreateNotes setData={setData} />
      </div>
      <Notes data={data} />
    </main>
  );
};

export default Main;
