import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Form />} />
        <Route path="/expenses" element={<Table />} />
      </Routes>
    </Router>
  );
}

export default App;
