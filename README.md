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

Каждое поле добавляются в массив input, в виде объекта, и должно иметь обязательное поле type
Так же может иметь необязательные поля:
``
autocomplete : boolean - включает или отключает автозаполнение.
autofocus : boolean - устанавливает фокус в поле формы.
disabled : boolean - блокирует доступ и изменение элемента.
maxLength : number - максимальное количество символов разрешенных в тексте.
placeholder : string - выводит подсказывающий текст.
pattern : regular expression - устанавливает шаблон ввода.
required : boolean - обязательное для заполнения поле.
name : string - имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.


readonly

``

checked
    Предварительно активированный переключатель или флажок. 

form
    Связывает поле с формой по её идентификатору.
formaction
    Определяет адрес обработчика формы.
formenctype
    Устанавливает способ кодирования данных формы при их отправке на сервер.
formmethod
    Сообщает браузеру каким методом следует передавать данные формы на сервер.
formnovalidate
    Отменяет встроенную проверку данных на корректность.
formtarget
    Определяет окно или фрейм в которое будет загружаться результат, возвращаемый обработчиком формы.
list
    Указывает на список вариантов, которые можно выбирать при вводе текста.
max
    Верхнее значение для ввода числа или даты.
maxlength
    Максимальное количество символов разрешенных в тексте.
min
    Нижнее значение для ввода числа или даты.
multiple
    Позволяет загрузить несколько файлов одновременно.
name
    Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.
pattern
    Устанавливает шаблон ввода.
placeholder
    Выводит подсказывающий текст.
readonly
    Устанавливает, что поле не может изменяться пользователем.
required
    Обязательное для заполнения поле.
size
    Ширина текстового поля.
src
    Адрес графического файла для поля с изображением.
step
    Шаг приращения для числовых полей.
tabindex
    Определяет порядок перехода между элементами с помощью клавиши Tab.
type
    Сообщает браузеру, к какому типу относится элемент формы.
value






