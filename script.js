const quotes = document.getElementById('quotes');
//get element by ID 'quotes'

const author = document.getElementById('author');
// get element by ID 'author'

const newQuote = document.getElementById('newQuote');
// get element by ID 'newQuote'
console.log(newQuote)

const postTweet = document.getElementById('twitter');
// get element by ID 'twitter'

let realdata = "";
// initialize the empty variable 'realdata'

// console.log(fetchQuote)

const tweet = () => {
  let tweets = `https://twitter.com/intent/tweet?text=${quotes.innerText}`;
  // assign a URL with the text of 'quotes' element to 'tweets'
  const tweetWindow = window.open(tweets);
  // open a new window with 'tweets' URL

  tweetWindow.onload = () => {
    // onload event for 'tweetWindow'
    const tweetElements = tweetWindow.document.querySelectorAll('.tweet');
    // select all elements with class 'tweet'
    for (let i = 0; i < tweetElements.length; i++) {
    // loop through all 'tweetElements'
      tweetElements[i].style.position = 'relative';
    // set the CSS property 'position' to 'relative'
    }
  };
};

const fetchQuote = async () => {
    // declare an asynchronous function 'fetchQuote'
  const api = `https://api.quotable.io/random`;
    // assign a URL to the variable 'api'
  try {
    let data = await fetch(api);
    // fetch data from the URL assigned to 'api'
    realdata = await data.json();
    // convert data to JSON format and assign to 'realdata'
    
    console.log(realdata);//please show me something 😭
    console.log(realdata.length);
    console.log(realdata.content);
    console.log(realdata.author);


    quotes.innerText = `${realdata.content} `;
    // set the value of 'quotes' element to the 'content' field of 'realdata'
    author.innerHTML = `- ${realdata.author}`;
    // set the value of 'author' element to the 'author' field of 'realdata'
  } catch (error) {
    // if an error occurs, do nothing

  }
};

newQuote.addEventListener("click", fetchQuote);
postTweet.addEventListener("click", tweet);

fetchQuote();

/*
The code above initializes a variable named "realdata" that is empty.

It defines the variables "quotes," "author," "newQuote," and "postTweet." 

The "tweet" function creates a new window in which all elements with class "tweet" are set to have the CSS property "position" set to "relative" and includes a URL with the text of the "quotes" element. 

The 'fetchQuote' function retrieves data from a URL, formats it as JSON, and assigns values for the 'quotes' and 'author' elements to the corresponding fields in the output data. 

The click event listeners on the "newQuote" and "postTweet" components call the "fetchQuote" and "tweet" functions, respectively. The 'fetchQuote' function is then called.
*/