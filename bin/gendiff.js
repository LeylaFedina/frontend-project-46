#!/usr/bin/env node
import _ from 'lodash';
import { Command } from '../node_modules/commander/index.js';

const program = new Command();

program
.name('gendiff')
.description('Compares two configuration files and shows a difference.')
.version('1.0.0');

program
  .argument('<filepath1>', 'path to the first file')
  .argument('<filepath2>', 'path to the second file')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .option('-h, --help', 'output usage information');
  



/*
должно выводить

gendiff -h

  Usage: gendiff [options] <filepath1> <filepath2>

  Compares two configuration files and shows a difference.

  Options:
    -V, --version        output the version number
    -f, --format [type]  output format
    -h, --help           output usage information
*/