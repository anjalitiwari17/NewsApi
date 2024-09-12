document.addEventListener('DOMContentLoaded', function () {
    const favoritesList = document.getElementById('favorites-list');

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];


    function displayFavorites() {
        favoritesList.innerHTML = '';

        favorites.forEach((fav, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${fav.title}</h3>
                <p>Source: ${fav.source.name}</p>
                <img src="${fav.urlToImage}" alt="Article Image" class="article-image">
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            favoritesList.appendChild(li);

        
            const newsImg = li.querySelector('.article-image');
            newsImg.addEventListener('click', () => {
                window.open(fav.url, '_blank'); 
            });

            
            const removeBtn = li.querySelector('.remove-btn');
            removeBtn.addEventListener('click', (event) => {
                event.preventDefault();
                removeFavorite(index); 
                displayFavorites(); 
            });
        });
    }


    function removeFavorite(index) {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    
    displayFavorites();
});



