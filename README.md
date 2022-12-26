С помощью create react app type script создаем новое приложение

Удаляем лишнее из компоненты App 

добавляем в основной возвращаемый div глобальные структурные разделы проекта
header nav body footer и т.д.

С помощью css выравниваем по центру и задаем максимальную ширину для всего контента 
А так же разбиваем контент на отдельные зоны с помощью grid

Далее разбиваем каждую отдельную зону на отдельные блоки div с кратким описанием 

Распределяем весь код по отдельным компонентам для каждой отдельный файл, группируем в отдельной папке
single responsibility

для каждой компоненты с форматом tsx создаем отдельный css файл и группируем их в отдельную папку 
импортируем css файлы в файлы tsx к которым они относятся

Стили классов одной компоненты css применяются и для другой компоненты и без import export 
если в tsx файле употребить название класса заданного в css другой компоненты

Все tsx файлы превращаются в один tsx файл который называется bundle.js
по network никаких css файлов при запуске проекта к нам не приходит к нам приходит только js код
и этот js код добавляет css в html элемент прям в тело документа в head в тег style перед body
Все css файлы по итогу попадают в один глобальный header в один глобальный набор стилей

То есть по факту так как стили для любой разбитой структурно компоненты все равно оказываются в одном и том же месте
именно поэтому любой стиль из такого css блока для конкретной компоненты влияет на все остальные компоненты

То есть если где-то в css файле для конкретной компоненты мы пропишем название класса item то в любой другой компоненте 
где мы укажем item применятся стили из первой компоненты.

А если мы хотим чтобы стили из конкретной компоненты влияли только на нее то мы 
переименовываем css файл в модуль Nav.css в Nav.module.css
модуль он же css объект и теперь при импорте import './Nav.css' нужно писать
import "задаем название стилей" from './Nav.module.css'

После задания слова module в названии в браузер будет приходить не класс nav из css (который мы задавали 
в css файле), а Nav_item__wbQ2R, что позволяет нам в css файле писать короткие названия и не думать о том
как сделать название уникальным и при этом они будут дейтсвовать только на ту компоненту на которую нам нужно.

Для того чтобы пользоваться этой технологией нужно использовать название стилей которое мы задали при импорте модуля
import "задаем название стилей" from './Nav.module.css'
например import NavStyle from './Nav.module.css'

NavStyle - объект. Объект это структура данных у которой есть ключ-значение 
let NavStyle {
    '' : '',
    '' : '';
} -> объект

т.о. NavStyle - тоже объект ключами которого являются названия стилей которые мы написали в css файле только без точки
класс nav класс item

let NavStyle {
'nav' : '',
'item' : '';
} 

а значениями этих ключей будут те самые Nav_item__wbQ2R уникальные значения которые задаются при указании нами
слова module в названии css файлов

let NavStyle {
'nav' : 'Nav_item__wbQ2R',
'item' : 'Nav_item__wbQ2R';
} 

т.о. чтобы применить свойства и значения указанные в css модуле в tsx файле нам нужно
в className указать = {} - значит что мы внутрь jsx разметки хотим вставить js код
className={NavStyle.nav}

При этом для картинок которые вложены в теги при проведении действий выше для родительского тега
ничего делать не потребуется стили которые были указаны как вложенные применятся и к ней header img

в js запрещено в названии свойства объекта указывать - 
если в имени мы используем - то тогда мы должны обращаться к такому свойству с помощью ['header-img']
- не используем _ используем

Если мы хотим указать 2 стиля для элемента

по старинке в jsx файле мы бы написали className='item active'
а в css .item.active {...}

let c1 = 'item'
let c2 = 'active'
let cssModuleObject = c1 + ' ' + c2;

but in ecma script 6 

let cssModuleObject = `${c1} ${c2}` the same with - let cssModuleObject = c1 + ' ' + c2; ;
если мы внедряем в jsx js код то мы пишем его в {}
если мы внедряем js в строку то мы пишем его в `${}`

now

mainCssModuleObject = `${CssModuleObject.item} ${CssModuleObject.active}`
но так как `` - это тоже js инструкция то вс. эту х..ню мы тоже оборачиваем в {} и получаем
mainCssModuleObject = {`${CssModuleObject.item} ${CssModuleObject.active}`}

то есть бл... вот так - <div className={`${NavStyle.item} ${NavStyle.active}`}>

чтобы узнать приходят ли свойства в объект просто выводим его в console.log()

Группируем css и tsx файлы компонент в отдельные папки

Дробим на компоненты всё что дробится, а дробится всё.

Propsы Propsы Propsы...

Когда мы пишем в tsx разметке 

<Post /> - это значит что в компоненте Props создаётся пока пустой объект {} 
с входными данными компоненты - которых пока нет. 
Этот пустой объект называется props (похоже на сокращение от properties) хотя его можно было назвать хоть crops
но propsами его договорились называть программисты.

Как этим пользоваться

<Post value="007"/> Когда мы добавляем в компоненту атрибут value="007" в наш объект props попадает

{
value: 007;
}

props={value:007} и теперь внутри самой компоненты, мы можем обращаться к объекту props

{props.value} подставит нам вместо написанного 007

собсна всё.

Если мы напишем 

<Post value="007" name="ilai"/>

то в объекте props у нас будет 

{
    value: 007,
    name: 'ilai'
}

ствесна далее мы можем обращаться как {props.value} так и {props.name} первое выдаст 007 второе 'ilai'

Идея в чём, в том что таким образом можно решить основную проблему "дублирование кода"

мы сможем брать один и тот же <Post/> и добавляя в него разные атрибуты
(то есть добавляя разные свойства и значения в объект props компоненты Post)
влиять на то как конкретный пост будет отображаться в браузере,
то есть влияя на вход получаем разный выход.
То есть наша функция будет иметь доступ к объекту props

Ещё важный момент что если мы напишем 

<Post value="007"/>
<Post name="ilai"/>

это значит что react вызовет функцию Post - 2 раза (компонента эта функция которая возврщает разметку jsx)
но в первом случае она вызовется со значением которое мы указали в первый раз 
во втором случае она вызовется со значение которое мы указали во второй раз

React_17

1 компонента 1 папка 

React_18

Компонента это функция которая возвращает разметку jsx, именуется с большой буквы и принимает на входе объект props
props нужен компоненте для того чтобы на выходе при вызове одной и той же функции получать разную разметку.

Функция должна работать очень предсказуемо
Функция должна возвращать что-либо основываясь только на входящих данных

Предсказуемость поведения заключается в том что если всегда приходит одинаковый объект props
значит функция всегда вернет одинаковую разметку, но если объект props разный на входе, то и на выходе
разметка будет разной

