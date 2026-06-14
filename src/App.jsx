import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TrainingPage from './pages/TrainingPage';
import TestBlancPage from './pages/TestBlancPage';
import FlashcardsPage from './pages/FlashcardsPage';
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';

const App = () => (
  <>
    <Navbar />
    <main className="app-main">
      <Routes>
        <Route path="/"                   element={<Home />} />
        <Route path="/training/:id"       element={<TrainingPage />} />
        <Route path="/test-blanc"         element={<TestBlancPage />} />
        <Route path="/flashcards"         element={<FlashcardsPage />} />
        <Route path="/flashcards/:deckId" element={<FlashcardsPage />} />
        <Route path="/stats"              element={<Stats />} />
        <Route path="*"                   element={<NotFound />} />
      </Routes>
    </main>
  </>
);

export default App;
