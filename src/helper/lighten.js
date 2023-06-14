
// Fonction qui reproduit le comportement de lighten (dispo uniquement en SCSS)

function lighten(colorrHex, percentage) {
    // Convertir la couleur hexadécimale en valeurs RVB
    const r = parseInt(colorrHex.substr(1, 2), 16);
    const g = parseInt(colorrHex.substr(3, 2), 16);
    const b = parseInt(colorrHex.substr(5, 2), 16);
  
    // Augmenter la luminosité de chaque composante RVB
    const rLighter = Math.round(r + (255 - r) * (percentage / 100));
    const gLighter = Math.round(g + (255 - g) * (percentage / 100));
    const bLighter = Math.round(b + (255 - b) * (percentage / 100));
  
    // Convertir les valeurs RVB en une nouvelle couleur hexadécimale
    const lightenedColor = `#${rLighter.toString(16)}${gLighter.toString(16)}${bLighter.toString(16)}`;
  
    return lightenedColor;
}

export default lighten;