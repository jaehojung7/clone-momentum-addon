const quotes = [
    {
        Quote: "The mind is everything. What you think you become.",
        Author: "Buddha",
    },
    {
        Quote: "If you can't explain it simply, you don't understand it well enough.",
        Author: "Albert Einstein",
    },
    {
        Quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        Author: "Buddha",
    },
    {
        Quote: "What's done can't be undone.",
        Author: "William Shakespeare",
    },
    {
        Quote: "A good decision is based on knowledge and not on numbers.",
        Author: "Plato",
    },
    {
        Quote: "What is not started today is never finished tomorrow.",
        Author: "Johann Wolfgang von Goethe",
    },
    {
        Quote: "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
        Author: "Lao Tzu",
    },
    {
        Quote: "Reason has always existed, but not always in a reasonable form.",
        Author: "Karl Marx",
    },
    {
        Quote: "After climbing a great hill, one only finds that there are many more hills to climb.",
        Author: "Nelson Mandela",
    },
    {
        Quote: "Two things awe me most, the starry sky above me and the moral law within me.",
        Author: "Immanuel Kant",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.Quote;
author.innerText = todaysQuote.Author;
