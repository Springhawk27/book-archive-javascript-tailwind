
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;


    // // clear input field
    searchField.value = '';


    // load data
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displaySearchResult(data.docs))

    if (searchText == '') {
        displayEmptyMessage();

    }
    else {

        // load data
        const url = `http://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(response => response.json())
            .then(data => displaySearchResult(data.docs))
    }

}

const displayEmptyMessage = () => {
    const emptySearch = document.getElementById('empty-search');
    toggleSearchResult('block');

    emptySearch.textContent = '';
    const h1 = document.createElement('h1');

    h1.innerHTML = `
        <h1>Please enter some text!!!</h1>
    `;
    emptySearch.appendChild(h1);



}
const toggleSearchResult = displayStyle => {
    document.getElementById('empty-search').style.display = displayStyle;
}

// const loadBook = searchText => {
//     const url = `http://openlibrary.org/search.json?q=${searchText}`;
//     fetch(url)
//         .then(response => response.json())
//         // .then(data => displayDocs(data.docs))
//         .then(data => console.log(data.docs))

// }
// loadBook('javascript');


// const displayDocs = docs => {
//     console.log(docs);
// }


const displaySearchResult = docs => {
    console.log(docs);

    const searchResult = document.getElementById('search-result');
    const searchCount = document.getElementById('search-count');
    // searchResult.innerHTML = '';
    searchResult.textContent = '';
    searchCount.textContent = '';

    // if (searchText == '') {

    // }

    // else {
    docs.forEach(doc => {
        // console.log(docs.length);

        // console.log(docs);

        const div = document.createElement('div');
        // div.classList.add('');

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
        toggleSearchResult('none')


    });
    // }
    const div = document.createElement('div');

    div.innerHTML = `
        <h1>Search Count: ${docs.length} </h1>

    </div>
    `;
    searchCount.appendChild(div);

}


/* <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
</div>
</div> */