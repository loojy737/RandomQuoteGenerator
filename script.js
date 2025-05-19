
quotes = []

var quote = document.getElementById("quote-content");
var quoteAuthor = document.getElementById("quote-author");

function InitializeQuotesArray() {
    quotes = [
    {
      "quote": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs"
    },
    {
      "quote": "In the middle of every difficulty lies opportunity.",
      "author": "Albert Einstein"
    },
    {
      "quote": "Life is what happens when you're busy making other plans.",
      "author": "John Lennon"
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "author": "Winston Churchill"
    },
    {
      "quote": "The future belongs to those who believe in the beauty of their dreams.",
      "author": "Eleanor Roosevelt"
    },
    {
      "quote": "Be yourself; everyone else is already taken.",
      "author": "Oscar Wilde"
    },
    {
      "quote": "You miss 100% of the shots you don't take.",
      "author": "Wayne Gretzky"
    },
    {
      "quote": "Do not watch the clock. Do what it does. Keep going.",
      "author": "Sam Levenson"
    },
    {
      "quote": "The best way to predict the future is to create it.",
      "author": "Peter Drucker"
    },
    {
      "quote": "It does not matter how slowly you go as long as you do not stop.",
      "author": "Confucius"
    },
    {
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      "author": "Nelson Mandela"
    },
    {
      "quote": "Your time is limited, don't waste it living someone else's life.",
      "author": "Steve Jobs"
    },
    {
      "quote": "The only thing we have to fear is fear itself.",
      "author": "Franklin D. Roosevelt"
    },
    {
      "quote": "To be or not to be, that is the question.",
      "author": "William Shakespeare"
    },
    {
      "quote": "I think, therefore I am.",
      "author": "René Descartes"
    },
    {
      "quote": "That which does not kill us makes us stronger.",
      "author": "Friedrich Nietzsche"
    },
    {
      "quote": "The journey of a thousand miles begins with one step.",
      "author": "Lao Tzu"
    },
    {
      "quote": "Happiness depends upon ourselves.",
      "author": "Aristotle"
    },
    {
      "quote": "Knowledge is power.",
      "author": "Francis Bacon"
    },
    {
      "quote": "The unexamined life is not worth living.",
      "author": "Socrates"
    },
    {
      "quote": "Where there is love, there is life.",
      "author": "Mahatma Gandhi"
    },
    {
      "quote": "Simplicity is the ultimate sophistication.",
      "author": "Leonardo da Vinci"
    },
    {
      "quote": "No one can make you feel inferior without your consent.",
      "author": "Eleanor Roosevelt"
    },
    {
      "quote": "If you want to lift yourself up, lift up someone else.",
      "author": "Booker T. Washington"
    },
    {
      "quote": "The only limit to our realization of tomorrow is our doubts of today.",
      "author": "Franklin D. Roosevelt"
    },
    {
      "quote": "Do what you can, with what you have, where you are.",
      "author": "Theodore Roosevelt"
    },
    {
      "quote": "Strive not to be a success, but rather to be of value.",
      "author": "Albert Einstein"
    },
    {
      "quote": "The mind is everything. What you think you become.",
      "author": "Buddha"
    },
    {
      "quote": "We become what we think about.",
      "author": "Earl Nightingale"
    },
    {
      "quote": "The best revenge is massive success.",
      "author": "Frank Sinatra"
    },
    {
      "quote": "Whether you think you can or you think you can't, you're right.",
      "author": "Henry Ford"
    },
    {
      "quote": "Life is 10% what happens to me and 90% how I react to it.",
      "author": "Charles R. Swindoll"
    },
    {
      "quote": "You must be the change you wish to see in the world.",
      "author": "Mahatma Gandhi"
    },
    {
      "quote": "Believe you can and you're halfway there.",
      "author": "Theodore Roosevelt"
    },
    {
      "quote": "It always seems impossible until it's done.",
      "author": "Nelson Mandela"
    },
    {
      "quote": "Don't count the days, make the days count.",
      "author": "Muhammad Ali"
    },
    {
      "quote": "Act as if what you do makes a difference. It does.",
      "author": "William James"
    },
    {
      "quote": "The only person you are destined to become is the person you decide to be.",
      "author": "Ralph Waldo Emerson"
    },
    {
      "quote": "Everything has beauty, but not everyone sees it.",
      "author": "Confucius"
    },
    {
      "quote": "Perfection is not attainable, but if we chase perfection we can catch excellence.",
      "author": "Vince Lombardi"
    },
    {
      "quote": "If you look at what you have in life, you'll always have more.",
      "author": "Oprah Winfrey"
    },
    {
      "quote": "The two most important days in your life are the day you are born and the day you find out why.",
      "author": "Mark Twain"
    },
    {
      "quote": "You can't blame gravity for falling in love.",
      "author": "Albert Einstein"
    },
    {
      "quote": "A person who never made a mistake never tried anything new.",
      "author": "Albert Einstein"
    },
    {
      "quote": "The only true wisdom is in knowing you know nothing.",
      "author": "Socrates"
    },
    {
      "quote": "The man who moves a mountain begins by carrying away small stones.",
      "author": "Confucius"
    },
    {
      "quote": "If you tell the truth, you don't have to remember anything.",
      "author": "Mark Twain"
    },
    {
      "quote": "Not all those who wander are lost.",
      "author": "J.R.R. Tolkien"
    },
    {
      "quote": "The purpose of our lives is to be happy.",
      "author": "Dalai Lama"
    },
    {
      "quote": "Stay hungry, stay foolish.",
      "author": "Steve Jobs"
    }
    ]

}
InitializeQuotesArray();


function GetRandomQuote() {
    var randomQuoteIndex = Math.floor(Math.random() * quotes.length);

    var quote = {
        quoteContent: quotes[randomQuoteIndex]["quote"],
        quoteAuthor: quotes[randomQuoteIndex]["author"]
    };

    return quote;
}


function ApplyRandomQuote() {
    var randomQuote = GetRandomQuote();
    quote.textContent  = randomQuote.quoteContent;
    quoteAuthor.textContent  = randomQuote.quoteAuthor;
}


