import "./App.css";
import getInitialData from "./utils/data";
import formattedDate from "./utils/formattedDate";

function App() {
  const data = getInitialData();
  return (
    <>
      <header>
        <div>
          <h1>Notes App</h1>
        </div>
        <div>
          <input type="text" />
        </div>
      </header>
      <main>
        <div id="create-notes">
          <form action="">
            <label htmlFor="notes-title">Title</label>
            <input type="text" maxLength="50" id="notes-title" />

            <label htmlFor="notes-desc">Description</label>
            <textarea rows="3" id="notes-desc"></textarea>

            <label htmlFor="notes-archive">Archive</label>
            <input type="checkbox" id="notes-archive" />

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="container">
          <div className="active-notes">
            <h2>Notes</h2>
            <div className="notes-container">
              {data.map((item) => {
                if (!item.archived) {
                  return (
                    <div key={item.id} className="notes-card">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                      <h4>Created on {formattedDate(item.createdAt)}</h4>
                      <div>
                        <button>Delete</button>
                        <button>Archive</button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="archived-notes">
            <h2>Archive</h2>
            <div className="archive-container">
              {data.map((item) => {
                if (item.archived) {
                  return (
                    <div key={item.id} className="notes-card">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                      <h4>Created on {formattedDate(item.createdAt)}</h4>
                      <div>
                        <button>Delete</button>
                        <button>Un Archive</button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <span>
          Ngoding with
          <span role="img" aria-label="love">
            {" "}
            ♥️{" "}
          </span>
          by <b>Kang Sami</b>
        </span>
      </footer>
    </>
  );
}

export default App;
