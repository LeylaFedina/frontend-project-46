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

import _ from 'lodash';
import { JSONparser, YMLparser } from './parsers.js';

const genDiff = (filepath1, filepath2) => {
    let result = '';
    let file1;
    let file2;

    const getFormat = (filepath) => filepath.split('.')[1];

    if (getFormat(filepath1) === 'json') {
        file1 = JSONparser(filepath1);
        file2 = JSONparser(filepath2);
    } else if (getFormat(filepath1) === 'yml') {
        file1 = YMLparser(filepath1);
        file2 = YMLparser(filepath2);
    }

    const sortedKeys = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));
    sortedKeys.map((key) => {
        if (Object.hasOwn(file1, key) && Object.hasOwn(file2, key)) {
            if (file1[key] === file2[key]) {
                result += `    ${key}: ${file1[key]}\n`;
            } else {
                result += `  - ${key}: ${file1[key]}\n`;
                result += `  + ${key}: ${file2[key]}\n`;
            }
        }

        if (Object.hasOwn(file1, key) && !Object.hasOwn(file2, key)) {
            result += `  - ${key}: ${file1[key]}\n`;
        }

        if (Object.hasOwn(file2, key) && !Object.hasOwn(file1, key)) {
            result += `  + ${key}: ${file2[key]}\n`;
        }
        return result;
    });
    return `{\n  ${result.trim()}\n}`;
};

export default genDiff;