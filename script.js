// JS Fix #1 Line 1 getElementById requires the keyword document in front
document.getElementById('funFactButton') // JS Fix #2 Line 2 the ID name is incorrect -  original: funfactButton // funFactButton
  .addEventListener('click', function() {
  const funFact = document.getElementById('funFact'); // JS Fix #3 Line 4 the ID name is incorrect - funfact
  if (funFact.style.display === 'none') {
      funFact.style.display = 'block';
  } else {
      funFact.style.display = 'none';
  }
});