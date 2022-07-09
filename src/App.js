import logo from './logo.svg';
import './App.css';
import Test from './Pages/Test.tsx';
import DialogueHandler from './Pages/DialogueHandler.tsx';
import ChatMessages from './Pages/ChatMessages.tsx';
import LocFinder from './Pages/LocFinder';
import {
  BrowserRouter,
  Route,
  Routes,
  Router,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter basename="/">
        <Routes>
        <Route path={'/'} element={<ChatMessages />} exact />
        <Route exact path={'/:id'} element={<ChatMessages />}/>
      </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
