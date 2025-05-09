import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import JP from './pages/jp'
import SK from './pages/sk'
import USA from './pages/usa'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usa" element={<USA />} />
      <Route path="/sk" element={<SK />} />
      <Route path="/jp" element={<JP />} />
    </Routes>
  );
}

export default App;
