export class Form {
    constructor(form, controls) {
        this.form = form
        this.controls = controls
    }

    value() {
        const value = {}

        Object.keys(this.controls).forEach(control => {
            value[control] = this.form[control].value
        })

        return value
    }

    clear() {
        Object.keys(this.controls).forEach(control => {
            this.form[control].value = ''
        })
    }

    isValid() {
        let isValidForm = true

        Object.keys(this.controls).forEach(control => {
            const validators = this.controls[control]

            let isValidInputs = true
            validators.forEach(validator => {
                isValidInputs = validator(this.form[control].value) && isValidInputs
            })

            isValidInputs ? clearError(this.form[control]) : setError(this.form[control])

            isValidForm = isValidForm && isValidInputs
        })

        return isValidForm
    }
}

function setError(control) {
    clearError(control)
    const error = `<p class='validation-error'>Invalid input!</p>`

    control.classList.add('invalid')
    control.insertAdjacentHTML('afterend', error)
}

function clearError(control) {
    control.classList.remove('invalid')

    if (control.nextSibling) {
        control.closest('.form-control').removeChild(control.nextSibling)
    }
}