export function renderPost(post, favorites) {
    return `<div class="panel">
        <div class="panel-head">
            <p class="panel-title">${post.title}</p>
            <ul class="tags">
                <li class="tag ${post.type === 'news' ? 'tag-blue' : 'tag-gray'} tag-rounded">${post.type}</li>
            </ul>
        </div>
        <div class="panel-body">
            <p class="multi-line">${post.fulltext}</p>
        </div>
        <div class="panel-footer w-panel-footer">
            <small>${post.date}</small>
            <button
                ${favorites.includes(post.id) ?
                    `class='button-secondary
                    button-round button-small'
                    data-post-id=${post.id}>
                    Remove`:
                    `class='button-primary
                    button-round button-small'
                    data-post-id=${post.id}>
                    Save`
                }
            </button>
        </div>
    </div>`
}