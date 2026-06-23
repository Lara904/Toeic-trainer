// MODIFICATION DE src/App.jsx
// Ajouter l'import lazy de CoursPage et la route /cours

// ─── Avant (lignes existantes) ───────────────────────────────────────────────
// const TrainingPage   = lazy(() => import('./pages/TrainingPage'));
// const TestBlancPage  = lazy(() => import('./pages/TestBlancPage'));
// const FlashcardsPage = lazy(() => import('./pages/FlashcardsPage'));
// const Stats          = lazy(() => import('./pages/Stats'));
// const NotFound       = lazy(() => import('./pages/NotFound'));

// ─── Après — ajouter cette ligne avec les autres imports lazy ────────────────
// const CoursPage      = lazy(() => import('./pages/CoursPage'));

// ─── Dans <Routes>, ajouter cette route ─────────────────────────────────────
// <Route path="/cours" element={<CoursPage />} />

// ─── App.jsx complet avec les modifications ──────────────────────────────────

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

// Chargement différé de toutes les pages lourdes
const TrainingPage   = lazy(() => import('./pages/TrainingPage'));
const TestBlancPage  = lazy(() => import('./pages/TestBlancPage'));
const FlashcardsPage = lazy(() => import('./pages/FlashcardsPage'));
const CoursPage      = lazy(() => import('./pages/CoursPage'));   // ← NOUVEAU
const Stats          = lazy(() => import('./pages/Stats'));
const NotFound       = lazy(() => import('./pages/NotFound'));

const Loader = () => (
  <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-text-muted)' }}>
    Chargement…
  </div>
);

const App = () => (
  <>
    <Navbar />
    <main className="app-main">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/"                   element={<Home />} />
          <Route path="/training/:id"       element={<TrainingPage />} />
          <Route path="/test-blanc"         element={<TestBlancPage />} />
          <Route path="/flashcards"         element={<FlashcardsPage />} />
          <Route path="/flashcards/:deckId" element={<FlashcardsPage />} />
          <Route path="/cours"              element={<CoursPage />} />  {/* ← NOUVEAU */}
          <Route path="/stats"              element={<Stats />} />
          <Route path="*"                   element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  </>
);

export default App;

