import { Component } from '../core/component'
import { Form } from '../core/form'
import { Validators } from '../core/validators'
import { apiService } from '../services/api.service'

export class CreateComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this))

        this.form = new Form(this.$el, {
            title: [Validators.required, Validators.minLength(3)],
            fulltext: [Validators.required, Validators.minLength(10)]
        })
    }
}

async function submitHandler(e) {
    e.preventDefault()

    if (this.form.isValid()) {
        const formData = {
            date: new Date().toLocaleDateString('en-GB'),
            type: this.$el.type.value,
            ...this.form.value()
        }

        await apiService.createPost(formData)
        this.form.clear()
        window.alert('Post successfully created!')
    }
}