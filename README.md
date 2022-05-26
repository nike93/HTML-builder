# HTML builder

---



### Цели:

В данной серии заданий основной целью является понимание основ работы с платформой Node.js.  
Вам предлагается выполнить ряд небольших задач с постепенным возрастанием сложности. Финальным штрихом станет создание небольшого приложения по сборке статического сайта.

Обратите внимание, что большинство задач можно выполнить несколькими способами и на данном этапе неправильных среди них нет. Оценивается только работоспособность вашего кода и выполнение поставленных условий. 

---

## Процесс выполнения:
- Сделайте форк репозитория
- Отправьте ссылку на репозиторий в crosscheck-submit
- Клонируйте репозиторий
- Выполните команду ```npm install``` для установки eslint и тайпингов node.js которые помогут вам при выполнении заданий
- Выполните задания. ТЗ для каждого из них находится в файле README.md внутри папки задания
- Запушьте решение в свой форк репозитория

## Crosscheck
 
Ход выполнения проверки описан в вики репозитория. После старта cross-check перейдите по [данной ссылке](https://github.com/EvgeniiMal/HTML-builder/wiki/HTML-builder-crosscheck) и следуйте инструкции на главной странице. 

## Общие правила!!!:

- При решении задач запрещается использование любых сторонних модулей
- Каждое из заданий должно запускаться командой node <имя папки задания> выполненной в корневой директории
- Запрещается использование синхронных функций модуля fs такие как ```fs.statSync(path[, options])```, 
```fs.readFileSync(path[, options])``` и другие находящиеся в разделе [synchronous API](https://nodejs.org/api/fs.html#fs_synchronous_api)
- Запрещается использование таймера setTimeout()
- Выполнение и проверка таска должны проводиться на node LTS версии . 

## Оглавление
[01 Чтение файла с выводом содержимого в консоль](https://github.com/EvgeniiMal/HTML-builder/tree/main/01-read-file)  
[02 Запись консольного ввода в файл](https://github.com/EvgeniiMal/HTML-builder/blob/main/02-write-file)  
[03 Вывод информации о файлаx хранящихся в папке](https://github.com/EvgeniiMal/HTML-builder/blob/main/03-files-in-folder)  
[04 Копирование папки](https://github.com/EvgeniiMal/HTML-builder/tree/main/04-copy-directory)  
[05 Сборка css бандла](https://github.com/EvgeniiMal/HTML-builder/blob/main/05-merge-styles)  
[06 Сборка HTML страницы из компонентов и стилей](https://github.com/EvgeniiMal/HTML-builder/tree/main/06-build-page)  
