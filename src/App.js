import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import "./assets/main.css";
import { JoinKuda } from './pages/joinKuda';
import { SignIn } from './pages/signIn';

function App() {
  return (
    <Router basename="/kuda-test">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/kuda-test" element={<HomePage />}/>
        <Route path="/joinKuda" element={<JoinKuda/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
