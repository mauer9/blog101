import { Component } from '../core/component'
import { apiService } from '../services/api.service'
import { TransformService } from '../services/transform.service'
import { FavoritesService } from '../services/favorites.service'
import { btnHandler } from '../services/btnHandler.service'
import { renderPost } from '../templates/renderPost.template'

export class PostsComponent extends Component {
    constructor(id, {loader}) {
        super(id)
        this.loader = loader
    }

    init() {
        this.$el.addEventListener('click',
            (e) => btnHandler(e.target, FavoritesService)
        )
    }

    async onShow() {
        this.$el.innerHTML = ''
        this.loader.show()

        const fbObj = await apiService.fetchPosts()
        const posts = TransformService.fbObjToArr(fbObj)
        const favorites = FavoritesService.getFavorites()
        
        const postsToHTML = posts
            .map(post => renderPost(post, favorites))
            .join('')

        this.loader.hide()
        this.$el.innerHTML = postsToHTML
    }
}

// function btnHandler(e) {
//     const $el = e.target
//     const id = $el.dataset.id

//     if (id) {
//         let favorites = FavoritesService.getFavorites()

//         if (favorites.includes(id)){
//             $el.classList.remove('button-secondary')
//             $el.classList.add('button-primary')
//             $el.innerText = 'Save'
//             favorites = favorites.filter(e => e !== id)
//         } else {
//             $el.innerText = 'Remove'
//             $el.classList.remove('button-primary')
//             $el.classList.add('button-secondary')
//             favorites.push(id)
//         }

//         FavoritesService.setFavorites(favorites)
//     }
// }