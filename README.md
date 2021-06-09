# Генератор форм

## Это библиотека JS которая  преобразовывает JSON с описанием контента формы — в готовую вёрстку.

Форма поддерживает такие типы как "text","radio","password","number","checkbox" и многие другие а так же "textarea" и  "select", 
а так же кнопки submit и reset
      
### Пример JSON 

```

js const input = `{
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
Для начала работы с формой создайте поле container которому будет присоединяться форма:

``` const formContainer = document.getElementById("start_form") ```

``` const FormInstance = new JsonForm(formContainer, input) ```



FormInstance.render()
FormInstance.validate()

import JsonForm from "json_form"
