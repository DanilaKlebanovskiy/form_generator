/*todo : 
1. Рефакторинг с классами
2. Форма должна поддерживать чекбоксы радиокнопки, текстареа, селекты
3. Форма должна быть вложена и могла бы работать с json схема 
4. Стили прикрутить 
5. Валидация формы
 */

/* 
input -reset !!!!
Required - обязательность заполнения, по умолчанию false
Если пришел без основного параметра то задаем его сами
Обязательные type
placeholder 
disabled,tabindex ???????

//Свойство maxlength для inputa поч не работает 
//"required" : "false" ,  "autofocus": "false",  "disabled": "false",срабатывает 
//Есть свойство pattern можно использовать как валидацию, но тоже норм не работает
//не получается нормально сверстать чекбоксы и радиобатаны
Checkbox
   {     
         "label": "Запомнить",
         "type": "checkbox"
         "items":[
               {
               "cheked": "true",
               "value": "yes"},
                 {
               "cheked": "false",
               "value": "no"}
         ] 
      },
Password
      {
         "label": "Пароль",
         "type": "password",
         "disabled": "true"
      },
Textarea
      {  
         "type": "textarea",
         "label": "story",
         "placeholder": "подпись поля"
      } 
Radio
      {
         "type":"radio",
         "name": "beer",
         "option" : [
            {"value": "lager"},
            {"value": "dark" }
         ]
      }  
      
File {
      "type": "file",
      "name": "photo"
},

Selector {
    selected?
   name : "color"
   id: "color"
   option : [{
      value: "red"
      text : "Красный"
   },
   {
      value: "yellow"
      text : "Желтый"
   },
   ]
}

MultipluySelector {
   selected?
   name : "color"
   id: "color"
   multiple : true
   option : [{
      value: "red"
      text : "Красный"
   },
   {
      value: "yellow"
      text : "Желтый"
   },
   ]
}
      
      */

const input = `{
   "inputs": [
     {
     "label": "Фамилия",
     "disabled": "false",
     "autofocus": "false",
     "maxlength": "12",
      "required" : "false",
     "type": "text",
     "id": "last_name", 
     "placeholder": "Vasiya",
     "autocomplete": "on",
     "pattern" : "[A-Z]",
     "hints": ["наруссsdком","безпробелов"]
     },
     {"label": "Я селектор",
      "name": "color",
      "id": "color",
      "type": "select",
      "multiple": "true",
      "options": [{
         "value": "red",
         "text": "Красный",
         "selected": "true"
      },
      {
         "value": "yellow",
         "text": "Желтый"
      }
      ]
   },
   {"label": "Я селектор",
      "name": "color",
      "id": "color",
      "type": "select",
      "multiple": "true",
      "options": [{
         "value": "red",
         "text": "Красный",
         "selected": "true"
      },
      {
         "value": "yellow",
         "text": "Желтый"
      }
      ]
   },
   {"label": "Собакак",
      "name": "color",
      "id": "color",
      "type": "select",
      "multiple": "true",
      "options": [{
         "value": "red",
         "text": "Красный",
         "selected": "true"
      },
      {
         "value": "yellow",
         "text": "Желтый"
      },
      {
         "value": "yellow",
         "text": "Желтый"
      },
      {
         "value": "yellow",
         "text": "Желтый"
      },
      {
         "value": "yellow",
         "text": "Желтый"
      }
      ]
   },
   {"label": "Любовь цветы",
      "name": "color",
      "id": "color",
      "type": "select",
      "multiple": "false",
      "options": [{
         "value": "red",
         "text": "Красный",
         "selected": "true"
      },
      {
         "value": "yellow",
         "text": "Желтый"
      }
      ]
   },
     {
     "label": "Возраст",
     "type": "number",
     "id": "age",
     "max": "10"
     },
     {
      "title": "A multiple choices list",
      "type": "checkbox",
      "items": [
            {
            "label" : "красный",
            "cheked": "true",
            "value": "yes",
            "id": "ch1"
            },
            {
            "label" : "синий",
            "cheked": "false",
            "value": "no",
            "id": "ch2"
         },
         {
            "label" : "синий",
            "cheked": "false",
            "value": "no",
            "id": "ch2"
         },
         {
            "label" : "синий",
            "cheked": "false",
            "value": "no",
            "id": "ch2"
         },
         {
            "label" : "синий",
            "cheked": "false",
            "value": "no",
            "id": "ch2"
         }
      ] 
   },
  {  
   "type": "textarea",
   "id": "textarea1",
   "label": "story",
   "placeholder": "подпись поля"
  },
  {  
   "type": "textarea",
   "id": "textarea1",
   "label": "story",
   "placeholder": "подпись поля"
  },
  {  
   "type": "textarea",
   "id": "textarea1",
   "label": "story",
   "placeholder": "подпись поля"
  },
  {
   "type":"radio",
   "title": "viberi pivko",
   "name": "beer",
   "items": [
      {  
         "label": "Лагерь",
         "value": "lager",
         "id" : "one1"
      },
      {  
         "label": "Дарк",
         "value": "dark",
         "id" : "two2"
      }
   ]
  }  
 ],
   "button": [{
         "type": "submit",
         "url": "www.example.com",
         "text": "Отправить"
    
   },
      {
         "type":"reset",
         "value": "сброс"
      }
   ],
   "style" : "light"
 }`


class JsonForm {
   constructor (element, options) {
      this.element = element;
      this.shema = JSON.parse(options.shema)
      this.style = this.shema.style ? this.shema.style : "light"
   }

   initForm() {
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
         "reset": this._renderSubmit.bind(this)
      }
   }

   _chooseBlackorLigh() {
      if (this.style === "dark") {
         document.body.classList.toggle("dark")
      }
   }
   renderInputs() {
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

   renderButtons() {
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
         "disabled": false
      }
      keys.forEach(element => {


         if (additionalActions[element] !== undefined) {

            additionalActions[element] = true
         } else {
            if (supportActions[element] === undefined || item[element] !== "false") {
               console.log(supportActions[element])
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
   //
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
      const keys = Object.keys(item)
      const additionalActions = {
         "label": false,
         "hints": false,
      }
      keys.forEach(element => {
         if (additionalActions[element] !== undefined) {
            additionalActions[element] = true
         } else if (element !== "type") {
            field[element] = item[element]
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
      this._chooseBlackorLigh()
      this.initForm()
      this.renderInputs()
      this.renderButtons()

   }
}



const formContainer = document.getElementById("start_form")

const Test = new JsonForm(formContainer, { shema: input })
Test.render()



