import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import getInitialData from "./utils/data";
import toastSuccess from "./utils/toastify";

function App() {
  const realData = getInitialData();
  const [data, setData] = useState(realData);
  const [query, setQuery] = useState("");

  const onDelete = (id) => {
    setData(data.filter((note) => note.id !== id));
    toastSuccess("Notes deleted!");
  };

  const filteredData = data.filter((note) => {
    if (query === "") {
      return note;
    } else if (note.title.toLowerCase().includes(query)) {
      return note;
    }
  });

  return (
    <>
      <Header setQuery={setQuery} />
      <Main data={filteredData} setData={setData} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
