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
Для начала работы с формой найдите элемент к которому будет присоединяться форма:

``` const formContainer = document.getElementById("start_form") ```

Передайте найденый элемент в конструктор, второым параметром передайте JSON

``` const FormInstance = new JsonForm(formContainer, input) ```

Выполните метод render(), 

```FormInstance.render()```

Каждое поле добавляются в массив input, в виде объекта, и должно иметь обязательное поле type,
в случае некорректного type в консоле будет выведена ошибка ``Unknown type ``. при неуказанном type ``Uncorected type``

```
type = "text", type = "search"
Поддерживаемые атрибуты:
autocomplete ,maxlength ,name ,pattern ,placeholder ,readonly ,required ,value

type="email"
autocomplete maxlength multiple name pattern placeholder readonly required  value

type="tel" , type="url", type="password"
autocomplete maxlength name pattern placeholder readonly required  value

type="number"
autocomplete maxlength max min name placeholder readonly required size step value

type = "date" , type = "range"
autocomplete list max min name readonly required step value

type = "radio", type ="checkbox"
checked name required value
```


