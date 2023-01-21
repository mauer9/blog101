import { HeaderComponent } from './components/header.component'
import { NavigationComponent } from './components/navigation.component'

import { PostsComponent } from './components/posts.component'
import { CreateComponent } from './components/create.component'
import { FavoritesComponent } from './components/favorites.component'

import { LoaderComponent } from './components/loader.component'

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')
const loader = new LoaderComponent('loader')

const posts = new PostsComponent('posts', {loader})
const create = new CreateComponent('create')
const favorites = new FavoritesComponent('favorites')

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorites', component: favorites}
])