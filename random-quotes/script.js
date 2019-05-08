const quotes = [
    {
        name: 'Stephen King',
        quote: 'Get busy living or get busy dying.'
    },
    {
        name: 'John F. Kennedy',
        quote: 'Those who dare to fail miserably can achieve greatly.'
    },

    {
        name: 'Coco Chanel',
        quote: 'Success is most often achieved by those who don’t know that failure is inevitable.'
    },
    {
        name: 'Kanye West',
        quote: "I refuse to accept other people’s ideas of happiness for me. As if there’s a one size fits all standard for happiness."
    },
    {
        name: 'Tony Robbins',
        quote: 'If you do what you’ve always done, you’ll get what you’ve always gotten.'
    },
    {
        name: 'Aristotle',
        quote: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.'
    },
    {
        name: 'Lao Tzu',
        quote: 'When I let go of what I am, I become what I might be.'
    },
    {
        name: 'Alber Einstein',
        quote: 'I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself.'
    },
    {
        name: 'Sheryl Sandberg',
        quote: 'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.'
    },
    {
        name: 'Thelma and Louise',
        quote: 'You get what you settle for.'
    },
    {
        name: 'J.K. Rowling',
        quote: 'It is our choices that show what we truly are, far more than our abilities.'
    },
    {
        name: 'Lao Tzu',
        quote: 'The journey of a thousand miles begins with one step.'
    },
    {
        name: 'Warren Buffet',
        quote: 'Only when the tide goes out do you discover who’s been swimming naked.'
    },
    {
        name: 'Mark Zukerberg',
        quote: 'Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.'
    }
]

const quoteBtn = document.querySelector('#header');
const quoteAuthor = document.querySelector('#author');
const quote = document.querySelector('#quotes');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    
     quoteAuthor.innerHTML = quotes[number].name;
     quote.innerHTML = quotes[number].quote;

}