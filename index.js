
class JsonForm {
   constructor (element, options) {
      this.element = element;
      this.shema = JSON.parse(options.shema)
      this.style = this.shema.style ? this.shema.style : "light"
   }

   _initForm() {
      this.form = document.createElement('form')
      this.element.append(this.form)
      this.typeMethods = {
         "text": this._createInput.bind(this),
         "password": this._createInput.bind(this),
         "textarea": this._createTextarea.bind(this),
         "radio": this._createBox.bind(this),
         "select": this._createSelect.bind(this),
         "number": this._createInput.bind(this),
         "checkbox": this._createBox.bind(this),
         "submit": this._renderSubmit.bind(this),
         "reset": this._renderSubmit.bind(this),
         "tel": this._createInput.bind(this),
         "email": this._createInput.bind(this),
         "url": this._createInput.bind(this),
         "range": this._createInput.bind(this),
         "date": this._createInput.bind(this)

      }
   }

   _chooseBlackorLight() {
      if (this.style === "dark") {
         document.body.classList.toggle("dark")
      }
   }
   _renderInputs() {
      this.shema.inputs.forEach((element, idx) => {
         const field = document.createElement('input')
         const label = document.createElement('label')
         const type = element.type
         if (type === undefined) {
            throw new Error(`Uncorected type ${idx}`)
         }
         this._createField(element)
      })
   }

   _renderButtons() {
      this.shema.button.forEach((element, idx) => {
         const field = document.createElement('input')
         const label = document.createElement('label')
         const type = element.type
         if (type === undefined) {
            throw new Error(`Uncorected type ${idx}`)
         }
         this._createField(element)
      })
   }

   _createField(item) {
      if (!this.typeMethods[item.type]) {
         throw new Error(`Unknown type ${item.type}`)
      }
      this.typeMethods[item.type](item)
   }

   _createInput(item, appendElement = null) {
      let flag = false
      if (!appendElement) {
         flag = true
         appendElement = document.createElement('div')
         appendElement.classList = "input"
      }
      const field = document.createElement('input')
      const keys = Object.keys(item)

      const additionalActions = {
         "label": false,
         "hints": false
      }
      const supportActions = {
         "required": false,
         "autofocus": false,
         "disabled": false,
         "readonly": false,
         "multiple": false
      }
      keys.forEach(element => {
         if (additionalActions[element] !== undefined) {
            additionalActions[element] = true
         } else {
            if (supportActions[element] === undefined || item[element] !== "false") {
               field[element] = item[element]
            }
         }
      })
      if (additionalActions.label === true) {
         const label = document.createElement('label')
         label.innerHTML = item.label
         label.htmlFor = item.id
         appendElement.append(label)
      }
      appendElement.append(field)
      if (additionalActions.hints === true) {
         const ul = document.createElement('ul')
         item.hints.forEach(hint => {
            const li = document.createElement('li')
            li.innerHTML = hint
            ul.append(li)
         })
         appendElement.append(ul)
      }
      if (flag) {
         this.form.append(appendElement)
      }
   }

   _createSelect(item) {
      const field = document.createElement('select')
      const div = document.createElement('div')
      div.classList = "select"
      const keys = Object.keys(item)
      const additionalActions = {
         "label": false,
         "hints": false,
         "options": false
      }
      keys.forEach(element => {
         if (additionalActions[element] !== undefined) {
            additionalActions[element] = true
         } else if (element !== "type") {
            if (element !== "multiple" || item[element] !== "false") {
               field[element] = item[element]
            }
         }
      })
      if (additionalActions["options"]) {
         item.options.forEach(element => {
            const option = document.createElement('option')
            if (element.selected) {
               option.selected = true
            }
            option.value = element.value
            option.innerHTML = element.text
            field.append(option)
         })
      }
      if (additionalActions.label === true) {
         const label = document.createElement('label')
         label.innerHTML = item.label
         label.htmlFor = item.id
         div.append(label)
      }
      div.append(field)
      this.form.append(div)
   }
   _createBox(item) {
      const div = document.createElement('div')
      const title = document.createElement('h3')
      div.classList = "box"
      if (item.title !== undefined) {
         title.innerHTML = item.title
         div.append(title)
      }
      item.items.forEach(element => {
         element.type = item.type
         element.name = item.name
         this._createInput(element, div)
      })
      this.form.append(div)
   }
   _createTextarea(item) {
      const field = document.createElement('textarea')
      const div = document.createElement('div')
      div.classList = "textarea"
      const supportActions = {
         "autofocus": false,
         "disabled": false,
         "readonly": false,
         "required": false
      }
      const keys = Object.keys(item)
      const additionalActions = {
         "label": false,
         "hints": false,
      }
      keys.forEach(element => {
         if (additionalActions[element] !== undefined) {
            additionalActions[element] = true
         } else if (element !== "type") {
            if (supportActions[element] === undefined || item[element] !== "false") {
               field[element] = item[element]
            }
         }
      })
      if (additionalActions.label === true) {
         const label = document.createElement('label')
         label.innerHTML = item.label
         label.htmlFor = item.id
         div.append(label)
      }
      div.append(field)
      this.form.append(div)
   }

   _renderSubmit(item) {
      const div = document.createElement("div")
      div.className = "button"
      const inputButton = document.createElement("input")
      const keys = Object.keys(item)
      keys.forEach((element) => {
         inputButton[element] = item[element]
      })
      div.append(inputButton)
      this.form.append(div)

   }

   render() {
      this._chooseBlackorLight()
      this._initForm()
      this._renderInputs()
      this._renderButtons()

   }
}






