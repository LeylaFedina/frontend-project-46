import fs from 'fs';

const readFile = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf-8');

const parse = (readFile, format) => {
    switch (format) {
      case 'json':
        return JSON.parse(content);
      default:
        throw new Error(`Не верный формат: ${format}!`);
    }
  };

  export default parse;


  /*
  import _ from 'lodash';

function getDiff(obj1, obj2) {
 const result = {};

 // Получаем все уникальные ключи из обоих объектов
 const allUniqKeys = _.union(_.keys(obj1), _.keys(obj2));

 allUniqKeys.forEach((key) => {
  if (_.has(obj1, key) && _.has(obj2, key)) {
   if (_.isEqual(obj1[key], obj2[key])) {
//Глубокое сравнение: _.isEqual позволяет сравнивать не только простые значения, но и вложенные объекты и массивы
    result[key] = 'unchanged';
   } else {
    result[key] = 'changed';
   }
  } else if (_.has(obj1, key)) {
   result[key] = 'deleted';
  } else if (_.has(obj2, key)) {
   result[key] = 'added';
  }
 });

 return result;
}

export default getDiff;
  */