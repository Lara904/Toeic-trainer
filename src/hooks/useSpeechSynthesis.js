import { useCallback, useEffect, useRef, useState } from 'react';
import { splitIntoWords } from '../utils/text';

const useSpeechSynthesis = () => {
  const [voices, setVoices] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const wordsRef = useRef([]);
  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  useEffect(() => {
    if (!isSupported) return;

    const loadVoices = () => {
      const available = window.speechSynthesis.getVoices();
      // On privilégie les voix anglaises pour un entraînement TOEIC
      const english = available.filter((voice) => voice.lang?.toLowerCase().startsWith('en'));
      setVoices(english.length > 0 ? english : available);
    };

    loadVoices();
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
  }, [isSupported]);

  const speak = useCallback(
    (text, { rate = 0.95, voiceURI = null, onEnd = null } = {}) => {
      if (!isSupported) return;

      window.speechSynthesis.cancel();
      wordsRef.current = splitIntoWords(text);
      setActiveWordIndex(-1);

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = rate;

      if (voiceURI) {
        const voice = voices.find((v) => v.voiceURI === voiceURI);
        if (voice) utterance.voice = voice;
      }

      utterance.onboundary = (event) => {
        if (event.name !== 'word') return;
        const index = wordsRef.current.findIndex(
          (word) => event.charIndex >= word.start && event.charIndex < word.end
        );
        if (index !== -1) setActiveWordIndex(index);
      };

      utterance.onstart = () => {
        setIsSpeaking(true);
        setIsPaused(false);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
        setActiveWordIndex(-1);
        if (onEnd) onEnd();
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };

      window.speechSynthesis.speak(utterance);
    },
    [isSupported, voices]
  );

  const pause = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
  }, [isSupported]);

  const resume = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.resume();
    setIsPaused(false);
  }, [isSupported]);

  const stop = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    setActiveWordIndex(-1);
  }, [isSupported]);

  return {
    isSupported,
    voices,
    isSpeaking,
    isPaused,
    activeWordIndex,
    speak,
    pause,
    resume,
    stop,
  };
};

export default useSpeechSynthesis;
