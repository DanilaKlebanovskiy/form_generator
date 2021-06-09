# Генератор форм

Это библиотека JS которая  преобразовывает JSON с описанием контента формы — в готовую вёрстку.


Пример JSON 

```js const input = `{
   "inputs": [
      {
          "label": "Фамилия",
         "type": "text",
         "id": "last_name",
         "className": "test"
      },
      {
         "label": "Имя",
        "type": "text",
        "id": "name",
        "className": "test"
     },
      {
         "label": "Возраст",
         "type": "number",
         "id": "age"
      }
   ],
   "submit": {
      "url": "www.example.com",
      "text": "Отправить"
    }
}`
```


const FormInstance = new JsonForm(input)

FormInstance.render()
FormInstance.validate()

import JsonForm from "json_form"
