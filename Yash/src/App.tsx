import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
