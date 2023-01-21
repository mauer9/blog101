export function btnHandler($el, FavoritesService) {
    const id = $el.dataset.postId

    if (id) {
        let favorites = FavoritesService.getFavorites()

        if (favorites.includes(id)) {
            $el.classList.remove('button-secondary')
            $el.classList.add('button-primary')
            $el.innerText = 'Save'
            favorites = favorites.filter(e => e !== id)
        } else {
            $el.innerText = 'Remove'
            $el.classList.remove('button-primary')
            $el.classList.add('button-secondary')
            favorites.push(id)
        }

        FavoritesService.setFavorites(favorites)
    }
}