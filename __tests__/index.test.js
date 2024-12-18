import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

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
