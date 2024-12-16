install:
	npm ci

gendiff:
	node/bin/gendiff.js

publish:
	npm publish --dry-run

run:
	node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .
