const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;  

export async function fetchBooksBasedOnQuiz(answers) {
    // Map answers to some simple search terms
    const moodMapping = {
        "Cozy & Relaxed": "cozy",
        "Adventurous": "adventure",
        "Emotional": "emotional",
        "Thought-Provoking": "philosophy"
    };

    const genreMapping = {
        "Fiction": "fiction",
        "Non-fiction": "nonfiction",
        "Fantasy": "fantasy",
        "Mystery": "mystery",
        "Romance": "romance",
        "Sci-Fi": "science fiction"
    };

    const lengthMapping = {
        "Short & Sweet": "short stories",
        "Epic & Long": "epic saga"
    };

    const searchTerms = [];

    if (answers[0]) {
        searchTerms.push(moodMapping[answers[0]] || answers[0]);
    }
    if (answers[1]) {
        searchTerms.push(genreMapping[answers[1]] || answers[1]);
    }
    if (answers[2]) {
        searchTerms.push(lengthMapping[answers[2]] || answers[2]);
    }

    const query = searchTerms.join('+');
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}&maxResults=10`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.items || [];  // return an array of books
    } catch (error) {
        console.error('Failed to fetch books:', error);
        return [];
    }
}

export async function fetchBooksByQuery(query) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}&maxResults=12`;

    console.log('Fetching books for manual search:', url);

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Search Results:', data);

        return data.items || [];
    } catch (error) {
        console.error('Failed to fetch books:', error);
        return [];
    }
}