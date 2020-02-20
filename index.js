function fetchBooks() {
  let book = fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(console.log("Hey your learning!"))
    .then(renderBooks);
  return book
}

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
