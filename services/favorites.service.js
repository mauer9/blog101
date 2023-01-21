export class FavoritesService {
    static getFavorites = () => JSON.parse(localStorage.getItem('favorites')) || []
    static setFavorites = favorites => localStorage.setItem('favorites', JSON.stringify(favorites))
}