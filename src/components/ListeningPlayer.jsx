import { useState } from 'react';
import useSpeechSynthesis from '../hooks/useSpeechSynthesis';
import { splitIntoWords } from '../utils/text';
import styles from './ListeningPlayer.module.css';

const ListeningPlayer = ({ text }) => {
  const {
    isSupported, voices, isSpeaking, isPaused,
    activeWordIndex, speak, pause, resume, stop,
  } = useSpeechSynthesis();

  const [rate, setRate]               = useState(0.95);
  const [voiceURI, setVoiceURI]       = useState('');
  const [showTranscript, setShowTranscript] = useState(false);

  const words = splitIntoWords(text);

  const handlePlay = () => {
    if (isPaused) { resume(); return; }
    speak(text, { rate, voiceURI: voiceURI || null });
  };

  /* ── Pas de synthèse vocale : on affiche toujours la transcription ────── */
  if (!isSupported) {
    return (
      <div className={styles.player}>
        <div className={styles.noTtsNotice}>
          <span className={styles.noTtsIcon}>📄</span>
          <p>Synthèse vocale non disponible — lisez la transcription ci-dessous.</p>
        </div>
        <div className={styles.transcript}>
          <p>{text}</p>
        </div>
      </div>
    );
  }

  const englishVoices = voices.filter((v) =>
    v.lang.startsWith('en') || v.name.toLowerCase().includes('english')
  );

  return (
    <div className={styles.player}>
      <div className={styles.controls} role="group" aria-label="Contrôles audio">
        <button
          type="button"
          className={styles.playButton}
          onClick={handlePlay}
          disabled={isSpeaking && !isPaused}
          aria-label="Lancer la lecture"
        >
          {isPaused ? '▶ Reprendre' : '▶ Écouter'}
        </button>

        {isSpeaking && !isPaused && (
          <button type="button" onClick={pause} aria-label="Pause">⏸</button>
        )}
        {(isSpeaking || isPaused) && (
          <button type="button" onClick={stop} aria-label="Arrêter">⏹</button>
        )}

        <label className={styles.rateLabel}>
          Vitesse
          <input
            type="range"
            min="0.6" max="1.2" step="0.05"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className={styles.rateSlider}
            aria-label={`Vitesse : ${rate}`}
          />
          <span>{rate.toFixed(2)}×</span>
        </label>

        {englishVoices.length > 1 && (
          <label className={styles.voiceLabel}>
            Voix
            <select
              value={voiceURI}
              onChange={(e) => setVoiceURI(e.target.value)}
              className={styles.voiceSelect}
            >
              <option value="">Voix par défaut</option>
              {englishVoices.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>{v.name}</option>
              ))}
            </select>
          </label>
        )}
      </div>

      <button
        type="button"
        className={styles.toggle}
        onClick={() => setShowTranscript((v) => !v)}
        aria-expanded={showTranscript}
      >
        {showTranscript ? '▲ Masquer la transcription' : '▼ Afficher la transcription'}
      </button>

      {showTranscript && (
        <p className={styles.transcript}>
          {words.map((word, i) => (
            <span
              key={i}
              className={i === activeWordIndex ? styles.activeWord : undefined}
            >
              {word}{' '}
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default ListeningPlayer;
