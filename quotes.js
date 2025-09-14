fetch('https://stoic.tekloon.net/stoic-quote')
  .then(response => response.json())
  .then(quotes => {
    const quotedata = quotes.data.quote; // access quote directly
    const quotesele = document.getElementById('quotesele'); // fixed id typo
    quotesele.innerHTML = quotedata; // show author too
  })
  // .catch(err => console.error(err));