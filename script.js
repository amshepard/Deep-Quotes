const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newQuote = document.getElementById('newQuote');
const postTweet = document.getElementById('twitter');

let realdata = "";

const tweet = () => {
  let tweets = `https://twitter.com/intent/tweet?text=${quotes.innerText}`;
  const tweetWindow = window.open(tweets);

  tweetWindow.onload = () => {
    const tweetElements = tweetWindow.document.querySelectorAll('.tweet');
    for (let i = 0; i < tweetElements.length; i++) {
      tweetElements[i].style.position = 'relative';
    }
  };
};

const fetchQuote = async () => {
  const api = `https://api.quotable.io/random`;
  try {
    let data = await fetch(api);
    realdata = await data.json();

    quotes.innerText = `${realdata.content} `;
    author.innerHTML = `- ${realdata.author}`;
  } catch (error) {

  }
};

newQuote.addEventListener("click", fetchQuote);
postTweet.addEventListener("click", tweet);

fetchQuote();
