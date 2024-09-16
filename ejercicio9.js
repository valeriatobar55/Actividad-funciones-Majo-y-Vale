function saludar(nombre, idioma = 'es') {
    if (idioma === 'es') {
      return `Hola, ${nombre}!`;
    } else if (idioma === 'en') {
      return `Hello, ${nombre}!`;
    } else if (idioma === 'fr') {
      return `Bonjour, ${nombre}!`;
    } else {
      return `Hola, ${nombre}!`; // Por defecto, el saludo es en español
    }
  }
  
  console.log(saludar('Carlos')); // "Hola, Carlos!"
  console.log(saludar('John', 'en')); // "Hello, John!"
  console.log(saludar('Marie', 'fr')); // "Bonjour, Marie!"
  

  const saludarFlecha = (nombre, idioma = 'es') => {
    if (idioma === 'es') {
      return `Hola, ${nombre}!`;
    } else if (idioma === 'en') {
      return `Hello, ${nombre}!`;
    } else if (idioma === 'fr') {
      return `Bonjour, ${nombre}!`;
    } else {
      return `Hola, ${nombre}!`; // Por defecto, el saludo es en español
    }
  };
  
  console.log(saludarFlecha('Carlos')); // "Hola, Carlos!"
  console.log(saludarFlecha('John', 'en')); // "Hello, John!"
  console.log(saludarFlecha('Marie', 'fr')); // "Bonjour, Marie!"
  