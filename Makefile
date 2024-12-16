install:
	npm ci

gendiff:
	node/gendiff.js

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npx jest --coverage

lint:
	npx eslint .
