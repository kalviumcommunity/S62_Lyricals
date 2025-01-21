import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleAlbumPage from './components/SingleAlbumPage';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/album" element={<SingleAlbumPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
