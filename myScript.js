  var quotes = [
    'The only true wisdom is in knowing you know nothing. - Socrates',
    'Everything has beauty, but not everyone sees it. - Confucius',
    'Do all things with love. - Og Mandino',
    'Where there is love there is life. - Mahatma Gandhi'
  ]

    function myFunction() {
      var randomNumber = Math.floor(Math.random() * (quotes.length));
      document.getElementById("demo").innerHTML = quotes[randomNumber];
  }