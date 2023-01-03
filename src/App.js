import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Check from './Assessment';
import Startpage from './Startpage';
import { BrowserRouter} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
    <Route path='/' element={<Startpage />} />
    <Route path='/quiz' element={<Main />} />
    <Route path='/assessment' element={<Check />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
