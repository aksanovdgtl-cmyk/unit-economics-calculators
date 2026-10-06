# Калькуляторы юнит-экономики / Unit Economics Calculators

Четыре модели для товара, SaaS, маркетплейса и услуг. Считают маржу, прибыль и границы расходов на привлечение. Выгрузка Excel содержит вводные, формулы, сценарии и годовой прогноз.

Автор: [Марат Аксанов](https://aksanov.digital/about), [Aksanov.Digital](https://aksanov.digital).

## Онлайн-версии

- [ecommerce](https://aksanov.digital/tools/unit-economics/ecommerce)
- [saas](https://aksanov.digital/tools/unit-economics/saas)
- [marketplace](https://aksanov.digital/tools/unit-economics/marketplace)
- [services](https://aksanov.digital/tools/unit-economics/services)

Весь каталог: [инструменты для маркетинга и бизнеса](https://aksanov.digital/tools).

## Запуск

Скачайте или клонируйте репозиторий. Откройте `index.html` в современном браузере. Сборка и регистрация не нужны. Для локального сервера:

```sh
python3 -m http.server 8080
```

Откройте `http://localhost:8080`. Страницы инструмента:

- `ecommerce/index.html`
- `saas/index.html`
- `marketplace/index.html`
- `services/index.html`

## Данные и зависимости

Вводные и загруженные отчеты обрабатываются в браузере. Код инструмента не отправляет их на сервер и не подключается к рекламным аккаунтам. В этой версии нет счетчиков сайта и скриптов Tilda.

ExcelJS 4.4.0, MIT. Библиотека загружается с jsDelivr только для чтения и сохранения Excel. Ее код не включен в этот репозиторий.

Для загрузки внешней библиотеки нужен интернет. В запросах к CDN передаются обычные сетевые данные, включая IP; содержимое загруженного отчета туда не отправляется. Внешние изображения из исходной страницы также могут загружаться с CDN. Пользовательские шрифты не включены, используется системный запасной шрифт из исходного стека.

## Ограничения

Результат зависит от вводных. Примерные значения служат для знакомства с моделью. Расчетные ориентиры нужно сверять с составом расходов вашего бизнеса.

## Проверки

```sh
npm install
npm test
```

Проверки используют синтетические вводные, расчетные примеры и файлы. Зависимости из `devDependencies` нужны для тестов; для открытия инструмента установка npm-пакетов не требуется.

## Исходная версия

Код выделен из опубликованных страниц Aksanov.Digital 2026-10-06. Расчетные формулы и пороги сохранены. HTML, CSS и JavaScript разнесены по файлам; внутренние ссылки ведут на исходный сайт. Источники и контрольные суммы фрагментов: [provenance.json](provenance.json).

## Как сослаться

Используйте кнопку GitHub «Cite this repository» или файл [CITATION.cff](CITATION.cff). В статье, презентации или описании своей доработки можно указать:

> Марат Аксанов. Калькуляторы юнит-экономики. Aksanov.Digital. https://aksanov.digital/tools/unit-economics/ecommerce

Ссылка на онлайн-версию при упоминании инструмента приветствуется. MIT требует сохранить уведомление об авторстве и текст лицензии в копиях кода; добавлять ссылку на сайт по условиям лицензии не требуется.

## Лицензия

[MIT](LICENSE), copyright 2026 Marat Aksanov. Лицензия относится к коду и документации этого проекта. Сторонние библиотеки и внешние медиа остаются под собственными лицензиями.

## English

Four client-side unit economics models for ecommerce, SaaS, marketplaces and professional services. Calculate margins, acquisition limits and break-even metrics; export editable Excel workbooks.

Author: [Marat Aksanov](https://aksanov.digital/about). Original tools and methodology: [Aksanov.Digital](https://aksanov.digital/tools).

Open `index.html` in a modern browser, or serve the folder with `python3 -m http.server 8080`. No build step or account is required. Input data stays in the browser. Excel features require the pinned third-party CDN library noted above. This source snapshot excludes Tilda runtime and analytics. See [CITATION.cff](CITATION.cff) for attribution and [LICENSE](LICENSE) for MIT terms.
