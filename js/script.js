const quotes = [
    {
    quote:"Imagination is more important than knowledge.",
    source: "Albert Einstein",
    citation:"The Saturday Evening Post",
    year: 1929
  },
  {
    quote:"All our dreams can come true, if we have the courage to pursue them.",
    source: "Walt Disney",
    citation:"Life",
    year: 1942
  },
  {
    quote:"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
    source: "Nelson Mandela",
    citation:"Release from prison",
    year: 1990
  },
  {
    quote:"Whether you think you can, or you think you can't, you're probably right.",
    source: "Henry Ford",
    citation:"Ford News, p. 2.",
    year: 1924
  },
  {
    quote:"It is not in the stars to hold our destiny but in ourselves.",
    source: "William Shakespeare",
    citation:"Globe Theatre",
    year: 1602
  },
  {
    quote:"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
    source: "Earl Nightingale",
    citation:"Life",
    year: 1952
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
    source: "Mark Twain",
    citation:"Connecticut",
    year: 1893
  }
];

let red;
let green;
let blue;
let randomRGB;

/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
 let randomQuote= Math.floor(Math.random() * quotes.length)
 return quotes[randomQuote];
};

function color () {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
}
/***
 * `printQuote` function
***/
function printQuote() {
 const quoteGenerated = getRandomQuote();
 const message = `<p class='quote'> ${quoteGenerated.quote}</p> 
 <p class='source'>${quoteGenerated.source}</p> 
 <span class='citation'>${quoteGenerated.citation}</span>
 <span class='year'>${quoteGenerated.year}</span>
 `;
    document.getElementById('quote-box').innerHTML = message;
};

/*** 
 * Background Change
* ***/

function color () {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
}
function changeBackground () {
  for(let i= 0; i < quotes.length; i++){
    color()
    randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
    document.body.style.background = randomRGB;
  };
};

let load = document.getElementById('load-quote');
load.addEventListener("click",() =>{
  printQuote()
  changeBackground ()
} );

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let background = setInterval(changeBackground, 5000);
let quote = setInterval(printQuote, 5000);







