import CountrieView from "./views/countrieView/CountrieView";
import { BrowserRouter,
  Routes,
  Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CountrieView />}>
      
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
