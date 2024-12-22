import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');


const listOfTests = [
  'yml',
  'json',
];

describe('gendiff', () => {
  test.each(listOfTests)('gendiff %s', (format) => {
    const filepath1 = getFixturePath(`file1.${format}`);
    const filepath2 = getFixturePath(`file2.${format}`);

    expect(genDiff(filepath1, filepath2)).toEqual(readFile('resultTree.txt'));
    expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(readFile('resultTree.txt'));
    expect(genDiff(filepath1, filepath2, 'plain')).toEqual(readFile('resultPlain.txt'));
    expect(genDiff(filepath1, filepath2, 'json')).toEqual(readFile('resultJSON.txt'));
  });
});



/*
// Одинокие тестт
test('main JSON test', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('resultTree.txt');

  expect(genDiff(file1, file2)).toEqual(expected);
});

test('main YML test', () => {
  const file1 = getFixturePath('file1.yml');
  const file2 = getFixturePath('file2.yml');
  const expected = readFile('resultTree.txt');

  expect(genDiff(file1, file2)).toEqual(expected);
});

test('Plain gendiff test', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('resultPlain.txt');

  expect(genDiff(file1, file2, 'plain')).toEqual(expected);
});

test('JSON gendiff test', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('resultJSON.txt');

  expect(genDiff(file1, file2, 'json')).toEqual(expected);
});

// Вариант без Вывода имени
test.each([
  {file1: getFixturePath('file1.json'), file2: getFixturePath('file2.json'), expected: readFile('resultTree.txt'), format: '', testName: 'main JSON test'},
  {file1: getFixturePath('file1.yml'), file2: getFixturePath('file2.yml'), expected: readFile('resultTree.txt'), format: '', testName: 'main YML test'},
  {file1: getFixturePath('file1.json'), file2: getFixturePath('file2.json'), expected: readFile('resultPlain.txt'), format: 'plain', testName: 'Plain gendiff test'},
  {file1: getFixturePath('file1.json'), file2: getFixturePath('file2.json'), expected: readFile('resultJSON.txt'), format: 'json', testName: 'JSON gendiff test'},
])('', ({file1, file2, expected, testName}) => {
  expect(genDiff(file1, file2)).toEqual(expected);
});

*/
