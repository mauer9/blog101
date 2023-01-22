import { Component } from '../core/component'
import { apiService } from '../services/api.service'
import { FavoritesService } from '../services/favorites.service'
import { btnHandler } from '../services/btnHandler.service'
import { renderPost } from '../templates/renderPost.template'

export class FavoritesComponent extends Component {
    constructor(id, {loader}) {
        super(id)
        this.loader = loader
    }

    init() {
        this.$el.addEventListener('click',
            (e) => btnHandler(e.target, FavoritesService, true)
        )
    }

    async onShow() {
        this.$el.innerHTML = ''
        this.loader.show()

        const favorites = FavoritesService.getFavorites()

        if (favorites.length) {
            this.$el.innerHTML = await renderFavorites(favorites)
        } else {
            this.$el.innerHTML = '<p>No favorite posts</p>'
        }

        this.loader.hide()
    }
}

async function renderFavorites(favorites) {
    const res = favorites.map(async favorite => {
        let post = await apiService.fetchPostById(favorite)
        post.id = favorite
        return renderPost(post, favorite)
    })
    return (await Promise.all(res)).join('')
}