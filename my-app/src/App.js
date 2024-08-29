import UxPage from "./components/UxPage";
import { Routes, Route } from "react-router-dom"
import Mmc from "./components/GoogleProjectPage";
import RepMe from "./components/RepMe";
import Siemens from "./components/Siemens";

function App() {
  return (
    <div className="App">
    <Routes>
   
      <Route path="/" element={ <UxPage /> } />
      <Route path="mmc-google-project" element={ <Mmc />} />
      <Route path="represent-me-app" element={ <RepMe />} />
      <Route path="siemens-case-study" element={ <Siemens />} />



    </Routes>
  </div>
  );

}

export default App;
