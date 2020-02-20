


function fetchBooks() {
  let books = fetch('https://anapioficeandfire.com/api/books') 
  //sending a get reqest
  .then(resp => resp.json())
  //getting response and turning it into readable json
  .then(json => renderBooks(json));
  
  return books
};

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()

})

