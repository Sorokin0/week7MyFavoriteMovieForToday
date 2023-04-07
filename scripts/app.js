const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const movieRealiseYear = document.querySelector('.userInputReleaseYear');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieRealiseYearToDisplay = document.querySelector('.movieRealiseYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('posterUrl');
let realiseYearInStorage = localStorage.getItem('year');

if(titleInStorage && imageUrlInStorage && realiseYearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(155, 155, 255, 0.6), rgba(50, 50, 78, 0.3)), url('${imageUrlInStorage}')`;
    movieRealiseYearToDisplay.textContent = realiseYearInStorage;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieRealiseYearInput = movieRealiseYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('posterUrl', posterUrlInput);
    localStorage.setItem('year', movieRealiseYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(155, 155, 255, 0.6), rgba(50, 50, 78, 0.3)), url('${posterUrlInput}')`;
    movieRealiseYearToDisplay.textContent = movieRealiseYearInput;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieRealiseYear.value = '';
});