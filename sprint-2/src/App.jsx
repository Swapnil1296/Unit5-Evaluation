import {AddStudent} from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import "./App.css"

function App() {
  return (
    <div className="App">
      <button onClick={() => <AddStudent />} className="togglebtn">
        add New students
      </button>
      <AddStudent />
      <br />
      <ShowStudents />

      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
