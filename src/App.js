import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import getInitialData from "./utils/data";

function App() {
  const realData = getInitialData();
  const [data, setData] = useState(realData);
  const [query, setQuery] = useState("");

  const filteredData = data.filter((note) => {
    if (query === "") {
      return note;
    } else if (note.title.toLowerCase().includes(query)) {
      return note;
    } else {
      return null;
    }
  });

  return (
    <>
      <Header setQuery={setQuery} />
      <Main data={filteredData} setData={setData} />
      <Footer />
    </>
  );
}

export default App;
