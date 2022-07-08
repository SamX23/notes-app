import { useEffect, useState } from "react";
import getInitialData from "../../utils/data";
import CreateNotes from "../CreateNotes";
import Notes from "../Notes";

const Main = () => {
  const [data, setData] = useState(getInitialData());

  return (
    <main>
      <CreateNotes setData={setData} />
      <Notes data={data} />
    </main>
  );
};

export default Main;
