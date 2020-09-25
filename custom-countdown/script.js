const dateEl = document.getElementById('date-picker');

const today = new Date().toISOString().split('T')[0];
console.log('today: ', today)
dateEl.setAttribute('min', today);