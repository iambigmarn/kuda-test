import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import "./assets/main.css";
import { JoinKuda } from './pages/joinKuda';
import { SignIn } from './pages/signIn';

function App() {
  return (
    <Router basename="/kuda-test">
      <Routes>
        <Route path="/" component={<HomePage/>}/>
        <Route path="/joinKuda" component={<JoinKuda/>}/>
        <Route path="/signIn" component={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
