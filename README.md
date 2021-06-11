# Генератор форм

## Описание:
Это библиотека JS  преобразовывает JSON с описанием контента формы — в html разметку.

## Как подключить:
Для использования библиотеки необходимо подключить script index.js, а так же подключить style.css

Форма поддерживает такие типы как "text","radio","password","number","checkbox" а так же "textarea" и  "select", 
а так же кнопки "submit" и "reset"
      
### Пример JSON 
JSON имеет 3 обязательных поля, inputs, button, style

1.inputs - для добавления полей 
2.button - для добавления полей таких как submit или reset 
3.style - для добавления цветовой темы (поддерживает классы light и dark)
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
    },
    "style" : "light"
}`


```

## Начало работы

Для начала работы с формой получите элемент в которой будет помещена форма:

``` const formContainer = document.getElementById("start_form") ```

Конструктор JsonForm принимает 2 обязательных параметра:

1. Элемент в который будет помещена форма (получен на предыдущем этапе)
2. JSON файл на основе которого будет сгенерирована форма

``` 
const FormInstance = new JsonForm(formContainer,  { shema:  })
```
Для генерации формы, вызовете метод render(), у экзепляра JsonForm

```
FormInstance.render()
```
Поле input в Json файле должно содержать массив объектов, каждый объект обладает обязательным полем type<br/>

input поддерживает type:

```
"text", "search", "email", "tel", "url", "password", "number", "date", "range", "radio", "checkbox", "radio", "select", "textarea"
```
Так же input поддерживает не обязательное поле label (добавляет элемент <label> в html разметку)

```"label": "string"```
      
Все остальные поля в объекте будут добавлены в качестве атрибутов input:

```
type="email", type="search"
      
autocomplete ,maxLength ,name ,pattern ,placeholder ,readonly ,required ,value

type="email"
autocomplete maxLength multiple name pattern placeholder readonly required  value

type="tel" , type="url", type="password"
autocomplete maxLength name pattern placeholder readonly required  value

type="number"
autocomplete maxLength max min name placeholder readonly required size step value

type = "date" , type = "range"
autocomplete list max min name readonly required step value

type="textarea"
      
```
      
Поле hints создает блок подсказок ``` [hint1, hint2, ...] ```

Особенности работы type="checkbox" и type="radio", type="select", 
      
type="select" имеет поле ``multiple`` для создания списка множественного выбора,
option дополнительное поле ``selected``
```
 {
      "label": "Select",
      "name": "color",
      "id": "color",
      "type": "select",
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
 }
      
```
type="checkbox" и type="radio"
      
поле title для заголовка группы радиокнопок, или checkbox
      
поле items массив объектов для каждого checkbox или radio
имеет дополнительное поле ```checked```
      
```
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
         }
      ] 
   }
      
```
Поле button в Json файле должно содержать массив объектов, каждый объект обладает обязательным полем type<br/>

button поддерживает type: 
```
type = "submit", "reset"
Дополнительное поле value
      
```
Поле style служит для выбора цветовой темы html, может иметь два значения dark или light (для выбора темной или светлой темы)
      
### Автор: Данила Клебановский
      

      

      
      
      
      

Тоже самое про button
И про style

Автор 
```
type = "text", type = "search"
Поддерживаемые атрибуты:
autocomplete ,maxlength ,name ,pattern ,placeholder ,readonly ,required ,value

Пример JSON type = "text"

  {
     "label": "Фамилия",
     "disabled": "false",
     "autofocus": "true",
     "maxlength": "12",
      "required" : "false",
     "type": "text",
     "id": "last_name", 
     "placeholder": "Vasiya",
     "autocomplete": "on",
     "pattern" : "[A-Z]",
     "hints": ["наруссsком","безпробелов"],
      "size": "45"
     }



type = "radio", type ="checkbox"
checked name required value

type = "submit"
formaction formenctype formmethod formnovalidate formtarget name value

type = "reset"
name value

А также type = "select"
multiple, required, accesskey






```


