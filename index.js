
const quoteList = [
    {
        quote: "Life is about making an impact, not making an income.",
        name: "--Kevin Kruse"
    },
    {
        quote: "Whatever the mind of man can conceive and believe, it can achieve.", 
        name: "--Napoleon Hill"
    },
    {
        quote:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",  
        name: "--Robert Frost"
    },
    {
        quote: "Every strike brings me closer to the next home run.", 
        name: "--Babe Ruth"
    },
    {
        quote: "Life is 10% what happens to me and 90% of how I react to it.", 
        name: "–Charles Swindoll"
    },
    {
        quote: "The mind is everything. What you think you become.",  
        name: "--Buddha"
    },
    {
        quote: "I am not a product of my circumstances. I am a product of my decisions.", 
        name: "--Stephen Covey"
    },
    {
        quote:  "You can never cross the ocean until you have the courage to lose sight of the shore.", 
        name: "--Christopher Columbus"
    },
    {
        quote:  "The two most important days in your life are the day you are born and the day you find out why.", 
        name: "--Mark Twain"
    },
    {
        quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", 
        name: "--Aristotle"
    },
]


document.getElementById("generate").addEventListener("click", getQuote);


function getRandomNumber(min, max){
let step1 = max - min + 1;
let step2 = Math.random() * step1;
let result = Math.floor(step2) + min;
return result;
}

function getQuote(){
let random = getRandomNumber(0, quoteList.length);
let ranQuote = quoteList[random].quote;
let ranAuthor = quoteList[random].name;
document.getElementById('wisdom').textContent = ranQuote;
document.getElementById('author').textContent = ranAuthor;
}
    
