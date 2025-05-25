// Function to fetch and display a daily quote
document.addEventListener('DOMContentLoaded', function() {
    fetchDailyQuote();
});

function fetchDailyQuote() {
    // Get today's date in YYYY-MM-DD format to use as cache key
    const today = new Date();
    const dateString = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    // Check if we already have a quote cached for today
    let cachedQuote = localStorage.getItem('dailyQuote');
    let cachedDate = localStorage.getItem('quoteDate');
    
    // If we have a cached quote and it's from today, use it
    if (cachedQuote && cachedDate === dateString) {
        displayQuote(JSON.parse(cachedQuote));
        return;
    }
    
    // Try to fetch a new quote with error handling for SSL issues
    fetchQuoteWithFallback();
}

function fetchQuoteWithFallback() {
    const dateString = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    const primaryEndpoint = 'https://api.quotable.io/random';
    const backupEndpoint = 'https://zenquotes.io/api/random'; // Alternative API as fallback
    
    // First try the primary endpoint
    fetchFromEndpoint(primaryEndpoint)
        .catch(error => {
            console.warn('Primary quote API failed, trying fallback:', error);
            // If primary fails, try the backup
            return fetchFromEndpoint(backupEndpoint);
        })
        .catch(error => {
            console.error('All quote APIs failed:', error);
            // If all APIs fail, use a local fallback
            const fallbackQuotes = [
                { content: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
                { content: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
                { content: "First, solve the problem. Then, write the code.", author: "John Johnson" },
                { content: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
                { content: "The best way to predict the future is to implement it.", author: "David Heinemeier Hansson" }
            ];
            const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
            displayQuote(fallbackQuotes[randomIndex]);
        });
}

function fetchFromEndpoint(endpoint) {
    return fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Format data based on which API we're using
            let formattedData;
            if (endpoint.includes('zenquotes')) {
                // ZenQuotes format
                formattedData = {
                    content: data[0].q,
                    author: data[0].a
                };
            } else {
                // Quotable format
                formattedData = data;
            }
            
            // Save the quote in localStorage for today
            const dateString = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
            localStorage.setItem('dailyQuote', JSON.stringify(formattedData));
            localStorage.setItem('quoteDate', dateString);
            
            // Display the quote
            displayQuote(formattedData);
            return formattedData;
        });
}

function displayQuote(quoteData) {
    const quoteElements = document.querySelectorAll('.quote-content');
    const authorElements = document.querySelectorAll('.quote-author');
    
    if (quoteElements.length > 0) {
        quoteElements.forEach(element => {
            element.textContent = quoteData.content;
        });
    }
    
    if (authorElements.length > 0) {
        authorElements.forEach(element => {
            element.textContent = quoteData.author;
        });
    }
}
