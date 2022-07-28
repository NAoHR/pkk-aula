import Main from "./pages/Main";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="aula" element={<p>page aula</p>} />
      <Route path="invoices" element={<p>qweqwe</p>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
