import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar";

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
