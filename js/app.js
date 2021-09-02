
// Spinner  function
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

// No Results Found mesaage toggler function
const toggleNoResult = displayStyle => {
    document.getElementById('no-result').style.display = displayStyle;
};

// Book Found toggler function
const bookFoundToggler = displayStyle => {
    document.getElementById('search-count').style.display = displayStyle;
};
toggleSpinner('none');
toggleNoResult('none');
bookFoundToggler('none')


// book search function
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    toggleSpinner('block');
    toggleNoResult('none');
    bookFoundToggler('none')



    // load data
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displaySearchResult(data.docs, data.numFound))

};

// display search result and search count
const displaySearchResult = (docs, searchLength) => {

    const searchResult = document.getElementById('search-result');
    const searchCount = document.getElementById('search-count');

    searchResult.textContent = '';
    searchCount.textContent = '';


    // checking whether the search result is 0 or not
    if (docs.length === 0) {

        toggleNoResult('block');
        bookFoundToggler('block')

    };


    // looping on array docs by using forEach
    docs.forEach(doc => {
        const div = document.createElement('div');

        div.innerHTML = `
       
        <div class="border rounded border-blue-300 p-2 h-full">
            <div class="flex justify-center">
                <img alt="Image Not Available" src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" >
            </div>
            <h1><span class="font-semibold">Book Title:</span>  ${doc.title ? doc.title : 'Not Available'}</h1>
            <p><span class="font-semibold">Author Name:</span> ${doc.author_name ? doc.author_name : 'Not Available'}</p>
            <p><span class="font-semibold">Publisher:</span>  ${doc.publisher ? doc.publisher : 'Not Available'}</p>
            <p><span class="font-semibold">First Published:</span> ${doc.first_publish_year ? doc.first_publish_year : 'Not Available'}</p>
        </div>
        `;
        searchResult.appendChild(div);
        bookFoundToggler('block')
        toggleNoResult('none');




    });
    toggleSpinner('none');


    // displaying search count
    const div = document.createElement('div');

    div.innerHTML = `
        <h1>Book Found: ${searchLength} </h1>

    </div>
    `;
    searchCount.appendChild(div);

};

