### Hexlet tests and linter status:
[![Actions Status](https://github.com/LeylaFedina/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/LeylaFedina/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/fa23ee55fdc96c9b0c70/maintainability)](https://codeclimate.com/github/LeylaFedina/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fa23ee55fdc96c9b0c70/test_coverage)](https://codeclimate.com/github/LeylaFedina/frontend-project-46/test_coverage)

Вычислитель различий Gendiff - это утилита командной строки, которая сравнивает два файла и выводит результат.
Она может работать с JSON и YML. Результат выводит в трех форматах: stylish (default), plain и json.


### Установка

Клонируйте репозиторий c github:
```
git clone git@github.com:LeylaFedina/frontend-project-46.git
```

Перейдите в папку проекта:
```
cd frontend-project-46
```

Установить зависимости:
```
make install
```


### Использование

Сравнивание двух файлов:
```
gendiff [options] <filepath1> <filepath2>
ex: gendiff -f plain file1.json file2.yaml
```

```
Опции:
  -V, --version        посмотреть версию
  -f, --format [type]  формат выводв (по-умолчанию: "stylish")
  -h, --help           Прочесть "Help"
```


### Примеры

Позже будет добавлена asciinema

```
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]
```

```
gendiff -f plain file1.json file2.yaml
```


# Для Примера
```
gendiff file1.json file2.json

{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow:
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}
```
