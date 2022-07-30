import CreateNotes from "../createNotes";
import Notes from "../Notes";
import "./style.css";

const Main = ({ data, setData }) => {
  return (
    <main>
      <div className="form-container">
        <CreateNotes setData={setData} />
      </div>
      <Notes data={data} setData={setData} />
    </main>
  );
};

export default Main;
