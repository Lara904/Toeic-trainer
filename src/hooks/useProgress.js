/**
 * useProgress — persistance locale complète (localStorage)
 *
 * Structure stockée :
 * {
 *   training: [{ id, title, part, skill, correct, total, date }],
 *   testBlanc: [{ correct, total, byPart: {1:{c,t}, ...}, date }],
 *   flashcards: { [deckId]: { mastered: [...card.en], reviewed: number, lastDate } }
 * }
 */

import { useCallback, useEffect, useState } from 'react';

const KEY = 'toeic-progress-v2';

const DEFAULT = { training: [], testBlanc: [], flashcards: {} };

const read = () => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...DEFAULT, ...JSON.parse(raw) } : { ...DEFAULT };
  } catch {
    return { ...DEFAULT };
  }
};

const write = (data) => {
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* quota */ }
};

const useProgress = () => {
  const [data, setData] = useState(() => read());

  // Sync vers localStorage à chaque changement
  useEffect(() => { write(data); }, [data]);

  /* ── Exercices d'entraînement ──────────────────────────────────────────── */
  const saveTraining = useCallback((id, title, part, skill, correct, total) => {
    setData((prev) => ({
      ...prev,
      training: [
        ...prev.training,
        { id, title, part, skill, correct, total, date: new Date().toISOString() },
      ],
    }));
  }, []);

  /* ── Test blanc ────────────────────────────────────────────────────────── */
  const saveTestBlanc = useCallback((correct, total, byPart) => {
    setData((prev) => ({
      ...prev,
      testBlanc: [
        ...prev.testBlanc,
        { correct, total, byPart, date: new Date().toISOString() },
      ],
    }));
  }, []);

  /* ── Flashcards ─────────────────────────────────────────────────────────
   * mastered = tableau des card.en des cartes maîtrisées dans ce deck
   * reviewed = nombre total de cartes vues cette session
   */
  const saveFlashcardSession = useCallback((deckId, masteredCards, total) => {
    setData((prev) => {
      const existing = prev.flashcards[deckId] || { mastered: [], reviewed: 0 };
      // Ajoute les nouvelles cartes maîtrisées sans doublons
      const masteredSet = new Set([...existing.mastered, ...masteredCards.map((c) => c.en)]);
      return {
        ...prev,
        flashcards: {
          ...prev.flashcards,
          [deckId]: {
            mastered:  [...masteredSet],
            reviewed:  existing.reviewed + total,
            lastDate:  new Date().toISOString(),
          },
        },
      };
    });
  }, []);

  const resetFlashcardDeck = useCallback((deckId) => {
    setData((prev) => {
      const next = { ...prev.flashcards };
      delete next[deckId];
      return { ...prev, flashcards: next };
    });
  }, []);

  /* ── Réinitialisation globale ──────────────────────────────────────────── */
  const resetAll = useCallback(() => setData({ ...DEFAULT }), []);

  /* ── Helpers lecture ───────────────────────────────────────────────────── */
  const trainingStatsByPart = useCallback(() => {
    const stats = {};
    data.training.forEach(({ part, correct, total }) => {
      if (!stats[part]) stats[part] = { attempts: 0, correct: 0, total: 0 };
      stats[part].attempts += 1;
      stats[part].correct  += correct;
      stats[part].total    += total;
    });
    return stats;
  }, [data.training]);

  const lastTestBlanc = data.testBlanc.at(-1) ?? null;

  const flashcardProgress = useCallback((deckId, totalCards) => {
    const d = data.flashcards[deckId];
    if (!d) return { masteredCount: 0, totalCards, pct: 0 };
    return {
      masteredCount: d.mastered.length,
      totalCards,
      pct: Math.round((d.mastered.length / totalCards) * 100),
      lastDate: d.lastDate,
    };
  }, [data.flashcards]);

  return {
    // données brutes
    trainingHistory: data.training,
    testBlancHistory: data.testBlanc,
    flashcardsData: data.flashcards,
    // actions
    saveTraining,
    saveTestBlanc,
    saveFlashcardSession,
    resetFlashcardDeck,
    resetAll,
    // helpers
    trainingStatsByPart,
    lastTestBlanc,
    flashcardProgress,
  };
};

export default useProgress;