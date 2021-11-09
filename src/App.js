import './App.css';
import Homepage from './components/Pages/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import Listpage from './components/Pages/Listpage/Listpage';
import LinkButton from './components/Layout/Links/Link';

function App() {
  return (
    <>
        <LinkButton />
        <Routes>
          <Route path="/" exact element={<Homepage />}  />
          <Route path="/listpage" element={<Listpage />} />
        </Routes>
    </>
  );
}

export default App;
