const results = document.querySelector('#results')
const form = document.querySelector('#search-form')
const search = document.querySelector('#search-input')


const searchMovies = (query) => {
  fetch(`https://www.omdbapi.com/?apikey=adf1f2d7&s=${query}`)
  .then(response => response.json())
  .then((data) => {
    results.innerHTML = ''

    data.Search.forEach((result) => {

      const movieTag = `
      <li class='list-inline-item'>
        <img src='${result.Poster}'>
        <p>${result.Title}<p>
      </li>`

      results.insertAdjacentHTML('beforeend', movieTag)

    })
  })
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  searchMovies(search.value)
})

const signUp = (email, password) => {
  const url = "https://reqres.in/api/login"
  fetch(url, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({'email': email, 'password': password})
  })
    .then( response => response.json() )
    .then( (data) => {
      console.log(data)
    })
}


const form2 = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
form2.addEventListener('submit', (event) => {
  event.preventDefault()
  signUp(email.value, password.value)
})
