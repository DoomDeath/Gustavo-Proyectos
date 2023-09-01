import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Clientes from './pages/Clientes';
import Home from './pages/Home';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Clientes" element={<Clientes/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
