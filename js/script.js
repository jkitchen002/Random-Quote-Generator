let quotes = [
    {
    quote:"Imagination is more important than knowledge.",
    source: "Albert Einstein"
  },
  {
    quote:"All our dreams can come true, if we have the courage to pursue them.",
    source: "Walt Disney"
  },
  {
    quote:"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
    source: "Nelson Mandela"
  },
  {
    quote:"Whether you think you can, or you think you can't, you're probably right.",
    source: "Henry Ford"
  },
  {
    quote:"It is not in the stars to hold our destiny but in ourselves.",
    source: "William Shakespeare"
  },
  {
    quote:"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
    source: "Earl Nightingale"
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
    source: "Mark Twain"
  }
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
 let randomQuote= Math.floor(Math.random() * quotes.length)
 return randomQuote;
};

/***
 * `printQuote` function
***/

function printQuote() {
 let quoteGenerated = getRandomQuote();
 return quoteGenerated
 let html = `<p class="quote"> ${quoteGenerated.quote} </p><p class="source"> ${quoteGenerated.source} </p>`
};

console.log(printQuote)



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);