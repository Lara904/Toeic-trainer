// Découpe un texte en mots avec leurs positions (index de début/fin)
// dans la chaîne d'origine. Utilisé pour surligner le mot en cours de
// lecture pendant la synthèse vocale.
export const splitIntoWords = (text) => {
  const words = [];
  const regex = /\S+/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    words.push({ text: match[0], start: match.index, end: match.index + match[0].length });
  }
  return words;
};
