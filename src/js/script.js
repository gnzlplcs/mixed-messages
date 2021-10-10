import { quotes } from './quotes.js';

function getRandomQuote(quotes) {
  const randIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randIndex];
}

function renderQuote(quotes) {
  let quote = getRandomQuote(quotes);
  const renderQuote = `
    <p class="quote-paragraph">${quote['text']}</p>
    <p class="author-paragraph">—${quote['author']}</p>
  `;
  document.getElementById('app').innerHTML = renderQuote;
};

function start() {
  window.addEventListener('load', () => {
    renderQuote(quotes);
  })

}

start()