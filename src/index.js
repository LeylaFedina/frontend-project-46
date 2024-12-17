/*
import _ from 'lodash';

function getDiff(obj1, obj2) {
const result = {};

// Получаем все уникальные ключи из обоих объектов
const allUniqKeys = _.union(_.keys(obj1), _.keys(obj2));

allUniqKeys.forEach((key) => {
if (_.has(obj1, key) && _.has(obj2, key)) {
 if (_.isEqual(obj1[key], obj2[key])) {
//Глубокое сравнение: _.isEqual позволяетсравнивать
не только простые значения, но и вложенные объекты и массивы
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

import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import parseFile from './parsers.js';
import buildDiff from './buildDiff.js';
import formatter from './formatters/index.js';

const readfile = (filepath) => {
  const currentDir = cwd();
  const absolutePath = resolve(currentDir, filepath);
  const content = readFileSync(absolutePath, 'utf-8');

  return content;
};

const getExtension = (file) => file.split('.')[1];

const genDiff = (filepath1, filepath2) => {
  const file1 = parseFile(getExtension(filepath1), readfile(filepath1));
  const file2 = parseFile(getExtension(filepath2), readfile(filepath2));

  const diffTree = buildDiff(file1, file2);
  console.log(formatter(diffTree));
};

export default genDiff;
