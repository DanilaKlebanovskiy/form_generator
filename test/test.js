const jsForm = `{
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
     "hints": ["язык английский","без пробелов"],
      "size": "45"
     },
     {
      "label": "Дата",
      "type": "date",
      "id": "dateOne"
      },
      {"label": "Собака",
      "name": "breed",
      "id": "breed",
      "type": "select",
      "multiple": "true",
      "options": [{
         "value": "schpic",
         "text": "Шпиц",
         "selected": "true"
      },
      {
         "value": "korgi",
         "text": "Корги"
      },
      {
         "value": "shepherd",
         "text": "Овчарка"
      }
      ]
   },
   {"label": "Цветы",
    "name": "flowers",
    "id": "flowers",
    "type": "select",
    "multiple": "false",
    "options": [{
      "value": "сarnation",
      "text": "Гвоздика",
      "selected": "true"
   },
   {
      "value": "rose",
      "text": "Роза"
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
    "title": "Выберите напиток",
    "type": "checkbox",
    "items": [
      {
         "label" : "Coca-cola",
         "cheked": "false",
         "value": "cocaCola",
         "id": "cola"
      },
      {
         "label" : "Fanta",
         "cheked": "false",
         "value": "fanta",
         "id": "fanta"
         },
     {
         "label" : "Pepsi",
         "cheked": "false",
         "value": "pepsi",
         "id": "pepsi"
         }
      ] 
   },
  {  
   "type": "textarea",
   "id": "textarea",
   "label": "История",
   "placeholder": "подпись поля",
   "autofocus" : "true"
  },
  {
   "type":"radio",
   "title": "Выберите цвет",
   "name": "color",
   "items": [
      {  
         "label": "желтый",
         "value": "yellow",
         "id" : "yellowOne"
      },
      {  
         "label": "красный",
         "value": "red",
         "id" : "redOne"
      }
   ]
  }  
 ],
   "button": [{
         "type": "submit",
  
        
         "value" : "Submit"
    
   },
      {
         "type":"reset",
        
         "value" : "Reset"
      }
   ],
   "style" : "dark"
 }`


const formContainer = document.getElementById("start_form")

const Test = new JsonForm(formContainer, { shema: jsForm })
Test.render()
