const getRandomQuotes = async () => {
    try {
        const response = await fetch('https://zenquotes.io/api/random');
        const json = await response.json();           
        
        const rand = Math.floor(Math.random() * json.length)

        const quotes = json[rand].q
        const author = json[rand].a

        console.log(quotes + "-" + author);

        
    } catch (error) {
        console.log(error);
    }
};

getRandomQuotes()