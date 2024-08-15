import UxPage from "./components/UxPage";
import { Routes, Route } from "react-router-dom"
import Mmc from "./components/GoogleProjectPage";

function App() {
  return (
    <div className="App">
    <Routes>
   
      <Route path="/" element={ <UxPage /> } />
      <Route path="mmc-google-project" element={ <Mmc />} />

    </Routes>
  </div>
  );

}

export default App;
