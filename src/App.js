import { HashRouter as Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import "./assets/main.css";
import { JoinKuda } from './pages/joinKuda';
import { SignIn } from './pages/signIn';

function App() {
  return (
    <HashRouter basename="/kuda-test">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/joinKuda" element={<JoinKuda/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
