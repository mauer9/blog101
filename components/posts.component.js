import { Component } from '../core/component'
import { apiService } from '../services/api.service'
import { TransformService } from '../services/transform.service'

export class PostsComponent extends Component {
    constructor(id, {loader}) {
        super(id)
        this.loader = loader
    }

    async onShow() {
        this.$el.innerHTML = ''
        this.loader.show()

        const fbObj = await apiService.fetchPosts()
        const posts = TransformService.fbObjToArr(fbObj)
        
        this.loader.hide()
        this.$el.innerHTML = postsToHTML(posts)
    }
}

function postsToHTML(posts) {
    let html = ''
    const button = '<button class="button-primary button-round button-small">Save</button>'
    posts.forEach(post => {
        html +=
            `<div class="panel">
                <div class="panel-head">
                    <p class="panel-title">${post.title}</p>
                    <ul class="tags">
                        <li class="tag ${post.type === 'news' ? 'tag-blue' : 'tag-grays'} tag-rounded">${post.type}</li>
                    </ul>
                </div>
                <div class="panel-body">
                    <p class="multi-line">${post.fulltext}</p>
                </div>
                <div class="panel-footer w-panel-footer">
                    <small>${post.date}</small>
                    ${button}
                </div>
            </div>`
    })
    return html
}