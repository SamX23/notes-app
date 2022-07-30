import CreateNotes from "../createNotes";
import Notes from "../Notes";
import "./style.css";

const Main = ({ data, setData, onDelete }) => {
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
