
// book search function
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear input field
    searchField.value = '';


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
    if (docs.length == 0) {
        // console.log('No Result Found');


        const noResult = document.getElementById('no-result');
        const h1 = document.createElement('h1');

        toggleNoResult('block');
        // toggleSearchResult('none')

        noResult.textContent = '';


        h1.innerHTML = `
        <h1>No Results Found</h1>
    `;
        noResult.appendChild(h1);
    };

    // looping on array docs by using forEach
    docs.forEach(doc => {
        const div = document.createElement('div');

        div.innerHTML = `
       
        <div class="border rounded border-blue-300 p-2 h-full">
            <div class="flex justify-center">
                <img alt="Image Not Available" src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" >
            </div>
            <h1><span class="font-semibold">Book Title:</span>  ${doc.title}</h1>
            <p><span class="font-semibold">Author Name:</span> ${doc.author_name}</p>
            <p><span class="font-semibold">Publisher:</span>  ${doc.publisher}</p>
            <p><span class="font-semibold">First Published:</span> ${doc.first_publish_year}</p>
        </div>
        `;
        searchResult.appendChild(div);
        toggleNoResult('none');



    });

    // displaying search count
    const div = document.createElement('div');

    div.innerHTML = `
        <h1>Search Count: ${searchLength} </h1>

    </div>
    `;
    searchCount.appendChild(div);

};

// No Results Found mesaage toggler function
const toggleNoResult = displayStyle => {
    document.getElementById('no-result').style.display = displayStyle;
};

