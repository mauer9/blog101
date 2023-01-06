class ApiService {
    constructor(url) {
        this.url = url
    }

    async createPost(post) {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'post',
                body: JSON.stringify(post)
            })
            return makeRequest(request)
        } catch(e) {
            console.error(e)
        }
    }

    async fetchPosts() {
        try {
            const request = new Request(`${this.url}/posts.json`, {method: 'get'})
            return makeRequest(request)
        } catch (e) {
            console.error(e)
        }
    }
}

async function makeRequest(request) {
    const response = await fetch(request)
    return await response.json()
}

export const apiService = new ApiService('https://blog101-ddc56-default-rtdb.europe-west1.firebasedatabase.app')