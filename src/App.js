import logo from './logo.svg';
import './App.css';
import Test from './Pages/Test';
import LocFinder from './Pages/LocFinder';
import {
  BrowserRouter,
  Route,
  Routes,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HashRouter basename="/">
        <Routes>
        <Route path={'/test'} element={<Test />} />
        <Route path={'/localize'} element={<LocFinder />} />
      </Routes>
    </HashRouter>
      </header>
    </div>
  );
}

export default App;
