const saludarPersona = (nombre, idioma = 'es') => {
    if (idioma === 'es') {
      return `Hola, ${nombre}!`;
    } else if (idioma === 'en') {
      return `Hello, ${nombre}!`;
    } else if (idioma === 'fr') {
      return `Bonjour, ${nombre}!`;
    } else {
      return `Hola, ${nombre}!`; // Por defecto en español si el idioma no es reconocido
    }
  };
  
  console.log(saludarPersona('Carlos')); // "Hola, Carlos!"
  console.log(saludarPersona('John', 'en')); // "Hello, John!"
  console.log(saludarPersona('Marie', 'fr')); // "Bonjour, Marie!"
  

