import './App.css';
import { BrowserRouter,Routes} from 'react-router-dom';
import { Route } from 'react-router';
import Single from "./components/Single"
import Main from './components/Main';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/single/:imdbID' element={<Single/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
