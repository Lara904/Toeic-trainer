import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'toeic-trainer-progress';

const readHistory = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

// Suivi de progression 100% local (localStorage), comme un mini "studyStats".
// Chaque tentative est enregistrée avec : exercice, partie, score, date.
const useProgress = () => {
  const [history, setHistory] = useState(() => readHistory());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const recordAttempt = useCallback((drill, correctCount) => {
    const entry = {
      drillId: drill.id,
      title: drill.title,
      part: drill.part,
      skill: drill.skill,
      total: drill.questions.length,
      correct: correctCount,
      date: new Date().toISOString(),
    };
    setHistory((prev) => [...prev, entry]);
  }, []);

  const resetHistory = useCallback(() => setHistory([]), []);

  const getStatsByPart = useCallback(() => {
    const stats = {};
    history.forEach((entry) => {
      if (!stats[entry.part]) {
        stats[entry.part] = { attempts: 0, correct: 0, total: 0 };
      }
      stats[entry.part].attempts += 1;
      stats[entry.part].correct += entry.correct;
      stats[entry.part].total += entry.total;
    });
    return stats;
  }, [history]);

  return { history, recordAttempt, resetHistory, getStatsByPart };
};

export default useProgress;
