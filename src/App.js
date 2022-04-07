import './App.css';
// import { Navbar } from '../../../new1/Evaluationu-3/src/Components/Navbar';
import { Navbar } from "./Components/Navbar";
import { Routes, Route} from "react-router-dom";
import { Offers } from "./Components/Offers";
import { Location } from "./Components/Location"
import { Help } from './Components/Help';
import { Search } from './Components/Search';
import { Signin } from './Components/Signin';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/location" element={<Location />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/help' element={<Help />} />
        <Route path='/search' element={<Search />} />
        <Route path='signin' element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
